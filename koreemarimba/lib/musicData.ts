// ============================================================
// COMPREHENSIVE MUSIC INDUSTRY DATA LIBRARY
// For use in RAG (Retrieval-Augmented Generation) systems
// Last updated: 2025/2026 — Researched from live industry sources
// ============================================================

export const musicIndustryData = {

    // ──────────────────────────────────────────────────────────
    // SECTION 1: MUSIC DISTRIBUTORS
    // ──────────────────────────────────────────────────────────
    distributors: {
        distrokid: {
            name: "DistroKid",
            pricing: {
                musician: "$24.99/year (unlimited uploads, 1 artist)",
                musicianPlus: "$39.99/year (1 artist + extras like release scheduling, Spotify pre-save)",
                label: "$79.99–$179.99/year (multiple artists, varies by artist count)",
            },
            royaltyCut: "0% — keeps 100% of streaming royalties",
            uploads: "Unlimited singles and albums",
            platforms: "Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, TikTok, Instagram, Deezer, Pandora, iHeartRadio, and 150+ more",
            payoutSpeed: "Fast — often within days of platform payment",
            additionalFees: {
                youtubeContentID: "$4.95/year + 20% commission on Content ID earnings",
                leaveALegacy: "One-time fee to keep music up if subscription lapses",
                shazam: "Additional fee required",
            },
            pros: [
                "Fastest distribution speed (often 24-72 hours)",
                "Unlimited uploads for flat rate",
                "Keeps 100% of royalties",
                "Automatic royalty splitting for collaborators",
                "Spotify for Artists instant access and Verified badge",
                "Largest distributor — handles ~1/3 of all new music uploaded globally",
            ],
            cons: [
                "Music removed if annual subscription lapses (unless Leave a Legacy fee paid)",
                "Some features (YouTube CID, Shazam) cost extra",
                "Limited human customer support",
                "Publishing royalties not collected natively (need separate service)",
            ],
            bestFor: "High-volume independent artists who release frequently and want speed and simplicity",
            publishingSupport: "No native publishing admin — must use a third party like Songtrust or TuneCore Publishing",
            website: "distrokid.com",
        },

        tunecore: {
            name: "TuneCore",
            pricing: {
                rising: "$22.99/year (unlimited uploads, basic features)",
                breakout: "$39.99/year (unlimited uploads + publishing admin, sync pitching, Groover integration)",
                label: "Custom pricing for labels",
                freeplan: "Removed as of May 2025",
            },
            royaltyCut: "0% — keeps 100% of streaming royalties on paid plans",
            uploads: "Unlimited",
            platforms: "Spotify, Apple Music, YouTube Music, Amazon Music, TikTok, Deezer, Tidal, and 150+ stores",
            payoutSpeed: "Fast, typically within a week of platform payment",
            additionalFees: {
                publishingAdmin: "$75 one-time fee for TuneCore Publishing (composition royalty collection)",
                studioOne: "Integrated DAW/production suite (bundled in higher tiers)",
            },
            pros: [
                "Keeps 100% of royalties",
                "Excellent analytics and reporting dashboard",
                "Built-in publishing administration add-on ($75 one-time)",
                "Sync licensing and pitching tools",
                "Partnership with Groover for playlist/blog promotion",
                "Comprehensive business platform for scaling artists",
            ],
            cons: [
                "Music removed if subscription lapses",
                "Email-only customer support, can be slow",
                "Removed free plan as of May 2025",
            ],
            bestFor: "Data-focused artists who want in-depth analytics, publishing tools, and a comprehensive career platform",
            publishingSupport: "Yes — TuneCore Publishing is a $75 one-time add-on for global composition royalty collection",
            website: "tunecore.com",
        },

        cdbaby: {
            name: "CD Baby",
            pricing: {
                singleStandard: "$9.95 one-time per single",
                singlePro: "$29.95 one-time per single (includes publishing admin)",
                albumStandard: "$29 one-time per album",
                albumPro: "$69 one-time per album (includes publishing admin)",
            },
            royaltyCut: "9% of streaming and download royalties on standard tiers; higher on Pro tiers (includes publishing royalty collection)",
            uploads: "Per-release pricing (no subscription)",
            platforms: "Spotify, Apple Music, YouTube Music, Amazon, Tidal, Deezer, and 150+ DSPs plus physical retail",
            payoutSpeed: "Slower than DistroKid — weekly/monthly cycles with review period",
            pros: [
                "Music stays up FOREVER after one-time payment — no subscription risk",
                "Excellent for artists who release occasionally",
                "Physical distribution (CDs, vinyl) available",
                "Pro Publishing service collects worldwide composition royalties",
                "Sync licensing opportunities built in",
                "Long-established, trusted platform with 650,000+ artists and 9M+ songs",
            ],
            cons: [
                "9%+ royalty cut (adds up with high stream volume)",
                "Slower distribution speed due to review process",
                "Less feature-rich than DistroKid/TuneCore for digital-native artists",
                "Per-release model is cost-inefficient for prolific artists",
            ],
            bestFor: "Artists who release music infrequently, want permanent distribution without subscription risk, or need physical distribution",
            publishingSupport: "Yes — CD Baby Pro includes worldwide publishing royalty administration",
            website: "cdbaby.com",
        },

        amuse: {
            name: "Amuse",
            pricing: {
                artist: "$23.99/year (1 artist/band)",
                artistPlus: "$39.99/year (2 artist profiles + high-res audio, email fan collection)",
                professional: "$59.99+/year (3+ artist profiles + priority support)",
            },
            royaltyCut: "0% on paid plans",
            uploads: "Unlimited",
            platforms: "All major DSPs",
            pros: [
                "Competitive pricing with solid feature set",
                "AI mastering included",
                "Royalty advances available (data-driven, $250–$300,000 range based on streaming history)",
                "Easy re-releasing of previously released music",
                "Free payment splitting for collaborators on Artist Plus and above",
            ],
            cons: [
                "Younger platform with less established reputation",
                "Lyric distribution not natively supported (must use Musixmatch for Spotify)",
                "No recoupment option (can't hold back collaborator share until costs recovered)",
                "Fewer features than DistroKid/TuneCore",
            ],
            bestFor: "Artists who want a mid-range subscription distributor with AI mastering and advance potential",
            publishingSupport: "No native publishing admin",
            website: "amuse.io",
        },

        routenote: {
            name: "RouteNote",
            pricing: {
                free: "FREE — RouteNote keeps 15% of royalties",
                premium: "$9.99/year per release or $49.99/year unlimited — artist keeps 100%",
            },
            royaltyCut: "15% on free tier; 0% on premium",
            uploads: "Unlimited on premium",
            platforms: "Spotify, Apple Music, Amazon, YouTube Music, Deezer, Tidal, SoundCloud, and more",
            pros: [
                "Free tier is genuinely functional — great for beginners",
                "Can upgrade to premium as income grows",
                "Considered an 'ethical' distributor for its free model",
                "Allows switching between free and paid tiers",
            ],
            cons: [
                "15% cut on free tier",
                "Fewer marketing tools than larger competitors",
                "Smaller community and resources",
            ],
            bestFor: "Beginners on zero budget; artists who want to test the waters before committing to paid distribution",
            website: "routenote.com",
        },

        symphonic: {
            name: "Symphonic Distribution",
            pricing: {
                starter: "$19.99/year (unlimited tracks, 100% royalties)",
                partner: "Application-based — no upfront fee, but Symphonic takes a royalty percentage (invite/approval required)",
            },
            royaltyCut: "0% on Starter; percentage on Partner tier (varies by deal)",
            uploads: "Unlimited on Starter",
            platforms: "All major DSPs plus Electronic Dance Specialty DSPs (no extra fee, unlike DistroKid)",
            pros: [
                "Excellent for electronic/dance music — specialty DSP delivery without extra fees",
                "Free payment splitting for non-member collaborators",
                "Recoupment feature available (hold back collaborator share until costs recovered)",
                "Strong industry connections for Partner artists",
                "Label services and A&R support on Partner tier",
            ],
            cons: [
                "Partner tier requires application and approval",
                "Smaller user base than DistroKid or TuneCore",
            ],
            bestFor: "Electronic music producers; artists wanting label-level support without signing a full label deal",
            website: "symphonic.com",
        },

        unitedmasters: {
            name: "UnitedMasters",
            pricing: {
                free: "FREE — UnitedMasters keeps 10% of royalties",
                select: "$59.99/year — artist keeps 100%",
            },
            royaltyCut: "10% on free; 0% on Select",
            uploads: "Unlimited",
            platforms: "Spotify, Apple Music, YouTube Music, Amazon, TikTok, and more",
            pros: [
                "Strong brand partnership opportunities (select artists get brand deal introductions)",
                "Free tier available with only 10% cut",
                "Great for hip-hop, R&B, and urban genres",
                "Direct fan monetization tools",
                "NBA, NFL, and other major brand integration deals",
            ],
            cons: [
                "10% cut on free tier",
                "Brand deal access not guaranteed for all artists",
                "Less established outside US market",
            ],
            bestFor: "Hip-hop/R&B artists seeking brand partnership exposure and US market reach",
            website: "unitedmasters.com",
        },

        landr: {
            name: "LANDR",
            pricing: {
                basic: "~$19/year (limited releases)",
                advanced: "~$59/year (unlimited releases + mastering credits)",
                pro: "~$119/year (all features + stem mastering)",
            },
            royaltyCut: "0% on paid plans",
            uploads: "Unlimited on higher plans",
            platforms: "All major DSPs",
            pros: [
                "Best-in-class AI mastering integrated directly into distribution",
                "Free payment splitting for non-member collaborators",
                "Collaboration and session management tools",
                "Studio One DAW integration",
                "Advances available based on streaming history",
            ],
            cons: [
                "Mastering quality may not match human engineer for complex projects",
                "Higher cost for all features compared to DistroKid basic",
            ],
            bestFor: "Bedroom producers and home studio artists who want distribution + AI mastering in one workflow",
            website: "landr.com",
        },

        onerpm: {
            name: "ONErpm",
            pricing: {
                free: "FREE — ONErpm keeps a percentage of royalties (negotiated per artist)",
                paid: "Custom plans for labels and larger artists",
            },
            royaltyCut: "Varies — percentage model negotiated",
            uploads: "Unlimited",
            platforms: "All major DSPs",
            pros: [
                "Strong presence in Latin American and international markets",
                "Label services available",
                "Advances available",
                "YouTube Content ID included",
            ],
            cons: [
                "Less transparent pricing",
                "More suited for established artists with track record",
            ],
            bestFor: "Latin American artists; artists seeking international distribution with label support",
            website: "onerpm.com",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 2: STREAMING PLATFORMS
    // ──────────────────────────────────────────────────────────
    streamingPlatforms: {
        spotify: {
            name: "Spotify",
            users: "~640–700 million monthly active users (largest streaming platform globally)",
            payPerStream: "$0.003–$0.004 average per stream (2025 industry average)",
            payoutModel: "Pro-rata — all subscription and ad revenue pooled; split based on share of total streams",
            revenueShared: "65–70% of revenue distributed to rights holders",
            minimumThreshold: "1,000 streams in the past 12 months required to generate recording royalties (policy since 2024)",
            payoutTiming: "~45–60 days after end of each month",
            subscriptionCost: "$11.99/month Premium (US); free ad-supported tier available",
            earnings1MStreams: "$3,000–$4,000 on average",
            keyFeatures: [
                "Largest discovery platform — most new artist exposure happens here",
                "Spotify for Artists dashboard for analytics, pitch to editorial playlists",
                "Editorial playlist pitching available 7+ days before release",
                "Spotify Canvas (looping 3-8 second visuals on tracks)",
                "Pre-save links available via distributors",
                "Podcasts and audiobook integration",
                "Bandcamp-style artist fundraising (Fans First messages)",
            ],
            pitchingTips: "Submit to Spotify editorial playlists via Spotify for Artists at least 7 days before release date. Fill in all metadata including genre, mood, and release description.",
            algorithmPlatforms: ["Discover Weekly", "Release Radar", "Daily Mix", "Radio"],
            pros: "Unmatched reach and discovery; best playlist ecosystem; highest user base",
            cons: "Lowest per-stream rate among major premium platforms; free tier dilutes royalties",
            website: "spotify.com",
        },

        appleMusic: {
            name: "Apple Music",
            users: "~100 million subscribers",
            payPerStream: "$0.007–$0.01 per stream (2025 average; some reports $0.0062/1000 streams basis)",
            payoutModel: "Pro-rata but premium-only subscriber base — no free tier, so all listeners are paying",
            revenueShared: "52% of revenue to rights holders (fixed rate across all labels)",
            minimumThreshold: "No minimum stream requirement",
            payoutTiming: "Monthly",
            subscriptionCost: "$10.99/month (US)",
            earnings1MStreams: "$7,000–$10,000 on average",
            keyFeatures: [
                "Higher per-stream payout than Spotify due to premium-only model",
                "Spatial Audio / Dolby Atmos support for immersive playback",
                "Apple Music for Artists analytics dashboard",
                "Editorial playlist pitching available",
                "Lyrics integration native (works with distributors)",
                "Radio stations (Apple Music 1, Apple Music Hits, etc.)",
                "Strong integration with Shazam (owned by Apple)",
                "Great for audiophile listeners — lossless audio up to 192kHz",
            ],
            pitchingTips: "Submit to Apple Music editorial via Apple Music for Artists pitching form at least 10 days before release.",
            pros: "Highest payout rate among major platforms; premium listener base; strong Apple ecosystem integration",
            cons: "Smaller user base than Spotify; less algorithmic discovery tooling",
            website: "music.apple.com",
        },

        youtube: {
            name: "YouTube / YouTube Music",
            users: "YouTube: 2.7 billion+ monthly users; YouTube Music: ~100 million subscribers",
            payPerStream: {
                youtubeMain: "$0.005–$0.007 per stream for official content/music videos",
                youtubeMusicApp: "$0.008 per stream (dedicated music streaming app)",
                youtubeContentID: "$0.00087 per stream (user-generated content using your music)",
                youtubePremium: "Higher payout from Premium subscriber streams",
            },
            payoutModel: "Ad-revenue split + subscription pool; Content ID captures UGC use",
            minimumThreshold: "YouTube Partner Program requires 1,000 subscribers and 4,000 watch hours for channel monetization",
            payoutTiming: "Monthly (around the 21st)",
            subscriptionCost: "Free with ads; YouTube Premium $13.99/month (US)",
            keyFeatures: [
                "Content ID system — automatically detects and monetizes use of your music in other videos",
                "YouTube Music for streaming; YouTube for music videos",
                "Official Artist Channel (OAC) program — combines your uploads and artist page",
                "YouTube Shorts monetization (limited for music)",
                "Super Chat, memberships, merchandise shelf for direct fan monetization",
                "Best platform for long-form music video and concert content",
                "Auto-generated artist bio page when music is distributed",
            ],
            contentIDSetup: "Set up via distributor (DistroKid $4.95/year + 20% cut; included free with some distributors like LANDR, Symphonic)",
            pros: "Massive discovery potential; music video platform; Content ID passive income; free to use for fans",
            cons: "Lowest per-stream payout; revenue split complex; requires separate Content ID setup",
            website: "youtube.com / music.youtube.com",
        },

        amazonMusic: {
            name: "Amazon Music",
            users: "~100+ million users (includes Amazon Prime Music and Unlimited)",
            payPerStream: "$0.004–$0.009 per stream (2025 avg; Amazon Music Unlimited pays more than Prime tier)",
            payoutModel: "Pro-rata; Amazon Music Unlimited subscribers generate higher per-stream rates",
            minimumThreshold: "None specified",
            payoutTiming: "Monthly",
            subscriptionCost: "$10.99/month Unlimited; included with Amazon Prime at reduced feature set",
            keyFeatures: [
                "Alexa voice-activated music playback — 'Alexa, play [artist name]'",
                "HD and Ultra HD audio (up to 192kHz/24-bit)",
                "Amazon Music Unlimited vs. Prime Music (different payout rates)",
                "Amazon Amp (now discontinued) was a radio-style broadcasting tool",
                "Integration with Echo smart speakers — significant household reach",
            ],
            pros: "Strong per-stream rate; massive smart speaker audience via Alexa; good for older demographics",
            cons: "Less indie-friendly discovery; smaller dedicated music streaming user base vs. Spotify",
            website: "music.amazon.com",
        },

        tidal: {
            name: "TIDAL",
            users: "~3–5 million subscribers (much smaller than Spotify/Apple)",
            payPerStream: "$0.0125–$0.0128 per stream (highest major platform per-stream rate)",
            payoutModel: "Artist-centric model — a portion of each subscriber's fee goes to the artists THAT subscriber actually listened to",
            minimumThreshold: "None",
            payoutTiming: "Monthly",
            subscriptionCost: "$10.99/month HiFi; $19.99/month HiFi Plus (MQA/Dolby Atmos)",
            earnings1MStreams: "$12,500–$13,000 on average",
            keyFeatures: [
                "Highest per-stream payout of any major platform",
                "Artist-centric payment model (user-centric, not pure pro-rata)",
                "HiFi lossless audio and MQA (Master Quality Authenticated)",
                "TIDAL Rising program for emerging artists",
                "Artist pages with direct artist control",
                "Exclusive content deals with some major artists",
            ],
            pros: "Best per-stream rate; audiophile quality; artist-centric values",
            cons: "Very small user base — even with high per-stream rate, total earnings are often lower than Spotify due to volume",
            website: "tidal.com",
        },

        deezer: {
            name: "Deezer",
            users: "~16 million subscribers",
            payPerStream: "$0.0011–$0.0064 per stream (varies by tier and region; testing user-centric model)",
            payoutModel: "Testing artist-centric / user-centric model in some markets",
            minimumThreshold: "None",
            payoutTiming: "Monthly",
            subscriptionCost: "$10.99/month (varies by country)",
            keyFeatures: [
                "Pioneer of artist-centric payment model testing",
                "Strong in French/European markets",
                "Flow personalized radio feature",
                "HiFi audio available",
                "Lyrics display built in",
            ],
            pros: "Strong European audience; testing fairer payment models",
            cons: "Lower per-stream rate than Tidal/Apple; smaller global market share",
            website: "deezer.com",
        },

        soundcloud: {
            name: "SoundCloud",
            users: "~76 million monthly users",
            payPerStream: "Variable; SoundCloud Premier pays $0.003–$0.006 per stream for monetized artists",
            payoutModel: "Fan-powered royalties — direct-to-fan model where a listener's subscription is distributed only to artists THEY listen to",
            minimumThreshold: "Must qualify for SoundCloud Premier (500+ plays in last 30 days, no copyright strikes)",
            payoutTiming: "Monthly",
            subscriptionCost: "Free with ads; Go+ $9.99/month",
            keyFeatures: [
                "Best platform for emerging/bedroom producers to build a following BEFORE official distribution",
                "Fan-powered royalties (direct fan support model)",
                "Direct upload without distributor required (artist uploads directly)",
                "Strong hip-hop, electronic, and underground music community",
                "Reposts, comments at timestamps, community engagement features",
                "Direct artist-to-fan monetization via 'Support' feature",
                "SoundCloud Go subscription for offline listening",
            ],
            pros: "Best organic discovery for emerging artists; direct upload without distributor; community-driven",
            cons: "Smaller paying subscriber base; lower royalty rates for non-Premier artists",
            website: "soundcloud.com",
        },

        napster: {
            name: "Napster",
            users: "Small but dedicated subscriber base",
            payPerStream: "$0.019–$0.021 per stream (highest per-stream rate of any platform)",
            payoutModel: "Pro-rata",
            minimumThreshold: "None specified",
            keyFeatures: [
                "Historically significant platform — originally a peer-to-peer piracy service, now a legitimate DSP",
                "Highest per-stream rate of any streaming service",
                "Small user base limits total earnings despite high rates",
            ],
            pros: "Highest per-stream rate",
            cons: "Negligibly small user base",
            website: "napster.com",
        },

        bandcamp: {
            name: "Bandcamp",
            users: "Indie music marketplace; not a traditional streaming platform",
            businessModel: "Direct-to-fan sales; Bandcamp takes 15% of digital sales, 10% of merch sales",
            payoutModel: "Artist keeps 85% of digital sales, 90% of physical/merch",
            keyFeatures: [
                "Direct artist-to-fan sales platform (downloads, vinyl, merch)",
                "Bandcamp Fridays — Bandcamp waives its fee on first Friday of each month (historically)",
                "Artist pages with extensive bios, album art, lyrics",
                "Fan subscription/supporter feature",
                "Discography bundles",
                "Strong for niche/indie/experimental genres",
                "Physical and digital together in one storefront",
            ],
            pros: "Best per-sale revenue share; direct fan relationship; great for indie/experimental artists",
            cons: "Not a traditional streaming platform — sales-focused; limited algorithmic discovery",
            note: "Bandcamp was sold to Songtradr in 2023, then subsequently to a new owner. Some Bandcamp Fridays programs have changed. Always check current status.",
            website: "bandcamp.com",
        },

        pandora: {
            name: "Pandora",
            users: "~50 million monthly active users (US-focused)",
            payPerStream: "$0.0013 per stream",
            payoutModel: "Non-interactive radio model — listeners cannot choose specific songs; PRO-style licensing",
            keyFeatures: [
                "US-only service",
                "Music Genome Project — proprietary algorithm for song recommendations",
                "Pandora Plus and Pandora Premium tiers",
                "Pandora AMP (Artist Marketing Platform) for promotional tools",
            ],
            pros: "Still significant US radio-like audience, especially older demographics",
            cons: "Low per-stream rate; US-only; declining relevance vs. Spotify/Apple",
            website: "pandora.com",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 3: ROYALTIES & RIGHTS
    // ──────────────────────────────────────────────────────────
    royalties: {
        overview: {
            description: "Music generates multiple types of royalties from different uses. Understanding all royalty streams is critical to collecting all money owed to you.",
            royaltyTypes: [
                "Performance Royalties — paid when music is publicly performed (radio, streaming, venues, TV)",
                "Mechanical Royalties — paid when music is reproduced (physical copies, digital downloads, on-demand streaming)",
                "Sync Royalties — paid when music is licensed for use in visual media (film, TV, ads, games)",
                "Master Recording Royalties — paid to the owner of the master recording (usually artist/label)",
                "Neighboring Rights / Digital Performance Royalties — paid to performers and master owners for non-interactive digital radio (Pandora, SiriusXM)",
                "Print Rights — paid for sheet music reproduction",
            ],
            importantDistinction: "There are TWO copyrights in every song: (1) The Composition (melody + lyrics) owned by songwriter/publisher, and (2) The Master Recording (the specific recording) owned by artist/label. Each generates separate royalties.",
        },

        performanceRoyalties: {
            description: "Collected by PROs (Performance Rights Organizations) when music is publicly performed or broadcast",
            collectedBy: "ASCAP, BMI, SESAC, GMR (US); SOCAN (Canada); PRS (UK); GEMA (Germany); APRA (Australia)",
            whoGets: "Songwriters (writer's share) and publishers (publisher's share) — always split 50/50",
            whereFrom: [
                "Radio stations (terrestrial)",
                "Streaming services (Spotify, Apple Music, etc.)",
                "TV and cable broadcasts",
                "Live venues, bars, restaurants",
                "Hotels, retail stores",
                "Any public performance of music",
            ],
        },

        mechanicalRoyalties: {
            description: "Paid for the reproduction and distribution of a composition — required anytime someone reproduces your song",
            currentRate: "$0.091 per physical copy (CD/vinyl) in the US (2024 CRB rate); streaming mechanicals set by Copyright Royalty Board",
            collectedBy: "Harry Fox Agency (HFA), Music Reports Inc., DistroKid (for streaming mechanicals via distributors), MLC (Mechanical Licensing Collective — US streaming mechanicals since 2021)",
            mechanicalLicensingCollective: "The MLC (themechanicallicensingcollective.com) — established by the Music Modernization Act (2018) to collect and distribute streaming mechanical royalties in the US. Songwriters/publishers must register with MLC to receive these royalties.",
            coverSongs: "To legally cover a song and distribute it commercially, you need a mechanical license. Services like Easy Song Licensing, Songfile (HFA), or Cover Song Licensing (TuneCore) handle this for ~$25 per song.",
        },

        soundExchange: {
            name: "SoundExchange",
            description: "The only US organization that collects digital performance royalties for MASTER recordings from non-interactive (radio-style) digital services",
            collects: "Royalties from SiriusXM, Pandora (non-interactive), internet radio stations, cable music channels",
            whoGets: "45% to featured recording artist; 50% to master owner (label or artist); 5% to non-featured musicians/vocalists",
            importantNote: "This is DIFFERENT from PROs — PROs collect for songwriters/publishers (the composition); SoundExchange collects for artists/labels (the master recording). You need BOTH.",
            howToRegister: "Free registration at soundexchange.com. Completely separate from PRO registration.",
            website: "soundexchange.com",
        },

        pros: {
            overview: "Performance Rights Organizations (PROs) collect performance royalties on behalf of songwriters and publishers. You can only be a member of ONE PRO at a time in the US.",

            ASCAP: {
                name: "ASCAP (American Society of Composers, Authors and Publishers)",
                type: "Non-profit — member-owned and controlled",
                members: "~700,000 songwriters and publishers; 11–12 million compositions",
                writerFee: "$50 one-time signup fee for writers",
                publisherFee: "$50 additional for publisher membership",
                annualRevenue: "$1+ billion collected annually",
                paymentSchedule: "Quarterly (March, June, September, December for performances in prior quarter)",
                notableMembers: "Beyoncé, Kendrick Lamar, Justin Timberlake",
                pros: "Member-controlled board; contracts only last 1 year (easy to switch); health/dental insurance discounts",
                cons: "Signup fee; slightly slower to distribute international royalties than some competitors",
                howToJoin: "Online at ascap.com — register as writer and/or publisher",
                website: "ascap.com",
            },

            BMI: {
                name: "BMI (Broadcast Music, Inc.)",
                type: "Non-profit — the largest PRO in the US",
                members: "~900,000 songwriters; 14+ million compositions",
                writerFee: "FREE for writers",
                publisherFee: "$150–$250 one-time for publisher membership",
                annualRevenue: "$1+ billion collected annually",
                paymentSchedule: "Quarterly",
                notableMembers: "Taylor Swift, Dolly Parton, Drake",
                pros: "Free writer membership; largest catalog; well-established; 'advocate for the value of music' philosophy",
                cons: "No member control over board; publisher fee required to collect publisher share",
                howToJoin: "Online at bmi.com — completely free for songwriters",
                website: "bmi.com",
            },

            SESAC: {
                name: "SESAC (Society of European Stage Authors and Composers)",
                type: "For-profit — invite-only",
                members: "~30,000 songwriters; 400,000 compositions",
                membershipRequirement: "INVITATION ONLY — cannot sign up directly",
                pros: "More personalized service; smaller roster means individual attention; higher royalty rates for accepted members",
                cons: "Invite-only; much smaller than ASCAP or BMI; for-profit (owned by Blackstone group since 2017)",
                notableMembers: "Adele, Bob Dylan, Mariah Carey, Neil Diamond",
                website: "sesac.com",
            },

            GMR: {
                name: "GMR (Global Music Rights)",
                type: "For-profit — invite-only, superstar-focused",
                members: "~100 elite writers",
                membershipRequirement: "INVITATION ONLY — exclusively for major artists/writers",
                notableMembers: "Bruno Mars, Bruce Springsteen, Drake, Eagles, John Mayer, Pharrell",
                pros: "Claimed to secure highest possible performance royalty rates for members",
                cons: "Virtually inaccessible to independent or emerging artists",
                website: "globalmusicrights.com",
            },

            registrationTips: [
                "Register as BOTH writer AND publisher with your PRO (create a 'vanity publishing company' — e.g., 'Your Name Music')",
                "Register every song with your PRO BEFORE it is released/performed publicly",
                "PROs take 11–13% administrative fee from collected royalties",
                "PROs only collect PERFORMANCE royalties — not mechanical or sync royalties (need separate registration for those)",
                "International royalties are collected through reciprocal agreements between global PROs — registering with one US PRO covers most territories",
                "You cannot be a member of more than one US PRO simultaneously",
                "ASCAP contracts are only 1 year; BMI is longer-term — easier to switch from ASCAP if needed",
            ],
        },

        copyright: {
            overview: "Copyright protects your music from the moment it is created and fixed in a tangible form (recorded or written). Registration is NOT required to own copyright, but it IS required to sue for statutory damages.",
            automaticCopyright: "Copyright is automatic in the US the moment you record a song or write it down. No registration needed for ownership.",
            registrationBenefits: [
                "Required to sue for statutory damages ($750–$150,000 per infringement) in federal court",
                "Public record of your ownership",
                "Creates legal presumption that you are the copyright owner",
                "Required before filing an infringement lawsuit",
            ],
            howToRegister: "Register at copyright.gov via the eCO (Electronic Copyright Office) system",
            cost: "$45–$65 per registration (single work); $85 for group of unpublished works; fees subject to change",
            whatToRegister: "Register compositions (melody + lyrics) and sound recordings separately if needed; sound recordings have their own copyright (SR registration)",
            duration: "Life of creator + 70 years (works created after 1978)",
            twoTypes: {
                compositionCopyright: "Protects melody and lyrics. Owned by songwriter(s). Registered as PA (Performing Arts) form.",
                masterRecordingCopyright: "Protects the specific recorded performance. Owned by whoever paid for the recording (usually artist or label). Registered as SR (Sound Recording) form.",
            },
        },

        syncLicensing: {
            description: "Synchronization (sync) licensing allows your music to be used in visual media — film, TV, commercials, video games, trailers, YouTube videos, and streaming shows",
            twoLicensesRequired: [
                "Sync License — from the composition copyright owner (songwriter/publisher) — covers the melody and lyrics",
                "Master Use License — from the master recording owner (artist or label) — covers the specific recording",
            ],
            feeRanges: {
                indieFilms: "$250–$5,000 per track",
                networkTV: "$1,000–$10,000 per episode placement",
                streamingShows: "$2,000–$50,000+ per placement (Netflix, Hulu, Disney+)",
                nationalCommercials: "$10,000–$250,000+ depending on brand, duration, and territory",
                globalAdCampaigns: "$50,000–$500,000+",
                videoGames: "$500–$20,000 depending on game size and usage",
                youtubeAndOnline: "$50–$500 for smaller placements/micro-syncs",
                trailers: "$5,000–$100,000+ (high-profile trailers among the best-paying placements)",
                majorLabels: "Start at $20,000 and can exceed $500,000 for chart-topping hits",
            },
            howToLandDeals: [
                "Register with sync agencies / music supervisors",
                "Build a 'one-stop' catalog — clear all rights yourself so supervisors only need one call",
                "Keep your music metadata clean and ownership documented",
                "Use sync pitching services (TuneCore Sync, Musicbed, Artlist, Pond5, Musicbed)",
                "Attend music industry conferences (SXSW, MIDEM, Sync Summit)",
                "Build relationships with music supervisors on LinkedIn/industry networks",
                "Submit to music libraries (Artlist, Musicbed, Epidemic Sound, AudioJungle, Pond5)",
            ],
            musicLibraries: {
                artlist: { model: "Subscription-based blanket license for content creators ($200+/year)", artistRevenue: "Non-exclusive licensing; artists get upfront payment or revenue share" },
                musicbed: { model: "Subscription and per-use licensing", artistRevenue: "Revenue share with curated artists; higher payouts for exclusive deals" },
                epidemicSound: { model: "Subscription for content creators", artistRevenue: "Non-exclusive; revenue share per stream within library" },
                audioJungle: { model: "Per-track marketplace (part of Envato)", artistRevenue: "Artist keeps 70% of each sale (exclusive) or 35–45% (non-exclusive)" },
                pond5: { model: "Per-track marketplace", artistRevenue: "Artist sets price; keeps 35–50%" },
            },
            performanceRoyaltyBonus: "After a sync placement, you also earn backend performance royalties through your PRO every time the show/film airs. Netflix shows that air internationally can generate significant ongoing PRO royalties.",
            globalSyncRevenue: "Global sync licensing revenue exceeded $500 million in 2023 (IFPI), with strong projected growth through 2025",
        },

        mechanicalLicensingCollective: {
            name: "MLC (Mechanical Licensing Collective)",
            description: "Established by the Music Modernization Act (2018), the MLC is the sole organization authorized to administer the blanket digital audio mechanical license in the US",
            coverage: "Collects mechanical royalties from streaming services (Spotify, Apple Music, Amazon Music, etc.) for US activity",
            registration: "Free — register at themlc.com to claim your mechanical royalties",
            importance: "Many artists have unclaimed royalties sitting at the MLC because they never registered. Check your catalog.",
            website: "themlc.com",
        },

        publishingAdmin: {
            description: "Publishing administration services collect composition royalties (mechanical + performance) from around the world on your behalf",
            cost: "Typically 10–25% commission on collected royalties, or flat fee",
            services: [
                "Songtrust — $100 one-time setup + 15% commission; collects from 60+ countries; best for indie songwriters",
                "TuneCore Publishing — $75 one-time; 20% commission; integrated with TuneCore distribution",
                "CD Baby Pro — included in CD Baby Pro single ($29.95) or album ($69) plans; 15% commission",
                "DistroKid Publishing — partnership with publishing admin (additional fee)",
                "LANDR Publishing Admin — included in some plans",
                "Sentric Music — UK-focused; free to join, takes percentage",
                "Kobalt Music — major publishing admin for established artists",
            ],
            note: "Without a publishing admin service or publishing deal, international mechanical royalties may go unclaimed in foreign territories",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 4: RECORD LABEL CONTRACTS & DEALS
    // ──────────────────────────────────────────────────────────
    recordDeals: {
        overview: "Understanding record label contracts is essential before signing anything. Deals vary widely in what rights are transferred, royalty rates, and term length.",

        majorLabels: {
            description: "The three major record labels control roughly 70% of the global music market",
            universalMusicGroup: { shortName: "UMG", subsidiaries: ["Republic Records", "Interscope", "Def Jam", "Capitol Records", "Motown", "Island Records", "Geffen Records", "Atlantic Records (joint ownership)"] },
            sonyMusicEntertainment: { shortName: "SME", subsidiaries: ["Columbia Records", "RCA Records", "Epic Records", "Arista Records", "Provident Music"] },
            warnerMusicGroup: { shortName: "WMG", subsidiaries: ["Atlantic Records", "Warner Records", "Elektra Records", "Asylum Records", "Reprise Records"] },
        },

        dealTypes: {
            traditionalRecordingContract: {
                description: "Classic artist-label deal where label funds recording, marketing, and distribution in exchange for master ownership and royalty share",
                labelGets: "Ownership of master recordings, royalty percentage",
                artistGets: "Advance (loan), marketing support, distribution, production funding",
                royaltyRate: "10–25% of revenue to artist after recoupment",
                advance: "Treated as a recoupable loan — artist doesn't see royalties until advance is repaid",
                masterOwnership: "Label owns masters typically for life of copyright (50–70 years or more)",
                pros: ["Large financial backing", "Major label marketing muscle", "Industry connections", "Production resources"],
                cons: ["Low royalty rates", "Label owns masters", "Creative control often limited", "Must recoup advance before earning royalties"],
            },

            threeSixtyDeal: {
                description: "Comprehensive deal where label takes a percentage of ALL artist revenue streams, not just music sales",
                whatLabelTakes: "Percentage of streaming, touring, merchandise, endorsements, publishing, sync, social media, acting work, and more",
                typicalSplits: "15–30% of each revenue stream (varies per deal)",
                whyLabelsPreferIt: "As physical album sales collapsed in early 2000s, labels sought new revenue from tours and merchandise (which were growing)",
                artistGets: "Typically higher advance and broader marketing/promotional support than traditional deals",
                pros: ["More label investment upfront", "Label motivated to grow ALL revenue streams, not just music sales", "Comprehensive career management"],
                cons: ["Label takes cut of EVERYTHING", "Less financial upside for artist as career grows", "More label control over career decisions", "Controversial — many artists (e.g., Mac DeMarco) advise against signing"],
                isItStandard: "360 deals are NOW the standard for major label deals with developing/new artists",
                famousExamples: "Madonna's deal with Live Nation (2007); Jay-Z's deal with Live Nation (2008)",
            },

            distributionDeal: {
                description: "Artist retains ownership of masters; label provides distribution and sometimes marketing in exchange for a percentage",
                royaltyRate: "70–85% to artist",
                masterOwnership: "Artist retains full ownership",
                labelGets: "Distribution fee or percentage",
                pros: ["Artist keeps masters", "Higher royalty rates", "More creative control"],
                cons: ["Less upfront investment from label", "Marketing support varies"],
                bestFor: "Established artists with existing fan bases who don't need full label development",
            },

            licensingDeal: {
                description: "Artist licenses specific recordings to a label for a set term, retaining ultimate ownership",
                term: "Typically 3–5 years",
                masterOwnership: "Artist retains, licenses to label for term period",
                pros: "Masters revert to artist after term; more flexibility",
                cons: "May get less upfront investment; complex negotiations",
                bestFor: "Artists who want label support temporarily while retaining long-term control",
            },

            profitSplitDeal: {
                description: "Label and artist share net profits (after costs) rather than paying royalties",
                split: "Often 50/50 net profit split",
                pros: ["Transparent accounting", "Artist participates in full upside"],
                cons: ["No guarantee of advance", "Complex accounting; potential disputes over what counts as 'costs'"],
            },

            developmentDeal: {
                description: "Label invests in developing an artist before a full recording deal is offered",
                includes: "Voice coaching, media training, image consulting, songwriting sessions, demo recording",
                advance: "Small or no advance",
                obligation: "May include option for label to sign artist to full deal after development period",
                pros: "Mentorship, industry connections, career development",
                cons: "Label gets option to sign you at favorable terms; may not lead to full deal",
            },

            labelServicesModel: {
                description: "Modern alternative — artist keeps ownership and hires label for specific à-la-carte services",
                services: ["PR campaigns", "Playlist pitching", "Tour support", "Radio promotion", "Distribution"],
                pros: "Full ownership retained; pay only for services you need; no royalty cut",
                cons: "Requires upfront capital; must project-manage multiple vendors",
                bestFor: "Independent artists with budgets who want professional services without a full label deal",
            },
        },

        keyContractTerms: {
            advance: "Upfront payment from label — treated as a recoupable loan against future royalties. Artist earns no royalties until advance is repaid from their royalty share.",
            recoupment: "The process of the label recovering its advance and sometimes other costs (recording, marketing) from the artist's royalty share before the artist receives any money.",
            royaltyRate: "Percentage of revenue paid to artist — typically 10–25% in traditional deals; 70–90% in distribution deals",
            masterOwnership: "WHO owns the final recordings. Labels traditionally take ownership. Independent artists should try to retain masters.",
            termLength: "How long the contract lasts — often multi-album deals (e.g., '3 albums or 5 years, whichever comes first')",
            options: "Labels often include 'options' to extend the deal (at their discretion). Artist cannot refuse without breach.",
            creativeControl: "Contractual right to approve album concepts, singles selection, music video scripts, etc. More creative control = better deal for artist.",
            territoryRights: "Geographic scope of the deal — worldwide vs. specific countries",
            reversion: "Right for masters to revert to artist after a period of non-use or non-release by label",
            moralityClause: "Label right to terminate contract if artist engages in behavior that damages label's reputation",
        },

        adviceBeforeSigning: [
            "ALWAYS hire a music attorney before signing any record deal",
            "Never sign anything on the spot — take time to review with legal counsel",
            "Negotiate for master reversion clauses (get your masters back if label doesn't release within X months)",
            "Fight to retain publishing rights separately from recording rights",
            "Understand what 'net' vs 'gross' means in your royalty calculation",
            "Beware of 360 deal terms — know exactly what percentage is being taken from each revenue stream",
            "Confirm creative control clauses in writing",
            "Ask for a 'key man' clause if you're signing based on a specific A&R executive relationship",
        ],
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 5: MUSIC PRODUCTION & DAWS
    // ──────────────────────────────────────────────────────────
    production: {
        daws: {
            overview: "A DAW (Digital Audio Workstation) is software used to record, edit, arrange, mix, and master music. Choosing the right DAW is a long-term career decision — switching later is possible but difficult.",

            abletonLive: {
                name: "Ableton Live",
                developer: "Ableton AG",
                pricing: {
                    intro: "$99 one-time",
                    standard: "$449 one-time",
                    suite: "$749 one-time (recommended)",
                    trialAvailable: true,
                },
                platforms: "macOS, Windows",
                uniqueFeature: "Dual-view: Session View (clip-based jamming/performance) + Arrangement View (linear timeline). Unmatched for live performance.",
                bestFor: ["Electronic music (EDM, techno, house, ambient)", "Live performance", "Sound design and experimentation", "Sample-based production", "DJ/producer hybrid workflows"],
                strengths: [
                    "Session View is unique — no other major DAW has this clip launcher natively",
                    "Best for real-time audio warping and time-stretching",
                    "Ableton Push (hardware controller) integrates seamlessly",
                    "Strong MIDI capabilities",
                    "Max for Live extends capabilities with custom instruments/effects",
                    "AI-assisted arrangement tools in Live 12",
                ],
                weaknesses: [
                    "Most expensive option",
                    "Steep learning curve for beginners",
                    "Less ideal for traditional band recording/comping",
                    "Pro Tools is preferred in professional recording studios",
                ],
                famousUsers: ["Madeon", "Skrillex", "Deadmau5", "Aphex Twin", "Flume"],
                pluginSupport: "VST, VST3, AU, Max for Live",
                website: "ableton.com",
            },

            flStudio: {
                name: "FL Studio",
                developer: "Image-Line",
                pricing: {
                    fruity: "$99 (basic, no audio recording)",
                    producer: "$199 (most popular — full feature set)",
                    signature: "$299 (+ additional plugins)",
                    allPlugins: "$899 (every plugin included)",
                    lifetimeUpdates: "FREE lifetime updates on all purchases — buy once, update forever",
                    trialAvailable: true,
                },
                platforms: "Windows (primary); macOS (full support added in 2018)",
                uniqueFeature: "Pattern-based step sequencer (Channel Rack) + Piano Roll widely considered the best in the industry for beatmaking",
                bestFor: ["Hip-hop beat production", "Trap production", "EDM and bass music", "Beginners (most tutorial resources available)", "Windows users"],
                strengths: [
                    "Best piano roll of any DAW — intuitive and feature-rich",
                    "Lifetime free updates (never pay again after purchase)",
                    "Most beginner tutorials and YouTube resources available",
                    "Huge FL Studio community",
                    "Gross Beat plugin included (Signature+) — essential for trap music",
                    "AI stem separation for sampling (2024–2025 update)",
                    "Edison audio editor excellent for sampling",
                ],
                weaknesses: [
                    "Audio recording/comping workflow inferior to Logic/Pro Tools",
                    "Less optimized for live performance than Ableton",
                    "Windows-first — macOS version slightly less mature",
                    "Pattern-based workflow can feel limiting for linear composers",
                ],
                famousUsers: ["Martin Garrix", "Avicii", "Metro Boomin (early)", "Soulja Boy"],
                pluginSupport: "VST, VST3, AU, DX, DXi",
                website: "image-line.com",
            },

            logicPro: {
                name: "Logic Pro",
                developer: "Apple Inc.",
                pricing: {
                    logicPro: "$199.99 one-time (Mac App Store)",
                    logicProForIpad: "$4.99/month or $49/year (iPad subscription)",
                    trialAvailable: "90-day free trial",
                },
                platforms: "macOS ONLY (and iPadOS for Logic Pro for iPad)",
                uniqueFeature: "Best stock content library of any DAW; best value for Mac users; built-in Stem Splitter (Logic 11)",
                bestFor: ["Mac users (any genre)", "Singer-songwriters and composers", "Podcast production", "Vocals and instrument tracking", "Film/TV scoring for Mac users"],
                strengths: [
                    "Best stock instrument and loop library of any DAW (thousands of Apple Loops)",
                    "Extremely powerful for the price ($199 vs. $749 Ableton Suite)",
                    "Logic Remote (iPad/iPhone as controller)",
                    "Built-in Stem Splitter (Logic 11) — separates audio into stems",
                    "Sample Alchemy — advanced granular/sample manipulation",
                    "Drummer virtual drummer plugin is industry-leading",
                    "Deep MIDI tools for composition",
                    "Strong for podcast production",
                    "Live Loops feature (session-view like clips, added in 10.5)",
                ],
                weaknesses: [
                    "Mac ONLY — unavailable to Windows users",
                    "Less live-performance focused than Ableton",
                    "Plugin compatibility limited to AU format (no VST natively — requires bridging)",
                ],
                famousUsers: ["Ed Sheeran", "Deadmau5", "Billie Eilish", "Tame Impala"],
                pluginSupport: "AU (Audio Units) native; VST via third-party bridging",
                website: "apple.com/logic-pro",
            },

            proTools: {
                name: "Pro Tools",
                developer: "Avid Technology",
                pricing: {
                    artist: "$9.99/month or $99/year",
                    studio: "$24.99/month or $299/year",
                    ultimate: "$99.99/month or $599/year",
                    perpetual: "One-time licenses also available",
                    trialAvailable: "30-day free trial",
                },
                platforms: "macOS, Windows",
                uniqueFeature: "Industry standard in professional recording studios globally — superior audio editing and comping tools",
                bestFor: ["Professional recording studio work", "Live band recording", "Multi-track audio editing", "Film/TV post-production audio", "Industry professionals requiring studio collaboration"],
                strengths: [
                    "THE industry standard in commercial recording studios",
                    "Superior audio editing tools (comping, elastic audio, clip gain)",
                    "HDX hardware integration for premium audio quality",
                    "Pro Tools Sketch (clip launcher, added recently)",
                    "Widely used for mixing and mastering by professional engineers",
                    "Required knowledge for studio engineers working in commercial studios",
                ],
                weaknesses: [
                    "Subscription model is expensive",
                    "Steep learning curve",
                    "AAX-only plugin format (fewer options than VST ecosystem)",
                    "Less creative/sound-design focused than Ableton or FL Studio",
                    "Overkill for home producers making electronic music",
                ],
                famousUsers: "Standard in commercial studios; used by most top mixing/mastering engineers",
                pluginSupport: "AAX (Avid Audio Extension) — proprietary format",
                website: "avid.com/pro-tools",
            },

            reaper: {
                name: "REAPER",
                developer: "Cockos",
                pricing: {
                    discounted: "$60 (non-commercial use license)",
                    commercial: "$225 one-time (commercial use)",
                    trialAvailable: "Unlimited free trial (honor system — prompts to buy)",
                },
                platforms: "macOS, Windows, Linux",
                uniqueFeature: "Best price-to-feature ratio of any professional DAW; fully customizable via scripts/themes",
                bestFor: ["Budget-conscious producers/engineers", "Linux users", "Custom workflow enthusiasts", "Podcast/audio post-production", "Experimental setups"],
                strengths: [
                    "Exceptional value — $60 for full professional DAW",
                    "Fully customizable interface and workflow via ReaScripts",
                    "Extremely lightweight — runs on almost any hardware",
                    "Professional-grade recording, editing, and mixing tools",
                    "Active community with thousands of free scripts and themes",
                    "Cross-platform including Linux",
                ],
                weaknesses: [
                    "Basic out-of-the-box interface (requires customization)",
                    "No included instruments or loops",
                    "Less beginner-friendly without investment in learning",
                    "Smaller community than FL/Ableton/Logic",
                ],
                pluginSupport: "VST, VST3, AU, JS",
                website: "reaper.fm",
            },

            cubase: {
                name: "Cubase",
                developer: "Steinberg (owned by Yamaha)",
                pricing: {
                    elements: "~$99",
                    artist: "~$299",
                    pro: "~$579",
                },
                platforms: "macOS, Windows",
                bestFor: ["MIDI-heavy composition", "Film/TV scoring", "Orchestral music", "Complex MIDI arrangements"],
                strengths: [
                    "Industry-leading MIDI editing (Key Editor, Expression Maps)",
                    "Excellent for orchestration and film scoring",
                    "Advanced automation",
                    "Strong video integration for scoring to picture",
                    "Modulators (LFOs, step sequencers) for generative music",
                ],
                weaknesses: ["Steeper learning curve", "Heavier interface", "Less popular in electronic/hip-hop community"],
                pluginSupport: "VST, VST3, AU",
                website: "steinberg.net",
            },

            garageband: {
                name: "GarageBand",
                developer: "Apple Inc.",
                pricing: { cost: "FREE — included with all Mac and iOS devices" },
                platforms: "macOS, iOS/iPadOS",
                bestFor: "Absolute beginners on Mac/iPhone/iPad",
                strengths: [
                    "Completely free",
                    "User-friendly interface perfect for beginners",
                    "Projects can be opened in Logic Pro (natural upgrade path)",
                    "Good stock loops and instruments",
                    "Mobile version available on iPhone/iPad",
                ],
                weaknesses: [
                    "Limited features compared to professional DAWs",
                    "Not suitable for commercial studio work",
                    "Mac/iOS only",
                ],
                website: "apple.com/garageband",
            },
        },

        mixingBasics: {
            overview: "Mixing is the process of balancing all elements of a song — levels, panning, EQ, compression, reverb, delay — so they work together cohesively",
            signalChain: "Typical order: Input → Gate/Expander → EQ → Compression → Saturation → Modulation (chorus/phaser) → Delay → Reverb → Output",

            coreProcesses: {
                gainStaging: "Setting proper levels throughout the signal chain to avoid clipping and maintain headroom. Aim for -18 to -12 dBFS average on individual tracks; leave -6 dB headroom on master bus before mastering.",
                eq: {
                    description: "Equalizer — boosts or cuts specific frequency ranges to shape the tonal character of a sound",
                    frequencies: {
                        subBass: "20–60Hz — felt more than heard; kick drum fundamental, bass guitar sub",
                        bass: "60–200Hz — warmth and body; mud can build here",
                        lowMid: "200–500Hz — boxy/muddy territory; cut here to clear up muddiness",
                        midrange: "500Hz–2kHz — presence and body; nasal qualities; important for guitars and vocals",
                        upperMid: "2kHz–5kHz — attack and clarity; too much causes harshness",
                        presence: "5kHz–10kHz — brilliance, clarity, consonants in vocals",
                        air: "10kHz–20kHz — airiness and shine; adds sparkle; gentle shelf boost here opens up mix",
                    },
                    tips: [
                        "Cut before boosting — surgical cuts are less noticeable than boosts",
                        "Use high-pass filters on most non-bass tracks to clear low-end buildup",
                        "Each instrument should occupy its own frequency space",
                        "Dynamic EQ responds to volume — useful for controlling resonances that only appear at certain levels",
                    ],
                },
                compression: {
                    description: "Reduces the dynamic range (difference between loudest and quietest parts) of audio to even out levels and add punch/glue",
                    parameters: {
                        threshold: "Level at which compression kicks in — set above average signal level",
                        ratio: "How much compression is applied — 2:1 is gentle; 10:1 is hard limiting",
                        attack: "How fast the compressor responds — fast attack clamps transients; slow attack preserves punch",
                        release: "How fast the compressor recovers — too fast causes pumping; too slow causes sustain issues",
                        kneeQ: "Hard knee = abrupt; soft knee = gradual onset of compression",
                        makeupGain: "Boost output to compensate for gain reduction",
                    },
                    useCases: {
                        vocals: "Ratio 3:1–6:1, medium attack (10–30ms), medium release to control dynamics",
                        kickDrum: "Fast attack, fast release to tighten transient; or slow attack to preserve snap",
                        bass: "Smooth out note-to-note volume inconsistencies; ratio 4:1–8:1",
                        busCompressor: "Gentle compression on mix bus (1.5:1–2:1) for 'glue' — makes mix sound cohesive",
                    },
                },
                reverb: {
                    description: "Simulates acoustic spaces by adding reflections — from small rooms to large halls to plates",
                    types: {
                        room: "Short, dense — adds sense of physical space; small rooms for drums/percussion",
                        hall: "Long, lush — for big orchestral sounds and dramatic effect",
                        plate: "Classic studio reverb — smooth and musical; great for vocals and snares",
                        spring: "Vintage hardware sound — classic in reggae, surf rock",
                        convolution: "Uses impulse responses (IRs) to model real spaces with extreme accuracy",
                    },
                    tips: [
                        "Use pre-delay (10–30ms) on reverb to prevent smearing transients, especially on vocals",
                        "High-pass filter reverb returns to prevent muddy low-end buildup",
                        "Parallel reverb (wet/dry) preserves clarity of original signal",
                        "Less reverb than you think — too much sounds amateur",
                        "Match reverb size to the genre and mood of the track",
                    ],
                },
                delay: {
                    description: "Repeats of audio signal at set time intervals — adds depth and rhythm",
                    types: ["Slapback (50–150ms) — vintage rockabilly/country; adds space without separate echo", "Sync'd delay (1/4, 1/8, dotted 1/8 note) — rhythmic delays that sit in groove", "Ping-pong — alternates between stereo channels for wide, rhythmic effect", "Tape delay — warm, degrading repeats; classic vintage sound"],
                    tips: ["Sync delay time to song BPM for rhythmic coherence", "High-cut delays to prevent repetitions cluttering high-end", "Automation — turn delay on only on word endings or during instrumental sections"],
                },
                panning: {
                    description: "Placing sounds in the stereo field (left–right) to create width and separation",
                    guidelines: [
                        "Keep kick, bass, lead vocal, and snare center (mono)",
                        "Pan guitars and synth pads wide for width",
                        "Use stereo wideners carefully — check mono compatibility",
                        "Double-track guitars/vocals and pan each side for big sound",
                        "Always check your mix in mono to ensure it doesn't fall apart",
                    ],
                },
                saturation: {
                    description: "Adds harmonic distortion/warmth — emulates analog tape, tubes, or hardware equipment",
                    uses: ["Add warmth and weight to digital-sounding sources", "Parallel saturation on bass for punch without muddiness", "Tape saturation on buses for vintage glue", "Subtle saturation on drums for punch and depth"],
                },
            },

            masteringOverview: {
                description: "Mastering is the final step — optimizing your mix for commercial distribution, ensuring consistent volume, tonality, and compatibility across playback systems",
                goals: [
                    "Achieve competitive loudness while maintaining dynamics",
                    "Tonal balance matching genre expectations",
                    "Stereo image optimization",
                    "Prepare audio to DSP specs",
                    "Encode metadata (ISRC, album art embedding)",
                ],
                targetLoudness: {
                    spotify: "-14 LUFS (integrated loudness) — Spotify normalizes to this level",
                    appleMusic: "-16 LUFS integrated",
                    youtube: "-14 LUFS integrated",
                    streaming_general: "-14 to -16 LUFS integrated is current best practice for most streaming platforms",
                    note: "Making music LOUDER than these targets does NOT help on streaming — platforms normalize loudness, and over-compression sacrifices dynamics",
                },
                aiMastering: "AI mastering services (LANDR, eMastered, iZotope Ozone AI) provide fast, affordable mastering ($0–$30 per song). Quality is good for most streaming use cases but may not match top human mastering engineers for high-profile releases.",
                humanMastering: "Professional mastering engineers typically charge $50–$200+ per track. Recommended for album releases, major pitching opportunities, or when absolute quality matters.",
            },

            vocalProduction: {
                recording: [
                    "Record in acoustically treated room or DIY setup (thick rugs, closet with clothes, acoustic foam panels)",
                    "Keep microphone 6–12 inches from mouth at slight angle to reduce plosives",
                    "Use pop filter to reduce plosive sounds (P, B, T)",
                    "Record multiple takes for comping (choosing best parts from each take)",
                    "Gain stage properly — signal peaking at -12 to -6 dBFS",
                    "Monitor through headphones while recording to prevent bleed",
                ],
                processing: [
                    "Pitch correction (Auto-Tune, Melodyne) — subtle for natural sound; extreme for effect",
                    "High-pass filter below 80–120Hz to remove room rumble and plosives",
                    "De-essing (reducing harsh sibilance around 5–10kHz)",
                    "Compression (3:1–6:1 ratio) to even out dynamics",
                    "Vocal doubling/harmonies for thickness and width",
                    "Parallel processing — mix dry and wet signal",
                    "Saturation for warmth and presence",
                    "Reverb and delay for space (use pre-delay to preserve clarity)",
                ],
                autotune: {
                    natural: "Set key/scale, slow retune speed (30–100ms) — barely perceptible pitch correction",
                    tEffect: "Fast retune speed (0ms) — robotic, quantized pitch effect popularized by T-Pain and trap music",
                    melodyne: "Manual pitch correction tool — allows editing individual notes on a waveform; superior for transparent, natural correction",
                },
            },
        },

        hardwareEquipment: {
            microphones: {
                condenserMics: {
                    description: "Sensitive, detailed — best for recording vocals, acoustic guitars, overhead drum mics",
                    recommended: [
                        { model: "Audio-Technica AT2020", price: "~$99", use: "Best budget condenser for beginners" },
                        { model: "AKG C214", price: "~$299", use: "Mid-range studio condenser" },
                        { model: "Neumann TLM 103", price: "~$1,100", use: "Industry-standard vocal mic" },
                        { model: "Shure SM27", price: "~$399", use: "Versatile studio condenser" },
                    ],
                },
                dynamicMics: {
                    description: "Rugged, less sensitive — better for loud sources (drums, amps), live use",
                    recommended: [
                        { model: "Shure SM7B", price: "~$399", use: "Industry standard for podcasting, broadcasting, hip-hop vocals, guitar amps" },
                        { model: "Shure SM58", price: "~$99", use: "Classic live vocal mic; durable" },
                        { model: "Electro-Voice RE20", price: "~$449", use: "Broadcast standard; excellent for voice and kick drum" },
                    ],
                },
                ribbonMics: {
                    description: "Warm, vintage sound — excellent for brass, guitar cabinets, room recording",
                    recommended: [{ model: "Royer R-121", price: "~$1,299", use: "Gold standard ribbon mic for guitar cabinets" }],
                },
            },

            audioInterfaces: {
                description: "Converts analog audio (microphone, instruments) to digital signal for your DAW; also provides headphone and monitor outputs",
                recommended: [
                    { model: "Focusrite Scarlett Solo (4th Gen)", price: "~$129", inputs: "1 mic, 1 instrument", use: "Best beginner interface for solo artists" },
                    { model: "Focusrite Scarlett 2i2 (4th Gen)", price: "~$179", inputs: "2 mic/instrument", use: "Best beginner/intermediate 2-channel interface" },
                    { model: "Universal Audio Volt 276", price: "~$249", inputs: "2 channels", use: "Built-in 1176-style compression; analog-warm sound" },
                    { model: "Universal Audio Apollo Twin X", price: "~$899+", inputs: "2 channels + expansion", use: "Professional-grade with UAD plugin processing" },
                    { model: "MOTU M4", price: "~$279", inputs: "4 channels", use: "Best value 4-channel interface" },
                ],
            },

            studioMonitors: {
                description: "Flat-response speakers designed for accurate audio reproduction — not hyped bass or treble like consumer speakers",
                recommended: [
                    { model: "Yamaha HS5", price: "~$399/pair", use: "Reference standard; very flat response; great for mix translation" },
                    { model: "Adam Audio T5V", price: "~$399/pair", use: "Detailed high-end; excellent for producers focused on sound design" },
                    { model: "KRK Rokit 5 G4", price: "~$299/pair", use: "Slightly hyped bass; popular for hip-hop and EDM producers" },
                    { model: "Genelec 8020E", price: "~$800+/pair", use: "Professional reference monitors; extremely accurate" },
                ],
                tip: "Always check your mix on multiple playback systems (headphones, car speakers, phone speakers) before finalizing",
            },

            midi_controllers: {
                description: "Hardware that sends MIDI data to your DAW to trigger instruments, control parameters, and play pads/keys",
                types: {
                    keyboards: [
                        { model: "Arturia KeyLab Essential 49", price: "~$199", use: "Best beginner keyboard controller" },
                        { model: "Akai MPK249", price: "~$299", use: "Excellent performance keys + pads + knobs" },
                        { model: "Native Instruments Komplete Kontrol S49", price: "~$499", use: "Deep integration with NI plugins and Komplete library" },
                    ],
                    padControllers: [
                        { model: "Akai MPC One+", price: "~$699", use: "Standalone beatmaking powerhouse; also works as DAW controller" },
                        { model: "Native Instruments Maschine MK3", price: "~$499", use: "Industry-standard pad controller with NI software integration" },
                        { model: "Ableton Push 3", price: "~$999 (standalone)", use: "Native Ableton controller; standalone mode available" },
                    ],
                },
            },

            headphones: {
                recommended: [
                    { model: "Sony MDR-7506", price: "~$99", type: "Closed-back", use: "Industry standard studio tracking headphones" },
                    { model: "Audio-Technica ATH-M50x", price: "~$149", type: "Closed-back", use: "Excellent detail; good for mixing reference" },
                    { model: "Sennheiser HD 600", price: "~$399", type: "Open-back", use: "Outstanding mixing headphones; very accurate" },
                    { model: "Beyerdynamic DT 990 Pro", price: "~$149", type: "Open-back", use: "Detailed high-end; popular for mixing" },
                ],
                note: "Open-back headphones leak sound but sound wider and more natural — better for mixing. Closed-back headphones isolate sound better — better for recording.",
            },
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 6: MUSIC THEORY
    // ──────────────────────────────────────────────────────────
    musicTheory: {
        notes: {
            description: "The 12 notes of Western music (chromatic scale)",
            naturalNotes: ["C", "D", "E", "F", "G", "A", "B"],
            allNotes: ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"],
            noteCount: 12,
            octaveRange: "Notes repeat every 12 semitones in octaves (C3, C4, C5, etc.)",
        },

        intervals: {
            description: "The distance between two notes",
            list: [
                { semitones: 0, name: "Unison", quality: "Perfect" },
                { semitones: 1, name: "Minor 2nd", quality: "Minor" },
                { semitones: 2, name: "Major 2nd", quality: "Major" },
                { semitones: 3, name: "Minor 3rd", quality: "Minor" },
                { semitones: 4, name: "Major 3rd", quality: "Major" },
                { semitones: 5, name: "Perfect 4th", quality: "Perfect" },
                { semitones: 6, name: "Tritone / Diminished 5th / Augmented 4th", quality: "Dissonant" },
                { semitones: 7, name: "Perfect 5th", quality: "Perfect" },
                { semitones: 8, name: "Minor 6th", quality: "Minor" },
                { semitones: 9, name: "Major 6th", quality: "Major" },
                { semitones: 10, name: "Minor 7th", quality: "Minor" },
                { semitones: 11, name: "Major 7th", quality: "Major" },
                { semitones: 12, name: "Octave", quality: "Perfect" },
            ],
        },

        scales: {
            majorScale: {
                description: "Happy, bright sounding. The foundation of Western music.",
                formula: "W-W-H-W-W-W-H (W=Whole step/2 semitones, H=Half step/1 semitone)",
                pattern: [2, 2, 1, 2, 2, 2, 1],
                example: { root: "C", notes: ["C", "D", "E", "F", "G", "A", "B"] },
                degreesRomanNumerals: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
                chordQualities: ["Major", "Minor", "Minor", "Major", "Major", "Minor", "Diminished"],
            },

            naturalMinorScale: {
                description: "Sad, dark, emotional sounding. Also called Aeolian mode.",
                formula: "W-H-W-W-H-W-W",
                pattern: [2, 1, 2, 2, 1, 2, 2],
                example: { root: "A", notes: ["A", "B", "C", "D", "E", "F", "G"] },
                degreesRomanNumerals: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
                chordQualities: ["Minor", "Diminished", "Major", "Minor", "Minor", "Major", "Major"],
            },

            harmonicMinorScale: {
                description: "Raises the 7th degree of natural minor — creates leading tone tension; exotic, dramatic sound",
                formula: "W-H-W-W-H-WH-H",
                pattern: [2, 1, 2, 2, 1, 3, 1],
                example: { root: "A", notes: ["A", "B", "C", "D", "E", "F", "G#"] },
                use: "Common in classical, metal, flamenco, Middle Eastern music",
            },

            pentatonicMajor: {
                description: "5-note major scale — removes 4th and 7th. Very consonant, works in almost any context.",
                pattern: [2, 2, 3, 2, 3],
                example: { root: "C", notes: ["C", "D", "E", "G", "A"] },
                use: "Country, pop, rock, folk, blues solos",
            },

            pentatonicMinor: {
                description: "5-note minor scale — removes 2nd and 6th. The backbone of blues and rock soloing.",
                pattern: [3, 2, 2, 3, 2],
                example: { root: "A", notes: ["A", "C", "D", "E", "G"] },
                use: "Blues, rock, hip-hop, R&B solos; extremely common in pop music",
            },

            bluesScale: {
                description: "Minor pentatonic + blue note (b5/tritone). The defining sound of blues music.",
                pattern: [3, 2, 1, 1, 3, 2],
                example: { root: "A", notes: ["A", "C", "D", "Eb", "E", "G"] },
                use: "Blues, jazz, rock, soul, country",
            },

            modes: {
                description: "Scales derived by starting a major scale on a different degree. Each mode has a unique character.",
                list: [
                    { name: "Ionian", degree: 1, character: "Bright, happy — same as major scale", example: "C D E F G A B" },
                    { name: "Dorian", degree: 2, character: "Minor with raised 6th — jazzy, cool, bluesy minor", example: "D E F G A B C", famousUse: "'So What' by Miles Davis; 'Oye Como Va'" },
                    { name: "Phrygian", degree: 3, character: "Dark, Spanish/Flamenco flavor. Minor scale with b2", example: "E F G A B C D", famousUse: "Metal, flamenco, Spanish music" },
                    { name: "Lydian", degree: 4, character: "Bright, dreamy — major scale with raised 4th. Futuristic, ethereal", example: "F G A B C D E", famousUse: "Film scores (John Williams), dream-pop" },
                    { name: "Mixolydian", degree: 5, character: "Major with b7 — bluesy, rock, country. Slightly unresolved", example: "G A B C D E F", famousUse: "Rock, blues, folk; 'Hey Joe' by Hendrix" },
                    { name: "Aeolian", degree: 6, character: "Natural minor scale — dark, melancholic", example: "A B C D E F G" },
                    { name: "Locrian", degree: 7, character: "Very dark, dissonant — diminished character. Rarely used", example: "B C D E F G A" },
                ],
            },
        },

        chords: {
            triads: {
                major: { formula: "Root + Major 3rd + Perfect 5th", semitones: [0, 4, 7], character: "Bright, happy" },
                minor: { formula: "Root + Minor 3rd + Perfect 5th", semitones: [0, 3, 7], character: "Dark, sad" },
                diminished: { formula: "Root + Minor 3rd + Diminished 5th", semitones: [0, 3, 6], character: "Tense, unstable, dissonant" },
                augmented: { formula: "Root + Major 3rd + Augmented 5th", semitones: [0, 4, 8], character: "Dreamy, unsettling, suspended" },
            },

            seventhChords: {
                majorSeventh: { formula: "Root + M3 + P5 + M7", semitones: [0, 4, 7, 11], symbol: "Maj7 or M7", character: "Sophisticated, dreamy, jazz" },
                dominantSeventh: { formula: "Root + M3 + P5 + m7", semitones: [0, 4, 7, 10], symbol: "7", character: "Tense, bluesy, wants to resolve to I" },
                minorSeventh: { formula: "Root + m3 + P5 + m7", semitones: [0, 3, 7, 10], symbol: "m7 or -7", character: "Smooth, jazzy, melancholic" },
                halfDiminished: { formula: "Root + m3 + d5 + m7", semitones: [0, 3, 6, 10], symbol: "m7b5 or ø", character: "Tense, jazzy, melancholic" },
                diminishedSeventh: { formula: "Root + m3 + d5 + d7", semitones: [0, 3, 6, 9], symbol: "dim7 or °7", character: "Extremely tense, dramatic, horror" },
            },

            chordProgressions: {
                description: "Common chord progressions that appear across many genres",
                progressions: [
                    { name: "I-IV-V-I", romanNumerals: "I IV V I", exampleInC: "C F G C", character: "The most fundamental; country, folk, rock, blues" },
                    { name: "I-V-vi-IV", romanNumerals: "I V vi IV", exampleInC: "C G Am F", character: "The '4 chord song' — countless pop hits; happy/anthemic" },
                    { name: "vi-IV-I-V", romanNumerals: "vi IV I V", exampleInC: "Am F C G", character: "Emotional, slightly melancholic; ubiquitous in pop" },
                    { name: "I-VI-II-V", romanNumerals: "I vi ii V", exampleInC: "C Am Dm G", character: "Jazz standard progression; smooth and circular" },
                    { name: "ii-V-I", romanNumerals: "ii V I", exampleInC: "Dm7 G7 Cmaj7", character: "THE jazz cadence; most important jazz progression" },
                    { name: "I-bVII-bVI-bVII", romanNumerals: "I bVII bVI bVII", exampleInC: "C Bb Ab Bb", character: "Rock/grunge power chord feel; non-diatonic movement" },
                    { name: "i-VII-VI-VII", romanNumerals: "i VII VI VII", exampleInAm: "Am G F G", character: "Natural minor loop; sad, cinematic, dark pop" },
                    { name: "I-I-IV-IV-I-I-V-V", romanNumerals: "12-bar blues", character: "Blues progression; the foundation of rock and R&B" },
                    { name: "Axis Progression", romanNumerals: "I V vi iii OR vi IV I V", character: "Same 4 chords, different starting point — varies mood" },
                    { name: "Andalusian Cadence", romanNumerals: "i-VII-VI-V", exampleInAm: "Am G F E", character: "Flamenco/Spanish descending bass; dramatic" },
                ],
            },

            voiceLeading: "The art of connecting chords smoothly by minimizing the movement of individual notes. Keep common tones between chords; move other voices by the smallest interval possible. Creates smooth, professional-sounding harmonic motion.",

            chord_extensions: "Beyond 7th chords, you can add 9ths, 11ths, and 13ths for jazz/R&B color. Example: Cmaj9 = C E G B D; C13 = C E G Bb D A",
        },

        rhythm: {
            timeSignatures: {
                "4/4": "Four quarter notes per bar — the most common in pop, rock, hip-hop, and most Western music",
                "3/4": "Three quarter notes per bar — waltz feel; used in ballads and classical",
                "6/8": "Six eighth notes per bar — compound triple; flowing, lilting feel; used in Irish music, gospel",
                "5/4": "Five quarter notes per bar — unusual, complex feel; 'Take Five' by Dave Brubeck; Radiohead",
                "7/8": "Seven eighth notes per bar — very complex, asymmetric; prog rock, math rock",
                "12/8": "Twelve eighth notes per bar — slow blues, gospel; triplet-feel",
            },
            bpm: {
                description: "Beats Per Minute — determines tempo/speed of the song",
                ranges: [
                    { range: "40–60 BPM", feel: "Slow ballad, orchestral, ambient" },
                    { range: "60–80 BPM", feel: "R&B, slow soul, torch song" },
                    { range: "80–100 BPM", feel: "Hip-hop (classic), soul, soft rock" },
                    { range: "100–120 BPM", feel: "Pop, dancehall, upbeat hip-hop" },
                    { range: "120–130 BPM", feel: "House music, disco" },
                    { range: "128–142 BPM", feel: "Techno, trance" },
                    { range: "140–160 BPM", feel: "Drum and bass, UK garage" },
                    { range: "160–180 BPM", feel: "Jungle, hardcore" },
                    { range: "170–220 BPM", feel: "Punk, metal, speed metal" },
                ],
            },
            groove: "The rhythmic feel created by note timing relative to the beat. Playing slightly behind the beat = laid-back (hip-hop, R&B). Slightly ahead = urgent (punk, country). Exactly on = tight, mechanical (electronic, pop).",
            humanization: "Adding slight timing variations (1–20ms) and velocity fluctuations to MIDI patterns to sound less robotic and more human. Most DAWs offer 'humanize' functions.",
        },

        songStructure: {
            standardPopStructure: "Intro → Verse → Pre-Chorus → Chorus → Verse → Pre-Chorus → Chorus → Bridge → Chorus (x2) → Outro",
            elements: {
                intro: "Opening section — establishes mood and sound before lyrics begin; typically 4–8 bars",
                verse: "Tells the story — different lyrics each time; lower energy than chorus; builds to pre-chorus",
                preChorus: "Transitional section that creates tension and anticipation before the chorus drops; often starts low and ends high",
                chorus: "The emotional peak and hook; usually contains the title/main message; repeated; most memorable part",
                bridge: "Contrasting section (different chord progression, melody, or key) for variety before final chorus; typically occurs once",
                outro: "Closing section; often repeats chorus or fades; brings resolution",
                hook: "The catchiest, most memorable element — could be a melodic phrase, lyric, or beat. The goal is for the listener to remember it after one listen.",
                breakdown: "Electronic/dance music term — strip the beat back to minimal elements for tension before a 'drop'",
                drop: "EDM term — the main high-energy section where full beat returns after breakdown; peak of the track",
            },
        },

        keyAndModality: {
            keySignature: "Defines which scale/tonal center a piece is built around. 'C major' means the music uses C major scale notes and C is the home base chord.",
            relativeMajorMinor: "Every major key has a relative minor that shares the same notes. C major → A minor (same notes, different tonal center).",
            parallelKeys: "Same root note, different mode. C major vs. C minor (different notes, same starting point).",
            transposition: "Shifting all notes in a piece up or down by the same interval to change the key.",
            modulation: "Changing key within a song — creates emotional lift (usually up a half or whole step at the end for an anthem effect) or serves dramatic storytelling purposes.",
            circleOfFifths: "A diagram showing all 12 major (and relative minor) keys arranged by their relationships. Moving clockwise = adding a sharp; moving counterclockwise = adding a flat. Adjacent keys share the most common notes and harmonize well. Essential tool for music theory and composition.",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 7: MUSIC MARKETING & PROMOTION
    // ──────────────────────────────────────────────────────────
    marketing: {
        releaseStrategy: {
            timeline: {
                "8+ weeks before": "Finalize master recordings and artwork; secure ISRC codes; set up distributor release",
                "6 weeks before": "Submit to Spotify editorial pitching (via Spotify for Artists) — minimum 7 days required; earlier is better",
                "4–6 weeks before": "Begin social media teasing; announce release date; start press outreach; pitch to blogs and playlists",
                "2–4 weeks before": "Release press kit; begin pre-save campaign; pitch to TikTok influencers; radio pitching",
                "1 week before": "Final social media push; remind followers; content calendar in place",
                "Release day": "All social platforms updated; music video live; go live with announcements; engage with every comment",
                "Post-release": "Continue promoting 4–8 weeks; pitch to algorithmic playlists; run ads; pitch remaining blogs and playlists",
            },
            releaseFrequency: {
                singles: "1 single every 4–8 weeks is ideal for most independent artists — keeps algorithm engagement active",
                albums: "Full albums are best released after building momentum with singles; announce with a 'campaign' (single → single → pre-order → album)",
                dontDump: "DO NOT release all songs at once — staggered single releases maximize each song's algorithmic lifespan",
                epStrategy: "4–5 song EPs work well — release 2 singles first, then drop the EP for catalog depth",
            },
        },

        playlistPitching: {
            spotifyEditorial: {
                description: "Spotify's curated playlists (like New Music Friday, RapCaviar, Viva Latino) — highest-impact placement",
                howToSubmit: "Spotify for Artists → Music tab → Select unreleased song → Submit for editorial consideration",
                requirements: "Must be unreleased (not yet live on Spotify); submit at least 7 days before release date",
                tips: [
                    "Fill in ALL metadata (mood, genre, instruments, tempo, language)",
                    "Write a compelling pitch in the description — tell the story",
                    "Select 1 song only — your strongest, best bet",
                    "Earlier submission gives more time for Spotify team to review",
                ],
            },
            algorithmicPlaylists: {
                description: "Spotify's algorithmically generated playlists (Discover Weekly, Release Radar, Daily Mixes) — driven by listener engagement",
                howToGetOn: [
                    "Get genuine saves and streams — algorithmic playlists reward engagement metrics",
                    "Pre-save campaigns boost day-1 engagement signals",
                    "Complete all song metadata accurately",
                    "First 7–30 days of release are critical for algorithmic momentum",
                    "Listeners adding song to their Own Playlists is a strong signal",
                ],
            },
            independentPlaylists: {
                description: "User-curated playlists run by independent curators — often easier to access than editorial",
                pitchingServices: [
                    { name: "SubmitHub", model: "Submit to curators for credits; $1–$5 per submission; high acceptance transparency" },
                    { name: "Groover", model: "Submit to curators, playlists, and blogs for credits; good response rates" },
                    { name: "Playlist Push", model: "Paid service — $300–$1,000+ campaigns; connects to larger curator network" },
                    { name: "Omari MC", model: "Paid organic promotion; playlist pitching campaigns" },
                ],
                diyPitching: "Research playlists in your genre; find curator contact info; send personal, concise pitch emails with streaming links. Generic mass-emails rarely work.",
            },
            appleMusicPitching: "Submit via Apple Music for Artists pitching portal at least 10 days before release. Similar process to Spotify.",
        },

        socialMedia: {
            tiktok: {
                importance: "Single most powerful platform for organic music discovery in 2024–2025. Songs that go viral on TikTok routinely generate millions of streams.",
                strategies: [
                    "Post short clips (15–30 seconds) featuring the catchiest/most viral-potential moment of your song",
                    "Use trending sounds and audio formats to boost discovery",
                    "Show the creative process (making beats, writing lyrics, studio sessions)",
                    "Encourage duets, stitches, and user-created content with your sound",
                    "TikTok Series for tutorials or storytelling",
                    "Consistency is key — 3–5 posts per week minimum during release campaign",
                    "Use keywords/hashtags strategically in captions",
                    "TikTok for Artists (analytics tool) is free — use it",
                ],
                algorithm: "TikTok serves content based on engagement rate, not follower count — new creators CAN go viral without large following",
                contentIdCaution: "Register your music on Content ID before it blows up on TikTok to claim those revenues",
            },

            instagram: {
                strategies: [
                    "Reels are the primary discovery format — similar to TikTok, prioritize 15–30 second video clips",
                    "Stories for daily behind-the-scenes and engagement",
                    "Swipe-up links (if available) direct fans to streaming",
                    "Instagram music stickers in Stories link directly to streaming pages",
                    "Consistent aesthetic and visual brand across the grid",
                    "Collaborate with other artists for cross-promotion",
                    "Go Live for acoustic performances, Q&As, and listening parties",
                ],
                audienceNote: "Slightly older demographic than TikTok; better for visual brand building and established fans",
            },

            youtube: {
                strategies: [
                    "Official Music Videos are critical for long-term SEO and discovery",
                    "Lyric videos as cost-effective supplement to official MV",
                    "YouTube Shorts for TikTok-style discovery",
                    "Behind-the-scenes (studio vlogs, making-of) for loyal fans",
                    "Live sessions and acoustic performances",
                    "Consistent upload schedule for YouTube algorithm",
                    "Optimize titles, descriptions, and tags for search",
                ],
                contentId: "Set up YouTube Content ID through your distributor — monetize use of your music in other people's videos",
            },

            twitter: {
                strategies: [
                    "Real-time engagement and industry networking",
                    "Share opinions, industry thoughts, links to new music",
                    "Engage with fans and other artists directly",
                    "Less emphasis on content creation vs. TikTok/Instagram",
                    "Good for press and media connections",
                ],
            },

            facebook: {
                strategies: [
                    "Facebook Events for shows and releases",
                    "Facebook Groups for dedicated fan communities",
                    "Less organic reach than before; better for paid advertising to older demographics",
                    "Facebook Ads Manager is still powerful for targeting",
                ],
            },

            general: {
                keyPrinciples: [
                    "Be consistent — posting 3–5x per week outperforms infrequent viral attempts",
                    "Engage authentically — reply to every comment in early stages",
                    "Cross-post content across platforms (TikTok → Instagram Reels → YouTube Shorts)",
                    "Behind-the-scenes content outperforms polished advertisements for authenticity",
                    "Build an email list — the only audience you truly own (social algorithms change)",
                    "Collaborate with artists at similar career stages for mutual audience growth",
                    "Quality > Quantity eventually, but consistency > perfection at early stages",
                ],
            },
        },

        paidAdvertising: {
            spotifyAds: {
                name: "Spotify Ad Studio",
                minimumBudget: "$250 minimum campaign",
                format: "30-second audio ads targeting specific listener demographics and listening behaviors",
                bestFor: "Direct Spotify listener acquisition; promoting new releases to genre-specific listeners",
                targeting: "Demographic, genre, mood, playlist type",
            },
            facebookInstagramAds: {
                minimumBudget: "As low as $5/day",
                bestFor: "Retargeting existing fans; building website/streaming link traffic; video ad campaigns",
                types: ["Video ads with music playing", "Carousel ads with album art", "Stories ads"],
                targeting: "Age, location, interests, lookalike audiences of existing fans",
                tips: [
                    "Use 'conversions' objective targeting Spotify pre-save or streaming link clicks",
                    "Test multiple creatives with same audience",
                    "Retarget people who watched 50%+ of your previous video",
                    "Lookalike audience from email list or website visitors",
                ],
            },
            youtubeAds: {
                format: "Skippable and non-skippable video ads before YouTube videos",
                bestFor: "Music video promotion; building YouTube channel subscribers",
                targeting: "Demographics, interests, channel placements, video placements",
                note: "Run ads targeting channels/videos of similar artists",
            },
            tikTokAds: {
                minimumBudget: "$50 minimum",
                bestFor: "Younger demographics; music discovery; pre-save campaigns",
                types: ["In-Feed Ads (appear in For You Page)", "TopView (premium, expensive)", "Spark Ads (boost existing organic TikToks)"],
                tip: "Spark Ads (boosting existing organic posts) often outperforms creating new ad creatives",
            },
        },

        pressAndPR: {
            pressKit: {
                components: [
                    "Artist bio (short 50-word, medium 100-word, long 300-word versions)",
                    "High-resolution press photos (2–3 shots, different styles)",
                    "Professional press photo with photographer credit",
                    "Previous press mentions and quotes",
                    "One-sheet (single page PDF summary of artist and latest release)",
                    "Music files (WAV or streaming links)",
                    "Social media links and website",
                    "Contact information for booking and press inquiries",
                ],
            },
            blogs: {
                description: "Music blogs and websites that review and feature artists",
                pitchingTips: [
                    "Research each outlet — know their submission preferences",
                    "Personalized pitch (mention a specific article they've written)",
                    "Short pitch — 2–3 paragraphs maximum; link to streaming not attachment",
                    "Submit 2–4 weeks before release date",
                    "Follow up once after 1 week if no response",
                ],
                resources: ["Submithub.com for curated blog/playlist submissions", "Hype Machine (blog submission)", "Pigeons & Planes", "The FADER", "NME", "Pitchfork (major tastemaker, hard to get)"],
            },
            radioAirplay: {
                description: "Getting music played on radio stations",
                types: ["College radio — most accessible for independent artists", "Community radio stations", "Satellite radio (Sirius XM — SoundExchange royalties)", "Internet radio (Pandora — SoundExchange royalties)", "Terrestrial commercial radio — requires promoter or label backing"],
                importance: "Radio airplay still generates significant PRO performance royalties and triggers SoundExchange neighboring rights",
                howToSubmit: "Research stations in your genre; send physical promo package or digital submission link; some stations have open submission policies",
            },
        },

        email_marketing: {
            importance: "Email list is the only audience you truly OWN — social platforms can ban you or change algorithms overnight",
            building: [
                "Offer free download or exclusive content in exchange for email signup",
                "Link from bio, website, and smart links",
                "Collect emails at live shows",
                "Pre-save campaign double opt-in for email",
            ],
            tools: [
                { name: "Mailchimp", cost: "Free up to 500 subscribers; paid after", note: "Most popular" },
                { name: "Mailerlite", cost: "Free up to 1,000 subscribers", note: "Clean interface" },
                { name: "Substack", cost: "Free (takes 10% if paid newsletter)", note: "Good for artists with something to say; growing" },
                { name: "Klaviyo", cost: "Starts at $30/month", note: "Advanced segmentation and e-commerce integration" },
            ],
            strategy: [
                "Send at minimum monthly; ideally around releases and shows",
                "Include exclusive content (behind-the-scenes, early access)",
                "Keep emails personal and conversational — avoid marketing-speak",
                "Include clear single call-to-action per email",
            ],
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 8: LIVE MUSIC & TOURING
    // ──────────────────────────────────────────────────────────
    liveMusicAndTouring: {
        overview: "Live performance is the most direct way to build a fanbase and generate income. For most artists, touring is the primary income source — streaming alone rarely sustains a career.",

        showTypes: {
            localGigs: "Bars, clubs, and small venues in your hometown — essential for building a local fanbase before touring",
            openMics: "Free performance slots for building stage experience and networking with local musicians",
            headliningShows: "You are the main act — requires sufficient fanbase in that market",
            supportSlots: "Opening for larger artists — tremendous exposure opportunity; usually little to no pay",
            festivalSlots: "Music festivals — from local to international; require booking agent for larger festivals",
            residencies: "Regular weekly/monthly slots at a specific venue — great for building consistent local fanbase",
        },

        bookingProcess: {
            independent: [
                "Research venues appropriate for your stage of career and audience size",
                "Contact venue bookers directly via email with press kit and Spotify/streaming profile",
                "Start small — build a local reputation before touring",
                "Offer to co-headline or support local acts to share audiences",
            ],
            bookingAgents: {
                description: "Professional agents who book shows and tours on behalf of artists",
                commission: "10–15% of gross performance fees",
                howToGet: "Usually require a demonstrated fanbase and track record of live shows",
                majorAgencies: ["CAA (Creative Artists Agency)", "WME (William Morris Endeavor)", "UTA (United Talent Agency)", "Paradigm Talent Agency", "Monterey International"],
            },
        },

        tourBudgeting: {
            expenses: [
                "Transportation (gas, flights, van rental)",
                "Hotel/accommodation",
                "Venue equipment rental (backline) if needed",
                "Crew (sound engineer, tour manager, merchandise person)",
                "Food and per diems",
                "Marketing and advertising in each city",
                "Insurance",
            ],
            incomeSources: [
                "Venue guarantee (flat fee paid by venue)",
                "Door split (percentage of ticket sales after venue takes its cut)",
                "Merchandise sales at shows (often the most profitable income stream)",
                "Ticket sales from self-promoted shows",
            ],
            merchandiseTips: [
                "Merch tables at shows typically generate $2–$10 per attendee in sales",
                "T-shirts, hoodies, and vinyls are best sellers",
                "Offer limited/exclusive show-only items for urgency",
                "Keep prices accessible — $25 tee > $40 tee for volume",
                "Use Square or Stripe for card payments",
            ],
        },

        performanceRoyaltiesLive: {
            note: "Venues pay blanket licensing fees to PROs (ASCAP, BMI, SESAC). When you perform your original songs live, your PRO collects these royalties and distributes to you based on setlists submitted.",
            howToCollect: "Submit your setlist to your PRO after each live performance. Some PROs have apps for this (ASCAP, BMI have setlist submission tools).",
        },

        festivalStrategy: {
            levels: [
                "Local/regional festivals — submit through festival website open submissions",
                "Mid-level festivals — require booking agent and demonstrated drawing power",
                "Major festivals (Coachella, Glastonbury, SXSW, Lollapalooza) — require label, booking agency, and significant streaming numbers",
            ],
            SXSW: "South by Southwest (Austin, Texas) — most important industry conference and festival for emerging artists. Networking as valuable as performance.",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 9: MUSIC BUSINESS & LEGAL
    // ──────────────────────────────────────────────────────────
    musicBusiness: {
        businessStructure: {
            soleProprietorship: "Default — no formal registration needed; personal and business liability are the same; simplest for early career",
            llc: {
                description: "Limited Liability Company — separates personal and business liability; protects personal assets",
                cost: "~$50–$500 to form (varies by state)",
                benefits: ["Liability protection", "Tax flexibility", "More professional appearance for label negotiations", "Can own trademarks and copyrights through LLC"],
                recommendation: "Form an LLC once generating meaningful income (>$5,000/year from music)",
            },
            corporation: "S-Corp or C-Corp — for larger music businesses, multiple partners, or seeking investment. Requires formal governance.",
        },

        musicAttorneys: {
            importance: "An entertainment/music attorney is ESSENTIAL for any significant contract. Never sign a record deal, publishing deal, or management deal without independent legal counsel.",
            whenToHire: ["Before signing any contract", "When forming a business entity", "Trademark and copyright disputes", "Songwriting collaboration disputes", "When offered a label or publishing deal"],
            cost: "$200–$600/hour for experienced music attorneys; some offer flat fees for specific services",
            findingAnAttorney: "Entertainment Lawyers Network (ENL), California Lawyers for the Arts, referrals from other artists",
        },

        management: {
            personalManager: {
                role: "Day-to-day guidance of artist's career — handles business decisions, deal negotiations (with attorney), team coordination, strategy",
                commission: "15–20% of gross income",
                whenToGet: "Once generating income and too busy to handle all business aspects alone",
                redFlags: ["Manager who also owns a label (conflict of interest)", "Upfront fees before generating income", "Contracts with no sunset clause"],
            },
            businessManager: {
                role: "Handles finances — accounting, taxes, budgeting, royalty statements",
                commission: "5–10% of gross income or hourly/flat fee",
                whenToGet: "When income becomes complex enough to need professional financial management",
            },
            tourManager: {
                role: "Oversees logistics of touring — travel, hotels, venue coordination, daily schedule",
                pay: "Day rate ($250–$500/day) or weekly rate",
            },
            bookingAgent: {
                role: "Secures show offers and negotiates performance deals",
                commission: "10–15% of performance fees",
                note: "In most states, booking agents must be licensed (CA and NY have strict laws); check local regulations",
            },
        },

        musicLicensing: {
            masterLicense: "Required to use a specific recorded performance in visual media or cover it commercially",
            syncLicense: "Required to pair a composition with visual media",
            mechanicalLicense: "Required to reproduce/distribute a composition (cover songs, sampling)",
            publicPerformanceLicense: "Required for venues and broadcasters to publicly play music — covered by PRO blanket licenses",
            sampleClearance: "Using any part of another recording requires clearing BOTH the master (contact label/artist) AND the composition (contact publisher). Even 1–2 seconds must be cleared. Can cost thousands to millions depending on prominence and artist.",
        },

        trademarks: {
            bandNameTrademark: "Protects your artist/band name from being used by others in commerce (music-related goods and services)",
            howToRegister: "USPTO.gov — register in International Class 041 (entertainment services)",
            cost: "$250–$350 per class per trademark application (USPTO filing fee; attorney fees additional)",
            importance: "Search for existing trademarks BEFORE building a brand around a name; trademark disputes are expensive",
            commonLawRights: "Using a name in commerce creates some common law trademark rights, even without registration — but federal registration gives significantly stronger legal protection",
        },

        income_streams: {
            description: "Professional musicians earn from many streams simultaneously — relying on any single source is financially risky",
            streams: [
                { source: "Streaming Royalties (Master)", example: "Spotify, Apple Music", typicalIncome: "$3–$13 per 1,000 streams depending on platform" },
                { source: "Performance Royalties (PRO)", example: "Radio play, streaming composition royalties, live venue plays", typicalIncome: "Varies widely by airplay and platform" },
                { source: "Mechanical Royalties", example: "Physical sales, downloads, streaming composition", typicalIncome: "$0.091 per physical copy; streaming rates set by CRB" },
                { source: "Sync Licensing", example: "Film, TV, ads, games", typicalIncome: "$100–$500,000+ per placement" },
                { source: "Live Performance", example: "Concerts, shows, festivals", typicalIncome: "$0–$millions depending on career level; most important for emerging artists" },
                { source: "Merchandise", example: "T-shirts, hoodies, vinyl, signed items", typicalIncome: "$2–$10 per attendee at shows; 30–50% margin on online merch" },
                { source: "Publishing Deal Advance", example: "Co-publishing or full publishing deal", typicalIncome: "Advance against future royalties — varies widely" },
                { source: "Brand Partnerships/Endorsements", example: "Instrument endorsements, clothing brand deals", typicalIncome: "Product trade to six figures+ for major artists" },
                { source: "Teaching/Content Creation", example: "Music lessons, YouTube, Patreon", typicalIncome: "Supplementary; can be primary for some independent artists" },
                { source: "Neighboring Rights (SoundExchange)", example: "Non-interactive digital radio (Pandora, SiriusXM)", typicalIncome: "Varies by airplay; entirely passive income" },
                { source: "YouTube Content ID", example: "Others using your music on YouTube", typicalIncome: "~$0.00087 per view via Content ID monetization" },
                { source: "NFTs and Web3", example: "Releasing limited NFT drops, tokenized royalties", typicalIncome: "Highly variable; speculative market; higher ceiling for established artists with crypto-native fans" },
                { source: "Direct Fan Platforms", example: "Bandcamp, Patreon, Substack", typicalIncome: "Depends on fanbase size and engagement; best for artists with dedicated followings" },
            ],
        },

        taxes: {
            selfEmployment: "Musicians are self-employed — responsible for paying both employee AND employer portions of Social Security/Medicare tax (~15.3% of net self-employment income)",
            quarterlyEstimatedTaxes: "Pay estimated taxes quarterly to IRS (April, June, September, January) if expecting to owe $1,000+ in taxes",
            deductibleExpenses: [
                "Studio equipment (instruments, microphones, computers, interfaces)",
                "Software subscriptions (DAW, plugins, distribution)",
                "Home studio space (home office deduction)",
                "Travel and transportation for music-related work",
                "Marketing and advertising costs",
                "Attorney and accounting fees",
                "Education directly related to music career",
                "Stage clothes/costumes (must be unsuitable for everyday wear)",
                "Music lessons (if maintaining/improving skills for current work)",
            ],
            s_corp_advantage: "If earning $50,000+ from music, an S-Corp election may save thousands in self-employment tax by allowing you to take a reasonable salary + distributions",
            recommendation: "Work with a CPA who has experience with entertainment/creative industry clients",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 10: GENRE-SPECIFIC KNOWLEDGE
    // ──────────────────────────────────────────────────────────
    genres: {
        hiphop: {
            production: {
                bpmRange: "70–100 BPM (classic hip-hop); 120–150 BPM (trap); 100–120 BPM (drill)",
                structure: "Intro → Verse → Hook → Verse → Hook → Bridge/Verse → Hook → Outro",
                instruments: ["808 bass", "Trap hi-hats (16th note rolls)", "Kicked snare or 808 drum patterns", "Sampled vocals/loops", "Rhodes, piano, vocal chops"],
                soundDesign: "Heavy on samples (chops), 808 bass synthesizers (Roland TR-808 style), trap-style percussion",
                keyDAWs: ["FL Studio (most popular)", "Ableton Live", "Logic Pro"],
                essentialPlugins: ["NEXUS2/3 for synth sounds", "Serum for sound design", "Omnisphere for cinematic sounds", "Gross Beat (FL) for stutter effects", "OTT for compression/saturation", "808 Melt for 808 processing"],
            },
            distribution: "Most hip-hop artists use DistroKid or TuneCore; UnitedMasters has specific brand deal opportunities for hip-hop artists",
            labelLandscape: "Cash Money, Def Jam, Dreamville, Young Money, TDE, Roc Nation, Interscope",
            royalties: "Sampling requires clearing both master AND composition — often cost-prohibitive; many modern producers use interpolations (re-recording the melody) instead of samples",
        },

        pop: {
            production: {
                bpmRange: "100–130 BPM",
                structure: "Very strict Verse-PreChorus-Chorus-Verse-PreChorus-Chorus-Bridge-Chorus structure",
                instruments: ["Programmed drums", "Bass guitar or synth bass", "Piano/synth pads", "Electric guitar (optional)", "Heavy vocal processing"],
                keyElements: ["Strong, memorable hook is paramount", "Professional vocal production with auto-tune", "Ear candy (counter-melodies, production fills)", "Filtered/sidechain builds to chorus"],
            },
            songwriting: "Co-writing with professional songwriters is common in mainstream pop; topliners (melody + lyric writers) and producers often collaborate",
            labelLandscape: "Republic, Columbia, Atlantic, Interscope, RCA dominate",
        },

        electronic: {
            subgenres: {
                house: { bpm: "120–130", elements: "4-on-the-floor kick, offbeat hihat, bass groove, chord stabs" },
                techno: { bpm: "130–150", elements: "Repetitive, industrial, hypnotic; minimal melodic content; long evolving tracks" },
                trance: { bpm: "128–145", elements: "Arpeggiated synths, breakdown and build, euphoric melodic climax" },
                drumAndBass: { bpm: "160–180", elements: "Complex drum patterns, sub-bass, chopped Amen break" },
                dubstep: { bpm: "138–142", elements: "Half-time feel, massive bass wobbles (wubs), aggressive sound design" },
                ambient: { bpm: "60–90 or beatless", elements: "Atmospheric pads, evolving textures, minimal rhythm" },
                edm: { bpm: "128–140", elements: "Big room builds and drops, anthem melodies; festival-oriented" },
            },
            distribution: "Symphonic Distribution recommended for electronic music (includes EDM-specialty DSPs without extra fees)",
        },

        countryAndAmericana: {
            production: {
                bpmRange: "80–130 BPM (varies widely)",
                instruments: ["Acoustic guitar (core)", "Pedal steel guitar", "Fiddle/violin", "Dobro", "Banjo (bluegrass)", "Piano/organ", "Bass guitar", "Live drums"],
                themes: "Storytelling, small-town life, romance, heartbreak, nature, faith",
            },
            industryHub: "Nashville, Tennessee — the center of country music's label, publishing, and session musician ecosystem",
            nashvilleNumeralSystem: "Country/Nashville songwriters use the Nashville Number System (numbers instead of chord names) for chart notation during session work",
        },

        jazz: {
            theory: {
                importance: "Jazz requires the deepest music theory knowledge of any commercial genre",
                coreElements: ["ii-V-I progressions", "Extended chords (9ths, 11ths, 13ths)", "Modes and modal harmony", "Improvisation over chord changes", "Swing and jazz feel (triplet-based groove)", "Bebop scales"],
            },
            royalties: "Jazz performance royalties are particularly important — live performance, radio, and club play generate significant PRO income",
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 11: EMERGING TRENDS & AI IN MUSIC (2025)
    // ──────────────────────────────────────────────────────────
    emergingTrends: {
        aiInMusic: {
            overview: "AI is transforming every aspect of music creation, distribution, and discovery at unprecedented speed in 2024–2025",

            aiProductionTools: [
                { name: "Suno AI", description: "Generate full songs with vocals from text prompts", concern: "Copyright status of AI-generated music is legally unsettled" },
                { name: "Udio", description: "AI music generation tool; similar to Suno" },
                { name: "Google MusicFX", description: "Google's AI music generation tool" },
                { name: "Mubert", description: "Royalty-free AI music generation for content creators" },
                { name: "AIVA", description: "AI composition tool focused on film/game scoring" },
                { name: "Amper Music (now Shutterstock Music)", description: "AI music for video content" },
            ],

            aiMastering: [
                { name: "LANDR", description: "AI mastering integrated with distribution; industry-standard quality for most indie releases" },
                { name: "eMastered", description: "Fast, affordable AI mastering ($9/song)" },
                { name: "iZotope Ozone 11", description: "AI-assisted mastering suite within DAW; industry-used by professionals" },
                { name: "Dolby Atmos Mastering", description: "Spatial audio mastering — increasingly required for Apple Music Spatial submissions" },
            ],

            aiMixingAssistants: [
                { name: "iZotope Neutron 4", description: "AI-assisted mixing with Track Assistant" },
                { name: "Sonible smart:mix", description: "One-click AI mixing adjustments" },
                { name: "Accusonus ERA Bundle", description: "AI noise reduction, de-reverb, voice leveling" },
            ],

            stemSeparation: {
                description: "AI can now separate full mixes into individual stems (vocals, drums, bass, other)",
                tools: [
                    { name: "Spleeter (Deezer)", description: "Free open-source stem separator" },
                    { name: "LALAL.AI", description: "High-quality paid stem separation" },
                    { name: "Moises", description: "Stem separation + AI pitch/chord detection app" },
                    { name: "Logic Pro 11 Stem Splitter", description: "Built into Logic Pro — excellent quality" },
                    { name: "Ableton Live 12 AI", description: "AI tools for stem-based composition" },
                ],
                use: "Remix production, sample extraction, karaoke creation, practicing along to stems",
            },

            legalLandscape: {
                aiCopyright: "As of 2025, AI-generated music has significant legal uncertainty. US Copyright Office has stated it will not register works without human authorship. The law is rapidly evolving.",
                labelLawsuits: "Universal Music Group, Sony, and Warner filed lawsuits against Suno and Udio in 2024 for copyright infringement related to training data.",
                artistRights: "Growing movement for 'artist rights' in AI training — requiring consent and compensation for use of existing music in AI model training",
                veniceDeclaration: "Industry coalition working on frameworks for ethical AI use in music",
                recommendation: "Be transparent about AI use; ensure you own or have licenses for any training data; avoid using AI tools that were trained on copyrighted music without permission",
            },

            aiInflationProblem: "Spotify reported that AI-generated music 'bot streaming' fraud has become a significant problem — some AI companies were submitting fake streams to game the system. Spotify removed millions of AI-generated tracks in 2024 for fraud.",
        },

        spatialAudio: {
            description: "Dolby Atmos and Sony 360 Reality Audio create immersive, three-dimensional listening experiences",
            platforms: "Apple Music (all subscribers), Tidal HiFi Plus, Amazon Music HD, YouTube Music",
            impact: "Apple Music reports that songs with Spatial Audio see higher engagement. Increasingly expected for mainstream releases.",
            howToCreate: "Mix in Dolby Atmos using compatible DAW (Logic Pro 10.7+, Pro Tools, Steinberg Nuendo, Reaper with plugins). Requires Dolby Atmos rendering tools.",
            distribution: "Most major distributors now support Spatial Audio/Dolby Atmos delivery to Apple Music and other platforms",
        },

        shortFormVideo: {
            description: "TikTok, Instagram Reels, and YouTube Shorts have fundamentally changed how music is discovered and consumed",
            impact: "Songs regularly go from 0 to millions of streams based on a single viral TikTok — 'TikTok virality' is now a primary A&R signal for labels",
            strategy: "Design your music with a 'hook' moment in the first 15–30 seconds that works as a TikTok sound",
            microlensing: "TikTok in-app licensing via DistroKid or other distributors is now a significant revenue stream for songs that become viral sounds",
        },

        directToFanMonetization: {
            description: "Artists increasingly bypassing traditional intermediaries to sell directly to fans",
            tools: [
                { name: "Patreon", model: "Monthly subscription; tiers with different perks; fans pay $3–$100+/month", use: "Regular exclusive content, behind-the-scenes, early access" },
                { name: "Bandcamp", model: "Fan pays artist directly for downloads, merch, and limited editions; Bandcamp takes 10–15%", use: "Direct music sales; most artist-friendly commission rate" },
                { name: "Substack", model: "Newsletter-based subscription; 10% commission on paid subscribers", use: "Writers and musicians who want to share thoughts along with music" },
                { name: "Kickstarter/Indiegogo", model: "Crowdfunding campaigns for specific projects (albums, tours)", use: "Fund albums or tours without label/investor" },
                { name: "Discord Community", model: "Free or paid community; Discord Nitro boosters", use: "Engaged fan community; direct messaging; exclusive channels" },
            ],
        },
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 12: ISRC, ISWC, AND METADATA
    // ──────────────────────────────────────────────────────────
    metadata: {
        isrc: {
            fullName: "International Standard Recording Code",
            description: "Unique 12-character identifier for each individual recording (the master). Like a fingerprint for your specific recording.",
            format: "Country code (2) + Registrant code (3) + Year (2) + Designation (5) — e.g., US-ABC-25-12345",
            importance: "Required by all DSPs to track streams and attribute royalties to the correct recording. Without ISRC, royalties may be misattributed or lost.",
            howToGet: "Most distributors assign ISRCs automatically when you distribute. You can also register directly through USISRC.org for the US.",
            cost: "Free through distributors; $95 per block of 100 ISRCs if registering directly (RIAA/USISRC)",
            rule: "Each unique version of a song (original, acoustic, radio edit, remix) requires its own ISRC",
        },

        iswc: {
            fullName: "International Standard Musical Work Code",
            description: "Unique identifier for compositions (the underlying song — melody and lyrics). Different from ISRC which identifies recordings.",
            format: "T-XXXXXXXXX.C",
            howToGet: "Assigned by your PRO (ASCAP, BMI, SESAC) when you register your composition",
            importance: "Links compositions to recordings to ensure publishing royalties flow to the right songwriter",
        },

        upc: {
            fullName: "Universal Product Code",
            description: "Barcode identifier for the product (single, EP, or album) as a whole",
            howToGet: "Automatically assigned by your distributor when releasing an album or EP",
        },

        metadataBestPractices: [
            "Include correct ISRC on every recording before distribution",
            "Ensure songwriter credits are complete and accurate (name, percentage, IPI number)",
            "Include producer credits with IPI numbers",
            "Register every song with your PRO as early as possible",
            "Register all compositions with the MLC for US streaming mechanicals",
            "Keep a master spreadsheet of all your ISRCs, IPI numbers, and song registrations",
            "Ensure artwork meets platform specs (3000x3000px, RGB, JPG or PNG, no explicit content visible without warning)",
            "Set correct explicit/clean flag on all releases",
            "Include all featured artist names in proper release format ('Artist Name ft. Feature Name')",
            "Language metadata should be accurate for proper algorithmic targeting",
        ],
    },

    // ──────────────────────────────────────────────────────────
    // SECTION 13: QUICK REFERENCE & KEY NUMBERS
    // ──────────────────────────────────────────────────────────
    quickReference: {
        streamRatios: {
            description: "How many streams you need to earn $1 on each platform (approximate)",
            spotify: "~250–333 streams = $1",
            appleMusic: "~100–143 streams = $1",
            tidal: "~78 streams = $1",
            youtube: "~1,449 streams = $1",
            amazonMusic: "~113–250 streams = $1",
            deezer: "~156–909 streams = $1",
        },

        distributorComparison: {
            cheapestPaid: "TuneCore at $22.99/year",
            fastestDistribution: "DistroKid (often 24–72 hours)",
            bestForInfrequentReleases: "CD Baby (one-time payment; music stays up forever)",
            bestFreeOption: "RouteNote (free, 15% cut)",
            bestForElectronicMusic: "Symphonic Distribution",
            bestAllRounder: "DistroKid for volume; TuneCore for publishing needs",
        },

        royaltyChecklist: [
            "✅ Join a PRO (ASCAP or BMI for US artists)",
            "✅ Register every song with your PRO",
            "✅ Register with the MLC (themlc.com) for streaming mechanicals",
            "✅ Register with SoundExchange for digital radio royalties",
            "✅ Set up publishing admin (Songtrust, TuneCore Publishing, or CD Baby Pro)",
            "✅ Ensure distributor submits music to all platforms",
            "✅ Set up YouTube Content ID through distributor",
            "✅ Register compositions at copyright.gov if desired",
            "✅ Keep your ISRC registry organized",
            "✅ Submit setlists to PRO after live performances",
        ],

        proComparison: {
            bmi: { cost: "Free for writers, $150–$250 for publisher", size: "Largest (900k writers)", openEntry: true },
            ascap: { cost: "$50 for writers/publishers", size: "Second largest (700k writers)", openEntry: true },
            sesac: { cost: "Invite-only", size: "Smallest (30k writers)", openEntry: false },
            gmr: { cost: "Invite-only — superstars only", size: "~100 elite writers", openEntry: false },
        },
    },
};

export default musicIndustryData;