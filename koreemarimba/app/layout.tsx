import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Koree Arndt Music',
  description: 'Percussion performance and sheet music',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <img className="main-logo" src="/images/logo.png" alt="Logo" />
          <div className="title-row">
            <h1>Koree Arndt Music</h1>
            <a href="https://www.youtube.com/@Koreearndt414/videos" target="_blank" rel="noopener noreferrer">
              <img src="/images/youtube.png" alt="YouTube" style={{ width: '30px' }} />
            </a>
          </div>
        </header>

        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/purchase">Sheet Music</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {children}

        <footer>
          &copy; 2025 Koree Arndt - All rights reserved.
        </footer>
      </body>
    </html>
  );
}