// Integrates with: app/melos/page.tsx, app/midi/MidiPanel.tsx
// Depends on: @tonejs/midi

import { Midi } from '@tonejs/midi';
import { getInstrumentName } from './midiInstrumentMap';
import type { MidiFileSummary, MidiTrackSummary } from './types';

const MAX_NOTES_PER_TRACK = 200;
const LARGE_FILE_NOTE_THRESHOLD = 500;
const DRUM_CHANNELS = new Set([9, 10]);

type TrackStats = {
  score: number;
  medianPitch: number;
};

function getMedianPitch(pitches: number[]) {
  if (pitches.length === 0) return 0;
  const sorted = [...pitches].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function computeTrackStats(
  notes: Array<{ midi: number; time: number; duration: number }>,
  trackName: string,
  channel: number | null,
  durationSeconds: number
): TrackStats {
  if (notes.length === 0) {
    return { score: 0, medianPitch: 0 };
  }

  if (channel !== null && DRUM_CHANNELS.has(channel)) {
    return { score: 0, medianPitch: 0 };
  }

  const pitches = notes.map((note) => note.midi);
  const avgPitch = pitches.reduce((sum, pitch) => sum + pitch, 0) / pitches.length;
  const maxPitch = Math.max(...pitches);
  const minPitch = Math.min(...pitches);
  const pitchRange = maxPitch - minPitch;

  const sortedNotes = [...notes].sort((a, b) => a.time - b.time);
  let overlaps = 0;
  let lastEnd = sortedNotes[0].time + sortedNotes[0].duration;

  for (let i = 1; i < sortedNotes.length; i += 1) {
    const note = sortedNotes[i];
    if (note.time < lastEnd - 0.02) {
      overlaps += 1;
    }
    lastEnd = Math.max(lastEnd, note.time + note.duration);
  }

  const overlapRate = overlaps / Math.max(sortedNotes.length - 1, 1);
  const monophonyScore = 1 - overlapRate;
  const density = notes.length / Math.max(durationSeconds, 1);
  const densityScore = Math.min(density / 4, 1);
  const avgPitchScore = avgPitch / 127;
  const rangeScore = Math.min(pitchRange / 36, 1);

  let nameBonus = 0;
  if (/melody|lead|vocal|theme|solo/i.test(trackName)) {
    nameBonus += 0.15;
  }
  if (/bass|drum|perc|pad|chord|accomp/i.test(trackName)) {
    nameBonus -= 0.1;
  }

  const score =
    avgPitchScore * 0.35 +
    rangeScore * 0.25 +
    monophonyScore * 0.25 +
    densityScore * 0.15 +
    nameBonus;

  return { score, medianPitch: getMedianPitch(pitches) };
}

export async function parseMidiFile(file: File): Promise<MidiFileSummary> {
  const arrayBuffer = await file.arrayBuffer();
  const midi = new Midi(arrayBuffer);

  const trackStats: TrackStats[] = [];

  const tracks: MidiTrackSummary[] = midi.tracks.map((track, index) => {
    const truncated = track.notes.length > MAX_NOTES_PER_TRACK;
    const channel = typeof track.channel === 'number' ? track.channel : null;
    const trackName = track.name || `Track ${index + 1}`;
    const noteSlice = track.notes.slice(0, MAX_NOTES_PER_TRACK);
    const notes = noteSlice.map((note) => ({
      name: note.name,
      pitch: note.name.replace(/[0-9]/g, ''),
      octave: note.octave,
      midi: note.midi,
      time: Number(note.time.toFixed(3)),
      duration: Number(note.duration.toFixed(3)),
      velocity: note.velocity,
    }));

    const instrumentProgram =
      typeof track.instrument?.number === 'number' ? track.instrument.number : null;
    const instrumentName = DRUM_CHANNELS.has(channel ?? -1)
      ? 'Drum Kit'
      : track.instrument?.name || getInstrumentName(instrumentProgram);

    trackStats.push(
      computeTrackStats(
        noteSlice.map((note) => ({
          midi: note.midi,
          time: note.time,
          duration: note.duration,
        })),
        trackName,
        channel,
        midi.duration
      )
    );

    return {
      trackIndex: index,
      name: trackName,
      channel,
      instrumentProgram,
      instrumentName: instrumentName || null,
      noteCount: track.notes.length,
      notes,
      truncated,
    };
  });

  const totalNoteCount = tracks.reduce((sum, track) => sum + track.noteCount, 0);
  const truncated = tracks.some((track) => track.truncated);

  let melodyTrackIndex: number | null = null;
  if (totalNoteCount > 0) {
    let bestScore = -Infinity;
    trackStats.forEach((stats, index) => {
      if (stats.score > bestScore) {
        bestScore = stats.score;
        melodyTrackIndex = index;
      }
    });
  }

  if (melodyTrackIndex !== null) {
    const medianPitch = trackStats[melodyTrackIndex]?.medianPitch ?? 0;
    tracks[melodyTrackIndex] = {
      ...tracks[melodyTrackIndex],
      isMelody: true,
      notes: tracks[melodyTrackIndex].notes.map((note) => ({
        ...note,
        isMelody: note.midi >= medianPitch,
      })),
    };
  }

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
    melodyTrackIndex,
    tracks,
  };
}
