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
          Details for &quot;Two Birds&quot; are coming soon. This page is ready for the final
          program notes, instrumentation, difficulty, and purchase information.
        </p>
      </main>

      <aside className="sidebar song-sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> TBA</p>
        <p><strong>Difficulty:</strong> TBA</p>
        <p><strong>Price:</strong> TBA</p>
        <hr />
        <p>Purchase options for Two Birds are coming soon.</p>
        <hr />
        <p><Link href="/purchase">&larr; Back to Sheet Music</Link></p>
      </aside>
    </div>
  );
}
