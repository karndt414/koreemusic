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
          Details for &quot;free fall&quot; are coming soon. This page is ready for the final
          program notes, instrumentation, difficulty, and purchase information.
        </p>
      </main>

      <aside className="sidebar song-sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> TBA</p>
        <p><strong>Difficulty:</strong> TBA</p>
        <p><strong>Price:</strong> TBA</p>
        <hr />
        <p>Purchase options for free fall are coming soon.</p>
        <hr />
        <p><Link href="/purchase">&larr; Back to Sheet Music</Link></p>
      </aside>
    </div>
  );
}
