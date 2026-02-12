'use client';
import Link from 'next/link';
import { useEffect } from 'react';

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (config: { hostedButtonId: string }) => { render: (selector: string) => void };
    };
  }
}

export default function IntoDreamlands() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAdn_AoVt92YcLCIy7ZjM23J_MlOnIKOGNub-q4R0399Lp7WPT04hrHmI1hweAQJppZi7JO-0QvxWVcNo&components=hosted-buttons&enable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal.HostedButtons({
          hostedButtonId: "H97X52WNR2TH6",
        }).render("#paypal-container-H97X52WNR2TH6");
      }
    };
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        // Script may already be removed
      }
    };
  }, []);

  return (
    <div className="container">
      <main className="main-content">
        <h1>Into Dreamlands</h1>

        <div style={{ textAlign: 'center' }}>
          <img
            src="/images/Into_Dreamlands.png"
            alt="Into Dreamlands Album Cover"
            style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', marginBottom: '20px' }}
          />
        </div>

        <p>&quot;Into Dreamlands&quot; is an ethereal and immersive piece that transports listeners into a vivid dreamscape. Through its haunting melodies and atmospheric textures, it captures the struggle and determination of fighting for your dreams and ambitions amid a surreal, otherworldly realm.</p>

        <p>It is geared towards high-intermediate to advanced players- expect to play with very wide intervals and explore many rapid double lateral techniques.</p>
      </main>

      <aside className="sidebar">
        <h3>Song Details</h3>
        <p><strong>Instrument:</strong> 5 Octave Marimba</p>
        <p><strong>Difficulty:</strong> Advanced</p>
        <hr />
        <div>
          <div id="paypal-container-H97X52WNR2TH6"></div>
        </div>
        <hr />
        <p><Link href="/purchase">&larr; Back to Sheet Music</Link></p>
      </aside>
    </div>
  );
}
