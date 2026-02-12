// src/app/page.js
import Link from 'next/link';

export default function Home() {
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
            and purchase <Link href="/purchase">solos</Link> to bring stories to life through music! Enjoy!!
          </p>
        </div>
      </main>

      <aside className="sidebar">
        <h3>Latest Updates</h3>
        <p><strong>New Release:</strong> Into Dreamlands is now available for purchase.</p>
        <hr />
        <p>Check out my latest performance videos on YouTube!</p>
      </aside>
    </div>
  );
}