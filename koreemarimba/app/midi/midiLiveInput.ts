// Integrates with: app/melos/page.tsx, app/midi/MidiPanel.tsx

import type { LiveMidiEvent, MidiLiveSummary } from './types';

const BUFFER_MAX_EVENTS = 64;
const BUFFER_MAX_SECONDS = 30;
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let midiAccess: MIDIAccess | null = null;
let activeInput: MIDIInput | null = null;
let eventBuffer: LiveMidiEvent[] = [];
let bufferStartTime: number | null = null;

function midiNoteToName(midiNumber: number) {
  const octave = Math.floor(midiNumber / 12) - 1;
  const note = NOTE_NAMES[midiNumber % 12];
  return `${note}${octave}`;
}

export function isWebMidiSupported() {
  return typeof navigator !== 'undefined' && 'requestMIDIAccess' in navigator;
}

export async function requestMidiAccess() {
  if (!isWebMidiSupported()) {
    throw new Error('Web MIDI is not supported in this browser.');
  }

  try {
    midiAccess = await navigator.requestMIDIAccess({ sysex: false });
    const inputs: { id: string; name: string }[] = [];
    midiAccess.inputs.forEach((input) => {
      inputs.push({ id: input.id, name: input.name || 'Unnamed MIDI Device' });
    });
    return inputs;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown MIDI error';
    throw new Error(`MIDI access denied or unavailable: ${message}`);
  }
}

export function connectToMidiInput(portId: string) {
  if (!midiAccess) {
    throw new Error('Call requestMidiAccess() first.');
  }

  if (activeInput) {
    activeInput.onmidimessage = null;
  }

  activeInput = midiAccess.inputs.get(portId) || null;
  if (!activeInput) {
    throw new Error(`MIDI input port "${portId}" not found.`);
  }

  eventBuffer = [];
  bufferStartTime = performance.now();

  activeInput.onmidimessage = (event) => {
    if (!bufferStartTime) {
      bufferStartTime = performance.now();
    }

    const [status, data1, data2] = event.data;
    const type = status & 0xf0;
    const channel = (status & 0x0f) + 1;
    const timeMs = Number((performance.now() - bufferStartTime).toFixed(1));

    if (type === 0x90 && data2 > 0) {
      eventBuffer.push({
        type: 'noteOn',
        note: midiNoteToName(data1),
        midiNumber: data1,
        velocity: Number((data2 / 127).toFixed(2)),
        channel,
        timeMs,
      });
    } else if (type === 0x80 || (type === 0x90 && data2 === 0)) {
      eventBuffer.push({
        type: 'noteOff',
        note: midiNoteToName(data1),
        midiNumber: data1,
        channel,
        timeMs,
      });
    } else if (type === 0xb0) {
      eventBuffer.push({
        type: 'controlChange',
        controller: data1,
        value: data2,
        channel,
        timeMs,
      });
    }

    const cutoffMs = (performance.now() - bufferStartTime) - BUFFER_MAX_SECONDS * 1000;
    eventBuffer = eventBuffer.filter((entry) => entry.timeMs >= cutoffMs).slice(-BUFFER_MAX_EVENTS);
  };

  midiAccess.onstatechange = (event) => {
    if (event.port.id === portId && event.port.state === 'disconnected') {
      activeInput = null;
      eventBuffer = [];
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('midiDisconnected', { detail: { portId } }));
      }
    }
  };
}

export function getLiveMidiSnapshot(): MidiLiveSummary {
  return {
    source: 'midi_live',
    portName: activeInput?.name || 'unknown',
    eventCount: eventBuffer.length,
    captureWindowSeconds: BUFFER_MAX_SECONDS,
    events: [...eventBuffer],
  };
}

export function disconnectMidi() {
  if (activeInput) {
    activeInput.onmidimessage = null;
    activeInput = null;
  }
  if (midiAccess) {
    midiAccess.onstatechange = null;
  }
  eventBuffer = [];
  bufferStartTime = null;
}
