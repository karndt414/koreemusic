'use client';

import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function FreeFall() {
  usePageVisitor('/songs/free-fall');

  return (
    <div className="container">
      <main className="main-content song-detail">
        <h1>free fall</h1>

        <div className="song-detail-cover">
          <img src="/images/free_fall.jpg" alt="free fall cover art" />
        </div>

        <p>
          &quot;free fall&quot; is an intermediate solo for 4.3 octave marimba. More program notes
          and purchase details are coming soon.
        </p>
      </main>

      <aside className="sidebar song-sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> 4.3 Octave Marimba</p>
        <p><strong>Difficulty:</strong> Intermediate</p>
        <p><strong>Price:</strong> $11.99</p>
        <hr />
        <div className="song-sidebar-action">
          <a
            href="https://open.spotify.com/track/0VP5jdmh0NgaQyTYTXeA3G?si=768b54010dc74b2a"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Listen on Spotify
          </a>
        </div>
        <hr />
        <p>Purchase options for free fall are coming soon.</p>
        <hr />
        <p><Link href="/purchase">&larr; Back to Sheet Music</Link></p>
      </aside>
    </div>
  );
}
