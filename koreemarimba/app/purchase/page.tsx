'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

export default function Purchase() {
  usePageVisitor('/purchase');
  const cloudOverlayRef = useRef<HTMLDivElement>(null);
  const sunOverlayRef = useRef<HTMLDivElement>(null);
  const coverArtRef = useRef<HTMLImageElement>(null);
  const flyingHighRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (cloudOverlayRef.current) {
            if (entry.isIntersecting) {
              cloudOverlayRef.current.classList.add('active');
            } else {
              cloudOverlayRef.current.classList.remove('active');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (coverArtRef.current) {
      observer.observe(coverArtRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sunObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!sunOverlayRef.current) return;

          if (entry.isIntersecting) {
            sunOverlayRef.current.classList.add('active');
          } else {
            sunOverlayRef.current.classList.remove('active');
          }
        });
      },
      { threshold: 0.55 }
    );

    if (flyingHighRef.current) {
      sunObserver.observe(flyingHighRef.current);
    }

    return () => sunObserver.disconnect();
  }, []);

  return (
    <>
      <div id="cloud-overlay" aria-hidden="true" ref={cloudOverlayRef}>
        <div className="cloud-panel" id="cloud-left-top"></div>
        <div className="cloud-panel" id="cloud-left-bottom"></div>
        <div className="cloud-panel" id="cloud-right-middle"></div>
      </div>

      <div id="sun-overlay" aria-hidden="true" ref={sunOverlayRef}>
        <div className="sun-core"></div>
      </div>

      <div className="container">
        <main className="main-content">
          <h1>Purchase Music: Solos</h1>
          <p>You can directly support my work and purchase sheet music here.</p>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2>Flying High</h2>
            <Link href="/songs/flying-high">
              <img
                ref={flyingHighRef}
                src="/images/Flying_High.jpg"
                alt="Flying High Album Cover"
                style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
              />
            </Link>
            <p>
              <Link
                href="/songs/flying-high"
                style={{ background: '#333', color: '#fff', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px' }}
              >
                View Details
              </Link>
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2>Into Dreamlands</h2>
            <Link href="/songs/into-dreamlands">
              <img
                ref={coverArtRef}
                id="cover-art"
                src="/images/Into_Dreamlands.png"
                alt="Into Dreamlands Album Cover"
                style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
              />
            </Link>
            <p>
              <Link
                href="/songs/into-dreamlands"
                style={{ background: '#333', color: '#fff', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', marginRight: '10px' }}
              >
                View Details
              </Link>
              <a
                href="https://open.spotify.com/track/5Gs1WLNBjJvyjC5tPaK5PD?si=3067cf42933f474b"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#1DB954', color: '#fff', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px' }}
              >
                Listen on Spotify
              </a>
            </p>
          </div>

          <h3>Catalog Details</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Instrument</th>
                <th>Difficulty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flying High</td>
                <td>Vibraphone</td>
                <td>Intermediate</td>
                <td>TBA</td>
              </tr>
              <tr>
                <td>Into Dreamlands</td>
                <td>5 Octave Marimba</td>
                <td>Advanced</td>
                <td>$14.99</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}
