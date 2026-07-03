'use client';
import Link from 'next/link';
import { usePageVisitor } from '@/lib/usePageVistor';

const songs = [
  {
    title: 'Flying High',
    href: '/songs/flying-high',
    image: '/images/Flying_High.jpg',
    alt: 'Flying High cover art',
    instrument: 'Vibraphone',
    difficulty: 'Intermediate',
    price: 'TBA',
    note: 'Purchase details coming soon.',
  },
  {
    title: 'Two Birds',
    href: '/songs/two-birds',
    image: '/images/Two_Birds.jpeg',
    alt: 'Two Birds cover art',
    instrument: 'TBA',
    difficulty: 'TBA',
    price: 'TBA',
    note: 'Details coming soon.',
  },
  {
    title: 'free fall',
    href: '/songs/free-fall',
    image: '/images/free_fall.jpg',
    alt: 'free fall cover art',
    instrument: 'TBA',
    difficulty: 'TBA',
    price: 'TBA',
    note: 'Details coming soon.',
  },
  {
    title: 'Into Dreamlands',
    href: '/songs/into-dreamlands',
    image: '/images/Into_Dreamlands.png',
    alt: 'Into Dreamlands cover art',
    instrument: '5 Octave Marimba',
    difficulty: 'Advanced',
    price: '$14.99',
    note: 'Available now.',
    spotify: 'https://open.spotify.com/track/5Gs1WLNBjJvyjC5tPaK5PD?si=3067cf42933f474b',
  },
];

export default function Purchase() {
  usePageVisitor('/purchase');

  return (
    <div className="container single-column">
      <main className="main-content catalog-page">
        <div className="page-heading">
          <p className="eyebrow">Sheet Music Catalog</p>
          <h1>Solos by Koree Arndt</h1>
          <p>
            Purchase and preview original percussion solos. New works will be updated with
            full program notes, instrumentation, and pricing soon.
          </p>
        </div>

        <section className="song-grid" aria-label="Available songs">
          {songs.map((song) => (
            <article className="song-card" key={song.title}>
              <Link href={song.href} className="song-cover-link" aria-label={`View ${song.title} details`}>
                <img src={song.image} alt={song.alt} className="song-cover" />
              </Link>
              <div className="song-card-body">
                <p className="song-kicker">{song.instrument}</p>
                <h2>{song.title}</h2>
                <p>{song.note}</p>
                <div className="song-actions">
                  <Link href={song.href} className="button-primary">
                    View Details
                  </Link>
                  {song.spotify && (
                    <a href={song.spotify} target="_blank" rel="noopener noreferrer" className="button-secondary">
                      Listen
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

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
            {songs.map((song) => (
              <tr key={song.title}>
                <td>{song.title}</td>
                <td>{song.instrument}</td>
                <td>{song.difficulty}</td>
                <td>{song.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
