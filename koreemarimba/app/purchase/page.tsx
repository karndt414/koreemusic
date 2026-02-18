'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Purchase() {
  const cloudOverlayRef = useRef<HTMLDivElement>(null);
  const coverArtRef = useRef<HTMLImageElement>(null);

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

  return (
    <>
      <div id="cloud-overlay" aria-hidden="true" ref={cloudOverlayRef}>
        <div className="cloud-panel" id="cloud-left-top"></div>
        <div className="cloud-panel" id="cloud-left-bottom"></div>
        <div className="cloud-panel" id="cloud-right-middle"></div>
      </div>

      <div className="container">
        <main className="main-content">
          <h1>Purchase Music: Solos</h1>
          <p>You can directly support my work and purchase sheet music here.</p>

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
                🎵 Listen on Spotify
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
                <td>Into Dreamlands</td>
                <td>5 Octave Marimba</td>
                <td>Advanced</td>
                <td>$14.99</td>
              </tr>
              <tr>
                <td>Flying High</td>
                <td>Vibraphone</td>
                <td>Intermediate</td>
                <td>TBA</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}
