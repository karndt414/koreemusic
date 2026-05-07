type NoteLike = {
  midi: number;
  time: number;
};

type CoherenceMetrics = {
  noteCount: number;
  pitchEntropy: number | null;
  intervalEntropy: number | null;
  repetition: number | null;
  rhythmStability: number | null;
  tonalFocus: number | null;
};

type CoherenceResult = {
  score: number;
  label: 'coherent' | 'ambiguous' | 'noisy';
  metrics: CoherenceMetrics;
};

const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function entropyFromCounts(counts: number[]) {
  const total = counts.reduce((sum, value) => sum + value, 0);
  if (total <= 0) return null;
  const maxEntropy = Math.log2(counts.length || 1);
  if (maxEntropy === 0) return 0;

  let entropy = 0;
  counts.forEach((value) => {
    if (value <= 0) return;
    const p = value / total;
    entropy -= p * Math.log2(p);
  });

  return entropy / maxEntropy;
}

function computePitchEntropy(notes: NoteLike[]) {
  const counts = new Array(12).fill(0);
  notes.forEach((note) => {
    counts[note.midi % 12] += 1;
  });
  return entropyFromCounts(counts);
}

function computeIntervalEntropy(notes: NoteLike[]) {
  if (notes.length < 2) return null;
  const sorted = [...notes].sort((a, b) => a.time - b.time);
  const counts = new Array(13).fill(0);
  for (let i = 1; i < sorted.length; i += 1) {
    const interval = Math.abs(sorted[i].midi - sorted[i - 1].midi);
    const bucket = Math.min(interval, 12);
    counts[bucket] += 1;
  }
  return entropyFromCounts(counts);
}

function computeRepetition(notes: NoteLike[]) {
  if (notes.length < 4) return null;
  const sorted = [...notes].sort((a, b) => a.time - b.time);
  const ngramSize = 3;
  const total = Math.max(sorted.length - ngramSize + 1, 0);
  if (total <= 0) return null;
  const counts = new Map<string, number>();

  for (let i = 0; i < total; i += 1) {
    const key = sorted
      .slice(i, i + ngramSize)
      .map((note) => note.midi % 12)
      .join('-');
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  let maxCount = 0;
  counts.forEach((value) => {
    if (value > maxCount) maxCount = value;
  });

  return total > 0 ? maxCount / total : null;
}

function computeRhythmStability(notes: NoteLike[]) {
  if (notes.length < 3) return null;
  const sorted = [...notes].sort((a, b) => a.time - b.time);
  const intervals: number[] = [];
  for (let i = 1; i < sorted.length; i += 1) {
    const delta = sorted[i].time - sorted[i - 1].time;
    if (delta > 0) intervals.push(delta);
  }
  if (intervals.length < 2) return null;
  const mean = intervals.reduce((sum, value) => sum + value, 0) / intervals.length;
  if (mean <= 0) return null;
  const variance =
    intervals.reduce((sum, value) => sum + (value - mean) ** 2, 0) / intervals.length;
  const std = Math.sqrt(variance);
  const cv = std / mean;
  return 1 - clamp(cv / 1.5, 0, 1);
}

function computeTonalFocus(notes: NoteLike[]) {
  if (notes.length === 0) return null;
  const counts = new Array(12).fill(0);
  notes.forEach((note) => {
    counts[note.midi % 12] += 1;
  });

  let best = 0;
  for (let root = 0; root < 12; root += 1) {
    let total = 0;
    MAJOR_SCALE.forEach((degree) => {
      total += counts[(root + degree) % 12];
    });
    if (total > best) best = total;
  }

  return best / notes.length;
}

export function computeCoherence(notes: NoteLike[]): CoherenceResult {
  const noteCount = notes.length;
  if (noteCount < 4) {
    return {
      score: 0.5,
      label: 'ambiguous',
      metrics: {
        noteCount,
        pitchEntropy: null,
        intervalEntropy: null,
        repetition: null,
        rhythmStability: null,
        tonalFocus: null,
      },
    };
  }

  const pitchEntropy = computePitchEntropy(notes);
  const intervalEntropy = computeIntervalEntropy(notes);
  const repetition = computeRepetition(notes);
  const rhythmStability = computeRhythmStability(notes);
  const tonalFocus = computeTonalFocus(notes);

  const entropyScore = 1 - (pitchEntropy ?? 1);
  const intervalScore = 1 - (intervalEntropy ?? 1);
  const repetitionScore = repetition ?? 0;
  const rhythmScore = rhythmStability ?? 0.5;
  const tonalScore = tonalFocus ?? 0.5;

  const score = clamp(
    entropyScore * 0.25 +
      intervalScore * 0.15 +
      repetitionScore * 0.25 +
      rhythmScore * 0.2 +
      tonalScore * 0.15,
    0,
    1
  );

  const label = score >= 0.55 ? 'coherent' : score >= 0.35 ? 'ambiguous' : 'noisy';

  return {
    score,
    label,
    metrics: {
      noteCount,
      pitchEntropy,
      intervalEntropy,
      repetition,
      rhythmStability,
      tonalFocus,
    },
  };
}
