// Integrates with: app/melos/page.tsx, app/api/melos/route.ts

import type { MidiFileSummary, MidiLiveSummary, MidiSummary } from './types';

export function formatMidiContextForAI(midiSummary: MidiSummary | null) {
  if (!midiSummary) return '';

  if (midiSummary.source === 'midi_file') {
    const summary = midiSummary as MidiFileSummary;
    const trackSummaries = summary.tracks
      .map((track) => {
        const noteList = track.notes
          .map(
            (note) =>
              `${note.name}${note.isMelody ? '*' : ''}(vel:${Math.round(
                note.velocity * 127
              )},dur:${note.duration}s)`
          )
          .join(', ');

        const truncationNote = track.truncated ? ' [truncated to 200]' : '';
        const instrumentNote = track.instrumentName ? ` | inst: ${track.instrumentName}` : '';
        const roleNote = track.isMelody ? ' | role: melody' : ' | role: accompaniment';
        return `  Track "${track.name}" (ch${track.channel ?? 'n/a'}${instrumentNote}${roleNote}): ${track.noteCount} notes${truncationNote}.\n  Notes: ${noteList}`;
      })
      .join('\n');

    const emptyNote = summary.isEmpty
      ? '\nNote data: This MIDI file appears to be empty or contains only meta events.'
      : '';

    const largeNote = summary.isLargeFile
      ? '\nNote data: File is large. A representative sample of notes was sent to stay within context limits.'
      : '';

    const coherenceLabel = summary.melodyCoherenceLabel ?? summary.coherenceLabel;
    const coherenceScore = summary.melodyCoherenceScore ?? summary.coherenceScore;

    return `
[MIDI FILE ANALYSIS]
File: ${summary.fileName}
Duration: ${summary.durationSeconds}s | BPM: ${summary.bpm} | Time Signature: ${summary.timeSignature}
Tracks (${summary.trackCount} total):
${trackSummaries}${emptyNote}${largeNote}
Melody track guess: ${summary.melodyTrackIndex !== null ? `Track ${summary.melodyTrackIndex + 1}` : 'unknown'}
  Coherence: ${coherenceLabel} (${Math.round(coherenceScore * 100)}%)
  Melody coherence: ${summary.melodyCoherenceLabel ?? 'unknown'}${summary.melodyCoherenceScore !== null ? ` (${Math.round(summary.melodyCoherenceScore * 100)}%)` : ''}
  ${coherenceLabel === 'noisy' ? 'Note: The playing is flagged as random/noisy. Call this out clearly.' : ''}
* indicates melody notes in the inferred melody track.
[END MIDI FILE ANALYSIS]
`.trim();
  }

  if (midiSummary.source === 'midi_live') {
    const summary = midiSummary as MidiLiveSummary;
    const noteOns = summary.events.filter((event) => event.type === 'noteOn');
    const instrumentSummary = summary.activeInstruments
      .map((instrument) => `ch${instrument.channel}: ${instrument.name}`)
      .join(', ');
    const noteList = noteOns
      .map((event) =>
        `${event.note}${event.isMelody ? '*' : ''}@${event.timeMs}ms(vel:${event.velocity})`
      )
      .join(', ');
    const coherenceLabel = summary.coherenceLabel;

    return `
[LIVE MIDI INPUT - Last ${summary.captureWindowSeconds}s from "${summary.portName}"]
Events captured: ${summary.eventCount} | Note-ons: ${noteOns.length}
Active instruments: ${instrumentSummary || 'unknown'}
Melody channel guess: ${summary.melodyChannel ?? 'unknown'}
Coherence: ${coherenceLabel} (${Math.round(summary.coherenceScore * 100)}%)
${coherenceLabel === 'noisy' ? 'Note: The playing is flagged as random/noisy. Call this out clearly.' : ''}
Notes played: ${noteList || 'none'}
* indicates melody notes in the inferred melody channel.
[END LIVE MIDI INPUT]
`.trim();
  }

  return '';
}

export function getMidiSystemPromptAddition() {
  return `
You have the ability to interpret MIDI musical data. When a [MIDI FILE ANALYSIS] or [LIVE MIDI INPUT] block appears in the user's message, analyze it with musical intelligence:

- Identify the key signature by examining the collection of pitch classes in the notes
- Infer chord structures from simultaneous or near-simultaneous note clusters
- Describe rhythmic patterns, tempo feel, and note density
- Comment on velocity dynamics (soft vs. loud playing, expressive contour)
- Identify melodic motifs or repeating patterns if visible
- For live input: describe what the user appears to be playing in real time
- Respond in plain, musical language suitable for a musician of any experience level unless the user indicates otherwise
- If note data is truncated, acknowledge this and note your analysis covers a portion of the piece
`.trim();
}
