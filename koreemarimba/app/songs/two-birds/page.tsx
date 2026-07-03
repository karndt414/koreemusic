'use client';

import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function TwoBirds() {
  usePageVisitor('/songs/two-birds');

  return (
    <div className="container">
      <main className="main-content song-detail">
        <h1>Two Birds</h1>

        <div className="song-detail-cover">
          <img src="/images/Two_Birds.jpeg" alt="Two Birds cover art" />
        </div>

        <p>
          &quot;Two Birds&quot; is a duet for two 4.3 octave marimbas and nightingale whistle.
          More program notes and purchase details are coming soon.
        </p>
      </main>

      <aside className="sidebar song-sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> Two 4.3 Octave Marimbas and Nightingale Whistle</p>
        <p><strong>Difficulty:</strong> Intermediate/Advanced</p>
        <p><strong>Price:</strong> $19.99</p>
        <hr />
        <div className="song-sidebar-action">
          <a
            href="https://open.spotify.com/track/0fuFOLr833pmQwrztGWsDw?si=ffa5e55040314978"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Listen on Spotify
          </a>
        </div>
        <hr />
        <p>Purchase options for Two Birds are coming soon.</p>
        <hr />
        <p><Link href="/purchase">&larr; Back to Sheet Music</Link></p>
      </aside>
    </div>
  );
}
