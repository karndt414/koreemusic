import { GoogleGenerativeAI } from '@google/generative-ai';
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

Keep responses conversational and friendly. Use music-related emojis when appropriate. If asked about something outside your expertise, politely redirect to music industry topics.`;

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
        { error: 'API key not configured. Please set GEMINI_API_KEY in .env.local' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build the full message with system prompt and history
    const historyText = conversationHistory
      .slice(-4) // Last 4 messages for context
      .map((msg: { role: string; content: string }) => `${msg.role === 'user' ? 'User' : 'Melos'}: ${msg.content}`)
      .join('\n\n');

    const fullMessage = `${MELOS_SYSTEM_PROMPT}

${historyText ? 'Previous conversation:\n' + historyText + '\n\n' : ''}Current user message: ${message}`;

    const response = await model.generateContent(fullMessage);
    const reply = response.response.text();

    if (!reply) {
      throw new Error('Empty response from Gemini API');
    }

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Melos API error:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Failed to get response from Melos: ' + errorMessage
      },
      { status: 500 }
    );
  }
}
