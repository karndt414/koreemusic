// Integrates with: app/melos/page.tsx, app/midi/MidiPanel.tsx
// Depends on: @tonejs/midi

import { Midi } from '@tonejs/midi';
import type { MidiFileSummary, MidiTrackSummary } from './types';

const MAX_NOTES_PER_TRACK = 200;
const LARGE_FILE_NOTE_THRESHOLD = 500;

export async function parseMidiFile(file: File): Promise<MidiFileSummary> {
  const arrayBuffer = await file.arrayBuffer();
  const midi = new Midi(arrayBuffer);

  const tracks: MidiTrackSummary[] = midi.tracks.map((track, index) => {
    const truncated = track.notes.length > MAX_NOTES_PER_TRACK;
    const notes = track.notes.slice(0, MAX_NOTES_PER_TRACK).map((note) => ({
      name: note.name,
      pitch: note.name.replace(/[0-9]/g, ''),
      octave: note.octave,
      midi: note.midi,
      time: Number(note.time.toFixed(3)),
      duration: Number(note.duration.toFixed(3)),
      velocity: note.velocity,
    }));

    return {
      trackIndex: index,
      name: track.name || `Track ${index + 1}`,
      channel: typeof track.channel === 'number' ? track.channel : null,
      noteCount: track.notes.length,
      notes,
      truncated,
    };
  });

  const totalNoteCount = tracks.reduce((sum, track) => sum + track.noteCount, 0);
  const truncated = tracks.some((track) => track.truncated);

  return {
    source: 'midi_file',
    fileName: file.name,
    durationSeconds: Number(midi.duration.toFixed(2)),
    bpm: midi.header.tempos.length > 0 ? Math.round(midi.header.tempos[0].bpm) : 120,
    timeSignature:
      midi.header.timeSignatures.length > 0
        ? `${midi.header.timeSignatures[0].timeSignature[0]}/${midi.header.timeSignatures[0].timeSignature[1]}`
        : '4/4',
    trackCount: tracks.length,
    totalNoteCount,
    isEmpty: totalNoteCount === 0,
    isLargeFile: totalNoteCount >= LARGE_FILE_NOTE_THRESHOLD,
    truncated,
    tracks,
  };
}
