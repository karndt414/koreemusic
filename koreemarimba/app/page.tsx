'use client';

import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function Home() {
  usePageVisitor('/');

  return (
    <div className="container">
      <main className="main-content">
        <h2>Welcome</h2>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/images/artist-photo.jpg"
            alt="Koree Arndt performing"
            className="artist-photo"
          />
        </div>
        <div className="bio">
          <p>
            Hi! I'm Koree Arndt. Welcome to my official site, where you can explore my music
            and purchase{' '}
            <Link href="/purchase" className="bio-link">
              solos
            </Link>
            {' '}to bring stories to life through music! Enjoy!!
          </p>
        </div>
      </main>

      <aside className="sidebar">
        <h3>Latest Updates</h3>
        <div className="update-card">
          <p><strong>New Release:</strong> Into Dreamlands is now available for purchase.</p>
        </div>
        <hr />
        <div className="update-card">
          <p>Check out my latest performance videos on YouTube!</p>
        </div>
        <hr />
        <div className="melos-promo">
          <p><strong>🎵 Meet Melos AI</strong></p>
          <p className="melos-promo-text">Your personal guide to the music industry. Get expert advice on music distributors, career strategies, and more!</p>
          <Link href="/melos" className="melos-cta-button">
            Chat with Melos AI
          </Link>
        </div>
      </aside>
    </div>
  );
}