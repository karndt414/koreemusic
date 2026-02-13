import Melos from '@/app/components/Melos';

export const metadata = {
  title: 'Melos - Music Industry AI Guide | Koree Arndt Music',
  description: 'Chat with Melos, your AI expert on music distributors, industry trends, and career advice for young artists.',
};

export default function MelosPage() {
  return (
    <div className="container">
      <main className="main-content">
        <h1>Meet Melos 🎵</h1>
        <p>
          Melos is your personal AI guide to the music industry. Whether you&apos;re curious about music distributors, 
          looking for career advice, or want to learn distribution strategies, Melos is here to help young artists like you 
          navigate the path to success.
        </p>

        <h3>What Melos Can Help With:</h3>
        <ul>
          <li>🎧 <strong>Music Distributors:</strong> Spotify, Apple Music, DistroKid, CD Baby, TuneCore, and more</li>
          <li>💰 <strong>Revenue & Royalties:</strong> Understanding payments, splits, and music licensing</li>
          <li>📈 <strong>Growth Strategies:</strong> Building your fanbase and marketing your music</li>
          <li>🤝 <strong>Collaborations:</strong> Finding partners and networking in the industry</li>
          <li>🎯 <strong>Release Planning:</strong> Timing, metadata, and best practices</li>
        </ul>

        <hr style={{ margin: '30px 0' }} />

        <Melos />
      </main>
    </div>
  );
}
