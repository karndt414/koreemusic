'use client';

import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function FlyingHigh() {
  usePageVisitor('/songs/flying-high');

  return (
    <div className="container">
      <main className="main-content">
        <h1>Flying High</h1>

        <div style={{ textAlign: 'center' }}>
          <img
            src="/images/Flying_High.jpg"
            alt="Flying High Album Cover"
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              marginBottom: '20px',
            }}
          />
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

      <aside className="sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> Vibraphone</p>
        <p><strong>Difficulty:</strong> Intermediate</p>
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
