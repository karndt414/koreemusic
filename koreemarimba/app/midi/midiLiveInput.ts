// Integrates with: app/melos/page.tsx, app/midi/MidiPanel.tsx

import { computeCoherence } from './midiCoherence';
import { getInstrumentName } from './midiInstrumentMap';
import type { LiveMidiEvent, MidiLiveSummary } from './types';

const BUFFER_MAX_EVENTS = 256;
const BUFFER_MAX_SECONDS = 30;
const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let midiAccess: MIDIAccess | null = null;
let activeInput: MIDIInput | null = null;
let eventBuffer: LiveMidiEvent[] = [];
let bufferStartTime: number | null = null;
let channelPrograms = new Map<number, number>();

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
  channelPrograms = new Map();

  activeInput.onmidimessage = (event) => {
    if (!bufferStartTime) {
      bufferStartTime = performance.now();
    }

    if (!event.data || event.data.length < 2) {
      return;
    }

    const [status, data1, data2 = 0] = event.data;
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
    } else if (type === 0xc0) {
      channelPrograms.set(channel, data1);
      eventBuffer.push({
        type: 'programChange',
        program: data1,
        instrumentName: getInstrumentName(data1),
        channel,
        timeMs,
      });
    }

    const cutoffMs = (performance.now() - bufferStartTime) - BUFFER_MAX_SECONDS * 1000;
    eventBuffer = eventBuffer.filter((entry) => entry.timeMs >= cutoffMs).slice(-BUFFER_MAX_EVENTS);
  };

  midiAccess.onstatechange = (event) => {
    if (event.port?.id === portId && event.port.state === 'disconnected') {
      activeInput = null;
      eventBuffer = [];
      channelPrograms = new Map();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('midiDisconnected', { detail: { portId } }));
      }
    }
  };
}

function getMelodyChannel(events: LiveMidiEvent[]) {
  const noteEvents = events.filter((event) => event.type === 'noteOn' && event.midiNumber);
  if (noteEvents.length === 0) return null;

  const channelStats = new Map<number, { count: number; totalPitch: number }>();
  noteEvents.forEach((event) => {
    const entry = channelStats.get(event.channel) || { count: 0, totalPitch: 0 };
    entry.count += 1;
    entry.totalPitch += event.midiNumber ?? 0;
    channelStats.set(event.channel, entry);
  });

  let bestChannel: number | null = null;
  let bestScore = -Infinity;
  channelStats.forEach((stats, channel) => {
    const avgPitch = stats.totalPitch / stats.count;
    const pitchScore = avgPitch / 127;
    const countScore = Math.min(stats.count / 12, 1) * 0.2;
    const score = pitchScore + countScore;
    if (score > bestScore) {
      bestScore = score;
      bestChannel = channel;
    }
  });

  return bestChannel;
}

export function getLiveMidiSnapshot(): MidiLiveSummary {
  const melodyChannel = getMelodyChannel(eventBuffer);
  const activeInstruments = [...channelPrograms.entries()]
    .map(([channel, program]) => ({
      channel,
      program,
      name: getInstrumentName(program) || `Program ${program}`,
    }))
    .sort((a, b) => a.channel - b.channel);

  const events = eventBuffer.map((event) => {
    if (melodyChannel && event.channel === melodyChannel && event.type.startsWith('note')) {
      return { ...event, isMelody: true };
    }
    return event;
  });

  const noteEvents = eventBuffer.filter(
    (event) => event.type === 'noteOn' && typeof event.midiNumber === 'number'
  );
  const coherenceEvents = (() => {
    if (melodyChannel) {
      return noteEvents.filter((event) => event.channel === melodyChannel);
    }

    if (noteEvents.length < 8) {
      return noteEvents;
    }

    const sortedByPitch = [...noteEvents].sort(
      (a, b) => (b.midiNumber ?? 0) - (a.midiNumber ?? 0)
    );
    const keepCount = Math.max(Math.floor(sortedByPitch.length * 0.3), 1);
    return sortedByPitch.slice(0, keepCount);
  })();
  const coherence = computeCoherence(
    coherenceEvents.map((event) => ({
      midi: event.midiNumber ?? 0,
      time: event.timeMs / 1000,
    }))
  );

  return {
    source: 'midi_live',
    portName: activeInput?.name || 'unknown',
    eventCount: eventBuffer.length,
    captureWindowSeconds: BUFFER_MAX_SECONDS,
    events,
    activeInstruments,
    melodyChannel,
    coherenceScore: coherence.score,
    coherenceLabel: coherence.label,
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
  channelPrograms = new Map();
}
