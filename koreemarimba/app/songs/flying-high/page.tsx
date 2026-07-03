'use client';

import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function FlyingHigh() {
  usePageVisitor('/songs/flying-high');

  return (
    <div className="container">
      <main className="main-content song-detail">
        <h1>Flying High</h1>

        <div className="song-detail-cover">
          <img src="/images/Flying_High.jpg" alt="Flying High cover art" />
        </div>

        <p>
          &quot;Flying High&quot; is an uplifting vibraphone solo with bright harmonies,
          shimmering textures, and a soaring melodic arc.
        </p>

        <p>
          This piece is designed for intermediate performers who want a musical,
          expressive work that develops touch, phrasing, and dynamic control.
        </p>
      </main>

      <aside className="sidebar song-sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> Vibraphone</p>
        <p><strong>Difficulty:</strong> Intermediate</p>
        <p><strong>Price:</strong> TBA</p>
        <hr />
        <p>
          Purchase options for Flying High are coming soon.
        </p>
        <hr />
        <p><Link href="/purchase">&larr; Back to Sheet Music</Link></p>
      </aside>
    </div>
  );
}
