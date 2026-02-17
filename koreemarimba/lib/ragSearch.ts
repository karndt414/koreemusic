import { musicIndustryData } from './musicData';

export function searchMusicData(query: string): string {
  const lowerQuery = query.toLowerCase();
  let relevantData = '';

  // Search for distributor mentions
  if (lowerQuery.includes('distributor') || lowerQuery.includes('distribute') || lowerQuery.includes('distrokid') || lowerQuery.includes('tunecore') || lowerQuery.includes('cd baby') || lowerQuery.includes('amuse')) {
    relevantData += '## Music Distributors\n';
    
    if (lowerQuery.includes('distrokid') || lowerQuery.includes('fast')) {
      const dk = musicIndustryData.distributors.distrokid;
      relevantData += `**DistroKid**: ${dk.pricing.musician}, keeps 100% of royalties, unlimited uploads, fastest distribution (24-72 hours). Pros: ${dk.pros.slice(0, 2).join('; ')}.\n`;
    }
    
    if (lowerQuery.includes('cd baby') || lowerQuery.includes('physical')) {
      const cb = musicIndustryData.distributors.cdbaby;
      relevantData += `**CD Baby**: ${cb.pricing.albumStandard}, 9% royalty cut, one-time payment that never expires. Best for: Physical distribution and infrequent releases.\n`;
    }
    
    if (lowerQuery.includes('tunecore')) {
      const tc = musicIndustryData.distributors.tunecore;
      relevantData += `**TuneCore**: ${tc.pricing.rising}, keeps 100% of royalties, includes publishing admin options. Great analytics dashboard.\n`;
    }
    
    if (lowerQuery.includes('amuse') || lowerQuery.includes('free') || lowerQuery.includes('budget')) {
      const am = musicIndustryData.distributors.amuse;
      relevantData += `**Amuse**: ${am.pricing.artist}, includes AI mastering, royalty advances available. Best for budget-conscious artists.\n`;
    }

    if (lowerQuery.includes('best') || lowerQuery.includes('compare')) {
      relevantData += `\n**Quick Comparison**: DistroKid best for volume/speed ($24.99/yr); CD Baby best for one-time payment ($29); RouteNote has free option (15% cut); TuneCore best for publishing needs.\n`;
    }
  }

  // Search for streaming payment info
  if (lowerQuery.includes('spotify') || lowerQuery.includes('apple music') || lowerQuery.includes('payment') || lowerQuery.includes('earn') || lowerQuery.includes('stream') || lowerQuery.includes('royalty')) {
    relevantData += '## Streaming Platform Royalties\n';
    
    if (lowerQuery.includes('spotify')) {
      const sp = musicIndustryData.streamingPlatforms.spotify;
      relevantData += `**Spotify**: ~${sp.payPerStream} per stream (average), ${sp.earnings1MStreams} for 1 million streams. Minimum 1,000 streams required to generate royalties. Largest platform globally (${sp.users}).\n`;
    }
    
    if (lowerQuery.includes('apple')) {
      const am = musicIndustryData.streamingPlatforms.appleMusic;
      relevantData += `**Apple Music**: ${am.payPerStream} per stream (higher than Spotify), ~${am.earnings1MStreams} for 1 million streams. Premium subscribers only = higher payouts.\n`;
    }
    
    if (lowerQuery.includes('tidal')) {
      const td = musicIndustryData.streamingPlatforms.tidal;
      relevantData += `**TIDAL**: ${td.payPerStream} per stream (HIGHEST of all platforms), ~${td.earnings1MStreams} for 1 million streams. Artist-centric payment model; smaller user base.\n`;
    }
    
    if (lowerQuery.includes('youtube')) {
      const yt = musicIndustryData.streamingPlatforms.youtube;
      relevantData += `**YouTube**: ${yt.payPerStream.youtubeMain} per stream; includes Content ID for monetizing use of your music in others' videos (additional revenue).\n`;
    }

    if (lowerQuery.includes('compare') || lowerQuery.includes('best')) {
      relevantData += `\n**Platform Comparison**: Apple Music highest per-stream ($0.007-$0.01); TIDAL second highest ($0.0125); Spotify and YouTube lower but massive reach. For 1M streams: TIDAL ~$12,500, Apple ~$7,000-$10,000, Spotify $3,000-$4,000.\n`;
    }
  }

  // Search for royalty/copyright info
  if (lowerQuery.includes('royalty') || lowerQuery.includes('copyright') || lowerQuery.includes('money') || lowerQuery.includes('performance') || lowerQuery.includes('mechanical') || lowerQuery.includes('sync')) {
    relevantData += '## Royalties & Rights Overview\n';
    relevantData += `There are multiple types of royalties: Performance (radio/streaming), Mechanical (reproduction), Sync (visual media), Master (recording owner), and Neighboring Rights (digital radio).\n`;
    
    if (lowerQuery.includes('pro') || lowerQuery.includes('ascap') || lowerQuery.includes('bmi') || lowerQuery.includes('sesac') || lowerQuery.includes('performance')) {
      relevantData += `\n**PROs (Performance Royalties)**: Register with ASCAP (free for writers, $50 for publishers), BMI (free for writers, $150-$250 for publishers), or SESAC (invite-only). Collects performance royalties from streaming, radio, venues.\n`;
    }

    if (lowerQuery.includes('mechanical') || lowerQuery.includes('reproduce')) {
      relevantData += `\n**Mechanical Royalties**: Paid when music is reproduced (streaming, downloads, physical). Register with the MLC (themlc.com) for US streaming mechanicals — free and critical for collecting from Spotify, Apple, etc.\n`;
    }

    if (lowerQuery.includes('soundexchange') || lowerQuery.includes('digital radio') || lowerQuery.includes('pandora')) {
      const se = musicIndustryData.royalties.soundExchange;
      relevantData += `\n**SoundExchange**: Collects digital performance royalties for non-interactive radio (Pandora, SiriusXM). Artists get 45% of royalties. Completely separate from PRO — register free at soundexchange.com.\n`;
    }

    if (lowerQuery.includes('copyright')) {
      relevantData += `\n**Copyright Registration**: Register at copyright.gov ($45-$65). Not required for ownership but required to sue for statutory damages. Copyright is automatic the moment you record.\n`;
    }

    if (lowerQuery.includes('sync')) {
      relevantData += `\n**Sync Licensing**: Your music in film, TV, ads, games. Fee ranges: indie films $250-$5,000, TV $1,000-$10,000, national ads $10,000-$250,000+. Use platforms like SubmitHub, Musicbed, or pitch directly.\n`;
    }
  }

  // Search for career/growth tips
  if (lowerQuery.includes('grow') || lowerQuery.includes('promote') || lowerQuery.includes('strategy') || lowerQuery.includes('fanbase') || lowerQuery.includes('release') || lowerQuery.includes('tiktok') || lowerQuery.includes('marketing')) {
    relevantData += '## Artist Growth & Promotion\n';
    
    if (lowerQuery.includes('tiktok') || lowerQuery.includes('viral')) {
      relevantData += `**TikTok**: Most powerful platform for music discovery in 2024-2025. Post 15-30 second clips of your catchiest moments. Algorithm rewards engagement rate, not follower count — new creators CAN go viral. Use trending sounds/formats.\n`;
    }

    if (lowerQuery.includes('release')) {
      relevantData += `**Release Strategy**: Release singles every 4-8 weeks to keep algorithm active. Submit to Spotify editorial at least 7 days before release. Stagger releases (single → single → album) rather than dumping all songs at once.\n`;
    }

    if (lowerQuery.includes('playlist')) {
      relevantData += `**Playlist Pitching**: Submit to Spotify for Artists editorial playlists 7+ days early. Use SubmitHub or Groover for independent curator playlists. Algorithmic playlists (Discover Weekly, Release Radar) reward engagement in first 7-30 days of release.\n`;
    }

    if (lowerQuery.includes('email')) {
      relevantData += `**Email List**: Build an email list — the only audience you truly own. Use Mailchimp (free up to 500) or Mailerlite (free up to 1,000). Send at minimum monthly with exclusive content.\n`;
    }

    if (lowerQuery.includes('social') || lowerQuery.includes('instagram') || lowerQuery.includes('youtube')) {
      relevantData += `**Social Media**: Post consistently (3-5x/week). Behind-the-scenes content outperforms ads. Cross-post TikTok content to Instagram Reels and YouTube Shorts. Engage authentically with every comment early on.\n`;
    }
  }

  // Search for production/DAW info
  if (lowerQuery.includes('daw') || lowerQuery.includes('production') || lowerQuery.includes('ableton') || lowerQuery.includes('logic') || lowerQuery.includes('fl studio')) {
    relevantData += '## Music Production\n';
    
    if (lowerQuery.includes('ableton')) {
      const ab = musicIndustryData.production.daws.abletonLive;
      relevantData += `**Ableton Live**: $${ab.pricing.intro}-$${ab.pricing.suite}, best for electronic music and live performance. Session View (clip launcher) is unique. Used by Deadmau5, Skrillex, Madeon.\n`;
    }

    if (lowerQuery.includes('fl studio') || lowerQuery.includes('beatmaking')) {
      const fl = musicIndustryData.production.daws.flStudio;
      relevantData += `**FL Studio**: $${fl.pricing.producer} lifetime with free updates forever. Best piano roll and step sequencer. Most hip-hop beat tutorials online. Used by Metro Boomin, Martin Garrix.\n`;
    }

    if (lowerQuery.includes('logic')) {
      const lp = musicIndustryData.production.daws.logicPro;
      relevantData += `**Logic Pro**: $${lp.pricing.logicPro} one-time, Mac only. Best stock library; Drummer plugin excellent; great value. Used by Ed Sheeran, Billie Eilish.\n`;
    }

    if (lowerQuery.includes('reaper')) {
      const rp = musicIndustryData.production.daws.reaper;
      relevantData += `**REAPER**: $${rp.pricing.commercial}, best price-to-feature ratio. Fully customizable; extremely lightweight. Great for Linux users.\n`;
    }

    if (lowerQuery.includes('compare') || lowerQuery.includes('choose')) {
      relevantData += `\n**DAW Quick Guide**: Electronic/hip-hop → FL Studio or Ableton; Mac users → Logic Pro; Band recording → Pro Tools; Budget → REAPER.\n`;
    }
  }

  // Search for theory/music fundamentals
  if (lowerQuery.includes('theory') || lowerQuery.includes('scale') || lowerQuery.includes('chord') || lowerQuery.includes('progression')) {
    relevantData += '## Music Theory Fundamentals\n';
    
    if (lowerQuery.includes('scale')) {
      relevantData += `**Major Scale**: Bright, happy. Pattern: W-W-H-W-W-W-H. Used in most Western music.\n`;
      relevantData += `**Minor Scale**: Dark, sad. Pattern: W-H-W-W-H-W-W.\n`;
      relevantData += `**Pentatonic**: 5-note scale. Minor pentatonic is backbone of blues and rock solos.\n`;
    }

    if (lowerQuery.includes('chord')) {
      relevantData += `**Major Chord**: Root + Major 3rd + Perfect 5th. Bright, happy.\n`;
      relevantData += `**Minor Chord**: Root + Minor 3rd + Perfect 5th. Dark, sad.\n`;
      relevantData += `**Dominant 7th**: Root + M3 + P5 + m7. Bluesy, wants to resolve.\n`;
    }

    if (lowerQuery.includes('progression')) {
      relevantData += `**Common Progressions**: I-IV-V-I (most fundamental); I-V-vi-IV (ubiquitous pop 4-chord); vi-IV-I-V (emotional, slightly sad); ii-V-I (jazz standard).\n`;
    }
  }

  // Search for business/legal info
  if (lowerQuery.includes('contract') || lowerQuery.includes('deal') || lowerQuery.includes('attorney') || lowerQuery.includes('label') || lowerQuery.includes('business') || lowerQuery.includes('tax')) {
    relevantData += '## Music Business & Legal\n';
    
    if (lowerQuery.includes('contract') || lowerQuery.includes('deal')) {
      relevantData += `**Never sign a contract without a music attorney** — $200-$600/hour is worth protecting your rights. Watch for: 360 deals (label takes % of all revenue), recoupment clauses (advance is a loan), and master ownership terms.\n`;
    }

    if (lowerQuery.includes('label')) {
      relevantData += `**Record Deals**: Traditional (label funds recording, takes master ownership + royalty %), Distribution (artist keeps masters, pays distributor fee), 360 (label takes piece of all revenue). Modern artists often avoid 360 deals.\n`;
    }

    if (lowerQuery.includes('tax')) {
      relevantData += `**Self-Employment Taxes**: Musicians pay ~15.3% self-employment tax on net income. Pay quarterly estimated taxes. Deductible: equipment, software, studio space, travel, marketing, legal fees.\n`;
    }

    if (lowerQuery.includes('llc') || lowerQuery.includes('business structure')) {
      relevantData += `**LLC vs Sole Proprietorship**: Default is sole proprietor (no filing). Form LLC once earning $5,000+ — separates personal and business liability (~$50-$500 to form).\n`;
    }
  }

  // Search for live performance/touring
  if (lowerQuery.includes('tour') || lowerQuery.includes('show') || lowerQuery.includes('live') || lowerQuery.includes('performance') || lowerQuery.includes('merch')) {
    relevantData += '## Live Performance & Touring\n';
    
    if (lowerQuery.includes('merch')) {
      relevantData += `**Merchandise**: Often the most profitable show income stream. Typical: $2-$10 per attendee in sales. T-shirts/hoodies best sellers. Keep prices accessible ($25 tee > $40 tee). 30-50% margin on online merch.\n`;
    }

    if (lowerQuery.includes('tour')) {
      relevantData += `**Touring Basics**: Tour expenses include transportation, hotels, crew, food. Income from venue guarantees, door splits, and merch. Build local following before touring nationally.\n`;
    }

    if (lowerQuery.includes('royalty') && lowerQuery.includes('live')) {
      relevantData += `**Live Performance Royalties**: Venues pay blanket licensing fees to PROs. Submit your setlist to your PRO after each show to collect these royalties.\n`;
    }
  }

  // Search for genre-specific info
  if (lowerQuery.includes('hip-hop') || lowerQuery.includes('hiphop') || lowerQuery.includes('rap') || lowerQuery.includes('trap')) {
    relevantData += '## Hip-Hop Production\n';
    relevantData += `**BPM Range**: 70-100 (classic); 120-150 (trap); 100-120 (drill).\n`;
    relevantData += `**Essential**: 808 bass, hi-hat rolls, kicked snare patterns, sampled vocals.\n`;
    relevantData += `**DAWs**: FL Studio most popular; Ableton, Logic also used.\n`;
    relevantData += `**Sampling Note**: Clearing samples requires permission from BOTH master owner AND composer — often costly. Many producers use interpolations (re-record melody) instead.\n`;
  }

  if (lowerQuery.includes('electronic') || lowerQuery.includes('edm') || lowerQuery.includes('house') || lowerQuery.includes('techno') || lowerQuery.includes('dnb')) {
    relevantData += '## Electronic Music\n';
    relevantData += `**Distribution**: Symphonic Distribution recommended (includes EDM-specialty DSPs without extra fees).\n`;
    relevantData += `**BPM Ranges**: House 120-130, Techno 130-150, Drum & Bass 160-180.\n`;
    relevantData += `**Platforms**: Festival slots often only for electronic artists — network heavily at conventions and conferences.\n`;
  }

  // Search for AI and emerging trends
  if (lowerQuery.includes('ai') || lowerQuery.includes('artificial intelligence') || lowerQuery.includes('future') || lowerQuery.includes('trend')) {
    relevantData += '## AI in Music (2025)\n';
    relevantData += `**AI Generation**: Suno, Udio, Google MusicFX can generate full songs. Legal status of AI-generated music is unsettled — copyright protection unclear.\n`;
    relevantData += `**AI Mastering**: LANDR, eMastered, iZotope Ozone AI offer affordable AI mastering ($0-$30/song). Quality good for most streaming uses.\n`;
    relevantData += `**Stem Separation**: AI can separate full mixes into stems (vocals, drums, bass). Tools: Spleeter (free), Logic Pro 11, Ableton Live 12.\n`;
    relevantData += `**Caution**: Universal, Sony, Warner sued Suno/Udio for copyright infringement in 2024. Use AI tools ethically; disclose AI use; ensure you own training data.\n`;
  }

  // If no specific matches found, return general music industry overview
  if (relevantData === '') {
    relevantData = `## Music Industry Overview
You can ask Melos about: music distributors (DistroKid, TuneCore, CD Baby, Amuse), streaming platforms (Spotify, Apple Music, YouTube, TIDAL, etc.), royalties and rights, PROs (ASCAP, BMI, SESAC), music production and DAWs, music theory, record label deals, publishing, live performance, touring, merchandise, social media strategy, playlist pitching, record deals, taxes, business structure, hip-hop and electronic music production, and emerging trends like AI in music.\n`;
  }

  return relevantData;
}