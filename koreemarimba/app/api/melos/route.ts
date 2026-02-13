import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

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

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build conversation history for context
    const conversationContext = conversationHistory
      .map((msg: { role: string; content: string }) => {
        const role = msg.role === 'user' ? 'user' : 'model';
        return { role, parts: [{ text: msg.content }] };
      })
      .slice(-8); // Keep last 8 messages for context

    const chat = model.startChat({
      history: conversationContext,
      systemInstruction: MELOS_SYSTEM_PROMPT,
    });

    const response = await chat.sendMessage(message);
    const reply = response.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Melos API error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from Melos' },
      { status: 500 }
    );
  }
}
