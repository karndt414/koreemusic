/**
 * FAQ Cache - Pre-computed answers to common questions
 * These bypass the AI entirely, saving tokens and latency
 */

interface FAQEntry {
  keywords: string[]; // Keywords that trigger this response
  response: string;
  confidence: number; // 0-1, how confident we are this matches the query
}

export const faqCache: FAQEntry[] = [
  {
    keywords: ['best', 'distributor', 'choice', 'which', 'recommend', 'should'],
    response: `**Best Distributors by Use Case:**

**For Volume/Speed:** DistroKid ($24.99/year) — unlimited uploads, 24-72 hour distribution, 100% royalty retention.

**For One-Time Payment:** CD Baby ($29 one-time) — 9% royalty cut but payment never expires, great for infrequent releases.

**For Budget Artists:** Amuse (free option available) — includes AI mastering, optional royalty advances.

**For Publishing Control:** TuneCore ($49.99/year) — excellent analytics, publishing administration options.

**Quick Tip:** Most successful independent artists use DistroKid for speed and volume, but compare based on your release frequency and needs.`,
    confidence: 0.95,
  },
  {
    keywords: ['how much', 'spotify', 'earn', 'pay', 'stream', 'million'],
    response: `**Spotify Earnings Breakdown:**

Spotify pays approximately **$0.003-$0.005 per stream** (average $0.004).

**For 1 Million Streams:** ~$3,000-$5,000

**For 100K Streams:** ~$300-$500

**Important Facts:**
- Spotify has a 1,000 minimum streams threshold before paying
- Payments are split among all rights holders (labels, producers, songwriters)
- Payment takes 1-4 months after the streaming month
- Artists signed to labels typically see 15-25% of streaming revenue

**Bottom Line:** Focus on total streams across all platforms, not just Spotify payouts. TIDAL and Apple Music pay significantly higher per stream.`,
    confidence: 0.95,
  },
  {
    keywords: ['apple music', 'earn', 'pay', 'stream'],
    response: `**Apple Music Earnings:**

Apple Music pays **$0.007-$0.01 per stream** (higher than Spotify).

**For 1 Million Streams:** ~$7,000-$10,000

**Why Higher Than Spotify?**
- Subscription-based (no ads) = higher per-stream rate
- Premium users only = better quality payouts
- Artist-friendly platform with growing market share

**How to Get on Apple Music:**
Use a distributor like DistroKid, TuneCore, or CD Baby. It's the standard approach.`,
    confidence: 0.95,
  },
  {
    keywords: ['tidal', 'earn', 'pay', 'stream', 'highest'],
    response: `**TIDAL - The Highest Payer:**

TIDAL pays **$0.0125 per stream** (highest of all major platforms).

**For 1 Million Streams:** ~$12,500

**Why TIDAL Pays More:**
- Artist-centric payment model
- Higher subscription fees ($9.99-$19.99/month)
- Premium audio quality attracts serious music listeners
- Growing independent artist community

**The Catch:** Smaller user base (~70M users vs Spotify's 500M+)

**Strategy:** Use TIDAL alongside Spotify/Apple to maximize revenue from dedicated listeners.`,
    confidence: 0.95,
  },
  {
    keywords: ['royalties', 'types', 'mechanical', 'performance', 'sync'],
    response: `**4 Types of Music Royalties You Need to Know:**

1. **Performance Royalties** (Radio/Streaming/Live Venues)
   - Collected by PROs: ASCAP, BMI, or SESAC
   - Register your compositions with them (free for writers)

2. **Mechanical Royalties** (Reproduction/Downloads/Streaming)
   - Paid when music is reproduced
   - Register with The MLC (themlc.com) for US streaming — completely free
   - Critical for collecting from Spotify, Apple, etc.

3. **Sync Royalties** (Film/TV/Ads/Games)
   - Negotiated per license ($250-$250,000+ depending on use)
   - Use platforms: SubmitHub, Musicbed, Rumblefish

4. **Master Royalties** (Recording Owner)
   - Paid to the person/label who owns the recording
   - You own this if you're an independent artist

**Action Items:** (1) Register compositions with ASCAP/BMI/SESAC, (2) Register with The MLC, (3) Register with SoundExchange for digital radio.`,
    confidence: 0.93,
  },
  {
    keywords: ['copyright', 'register', 'protect', 'legal'],
    response: `**Copyright Registration Basics:**

**Copyright is Automatic** — Your music is copyrighted the moment you record it. You own it automatically.

**But You Should Still Register:**
- **Cost:** $45-$65 per work at copyright.gov
- **Why:** Required to sue for statutory damages in copyright infringement cases
- **Time:** Takes 3-6 months for processing

**Quick Tip:** Registration is optional but highly recommended for serious artists. If someone steals your music, registration gives you more legal leverage.

**For Digital Music:** Register the sound recording (the MP3 itself) and the composition (the song/lyrics). These are separate copyrights.`,
    confidence: 0.92,
  },
  {
    keywords: ['tiktok', 'viral', 'grow', 'promote', 'music'],
    response: `**TikTok is the #1 Music Discovery Platform in 2025:**

**Why TikTok Works:**
- Algorithm rewards engagement (views/shares), not follower count
- New creators CAN go viral — no follower threshold
- Every video has a 50/50 chance of hitting the For You Page (FYP)
- One viral 15-second clip can lead to millions of streams on Spotify/Apple

**How to Use TikTok for Music:**
1. Post 15-30 second clips of your **catchiest moment** (chorus, hook, drop)
2. Use trending sounds/formats
3. Post consistently (3-5x per week)
4. Engage with other creators' content
5. Use #FYP #ForYou #ForYouPage

**Real Data:** Artists like Olivia Rodrigo, The Weeknd, and Bad Bunny built massive audiences through TikTok before mainstream success.

**Bottom Line:** If you're not on TikTok, you're missing the biggest music discovery tool available.`,
    confidence: 0.94,
  },
  {
    keywords: ['submit', 'playlist', 'promotion', 'pitch'],
    response: `**Playlist Pitching & Promotion Tools:**

**Best Services:**
- **SubmitHub** ($0.25-$2 per submission to real curators)
- **Groover** (Similar model, Europe-based)
- **Musosoup** (Great for Spotify playlists)
- **PlaylistPush** (AI matching to playlists)

**Streaming Platform Direct:**
- Spotify for Artists: Submit to Spotify's editorial playlists (free)
- Apple Music: Use direct submit feature (free)
- YouTube Music: Submit through your distributor

**Pro Tips:**
1. Release on Spotify/Apple first (Friday)
2. Pitch on SubmitHub/Groover same day
3. Aim for playlists with 5K-50K followers (better acceptance rate than mega-playlists)
4. Write a good pitch (1-2 sentences about your sound)

**Realistic Expectations:** 5-10% acceptance rate on paid services. Quality matters more than quantity.`,
    confidence: 0.92,
  },
];

/**
 * Search FAQ cache for matching responses
 * Returns response if high-confidence match found, otherwise null
 */
export function searchFAQCache(query: string): string | null {
  const lowerQuery = query.toLowerCase();

  // Find the best matching FAQ entry
  let bestMatch: FAQEntry | null = null;
  let bestScore = 0;

  for (const entry of faqCache) {
    // Count how many keywords match
    const matchCount = entry.keywords.filter((keyword) =>
      lowerQuery.includes(keyword)
    ).length;

    // Calculate confidence based on matches
    const score = (matchCount / entry.keywords.length) * entry.confidence;

    if (score > bestScore && score > 0.6) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  // Return response if we found a confident match
  return bestMatch ? bestMatch.response : null;
}
