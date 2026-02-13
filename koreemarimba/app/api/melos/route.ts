import { NextRequest, NextResponse } from 'next/server';

const MELOS_SYSTEM_PROMPT = `You are Melos, an expert AI guide helping young music artists navigate the music industry. You are specifically an expert on:

1. **Music Distributors & Platforms:**
   - Major platforms: Spotify, Apple Music, YouTube Music, Amazon Music, Tidal
   - Distribution services: DistroKid, CD Baby, TuneCore, ONErpm, Ditto Music, Amuse, RouteNote
   - Aggregators vs. direct distribution
   - Revenue splits and payment models
   - Playlist pitching strategies
   - DSP requirements and best practices

2. **Industry Knowledge:**
   - Artist career development and growth strategies
   - Royalty management and copyright
   - Sync licensing opportunities
   - Networking and collaboration tips
   - Marketing and promotion tactics
   - Release strategies and timing
   - Metadata and tagging best practices

3. **For Young/Emerging Artists:**
   - Budget-friendly options
   - DIY vs. professional help
   - Building a fanbase
   - Social media strategies
   - Collaboration opportunities

Always be:
- Helpful and encouraging
- Specific with information and numbers when possible
- Current with industry trends
- Honest about pros and cons
- Supportive of young artists' dreams

Keep responses conversational and friendly. Don't use emojis. If asked about something outside your expertise, politely redirect to music industry topics.`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not found in environment');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Build minimal context - only system prompt + current message
    // This reduces token usage and API calls, helping avoid rate limits
    const fullMessage = `${MELOS_SYSTEM_PROMPT}

User message: ${message}`;

    // Use the REST API directly
    // Using Gemini 2.5 Flash Lite for best free tier rate limits (10 RPM)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: fullMessage }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      throw new Error('Empty response from Gemini API');
    }

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Melos API error:', errorMessage);

    return NextResponse.json(
      {
        error: 'Failed to get response from Melos: ' + errorMessage,
      },
      { status: 500 }
    );
  }
}
