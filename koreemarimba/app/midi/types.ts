// Integrates with: app/melos/page.tsx, app/midi/MidiPanel.tsx, app/midi/midiAiContext.ts

export type MidiNoteSummary = {
  name: string;
  pitch: string;
  octave: number;
  midi: number;
  time: number;
  duration: number;
  velocity: number;
  isMelody?: boolean;
};

export type MidiTrackSummary = {
  trackIndex: number;
  name: string;
  channel: number | null;
  instrumentProgram: number | null;
  instrumentName: string | null;
  noteCount: number;
  notes: MidiNoteSummary[];
  truncated: boolean;
  isMelody?: boolean;
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
  melodyTrackIndex: number | null;
  tracks: MidiTrackSummary[];
};

export type LiveMidiEvent = {
  type: 'noteOn' | 'noteOff' | 'controlChange' | 'programChange';
  note?: string;
  midiNumber?: number;
  velocity?: number;
  controller?: number;
  value?: number;
  program?: number;
  instrumentName?: string | null;
  channel: number;
  timeMs: number;
  isMelody?: boolean;
};

export type MidiLiveSummary = {
  source: 'midi_live';
  portName: string;
  eventCount: number;
  captureWindowSeconds: number;
  events: LiveMidiEvent[];
  activeInstruments: { channel: number; program: number; name: string }[];
  melodyChannel: number | null;
};

export type MidiSummary = MidiFileSummary | MidiLiveSummary;
