// Integrates with: app/melos/page.tsx, app/midi/MidiPanel.tsx, app/midi/midiAiContext.ts

export type MidiNoteSummary = {
  name: string;
  pitch: string;
  octave: number;
  midi: number;
  time: number;
  duration: number;
  velocity: number;
};

export type MidiTrackSummary = {
  trackIndex: number;
  name: string;
  channel: number | null;
  noteCount: number;
  notes: MidiNoteSummary[];
  truncated: boolean;
};

export type MidiFileSummary = {
  source: 'midi_file';
  fileName: string;
  durationSeconds: number;
  bpm: number;
  timeSignature: string;
  trackCount: number;
  totalNoteCount: number;
  isEmpty: boolean;
  isLargeFile: boolean;
  truncated: boolean;
  tracks: MidiTrackSummary[];
};

export type LiveMidiEvent = {
  type: 'noteOn' | 'noteOff' | 'controlChange';
  note?: string;
  midiNumber?: number;
  velocity?: number;
  controller?: number;
  value?: number;
  channel: number;
  timeMs: number;
};

export type MidiLiveSummary = {
  source: 'midi_live';
  portName: string;
  eventCount: number;
  captureWindowSeconds: number;
  events: LiveMidiEvent[];
};

export type MidiSummary = MidiFileSummary | MidiLiveSummary;
