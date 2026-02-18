import { NextRequest, NextResponse } from 'next/server';
import { searchMusicData } from '@/lib/ragSearch';
import { searchFAQCache } from '@/lib/faqCache';

const MELOS_SYSTEM_PROMPT = `You are Melos, an expert AI guide helping young music artists navigate the music industry. You are specifically an expert on music distributors, streaming platforms, royalties, copyright, and artist development.

Always be:
- Helpful and encouraging
- Specific with information and numbers when possible
- Honest about pros and cons
- Supportive of young artists' dreams

Keep responses conversational and friendly. Don't use emojis. If asked about something outside your expertise, politely redirect to music industry topics.`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // 🎯 STEP 1: Check FAQ Cache First (saves neurons!)
    // const faqResponse = searchFAQCache(message);
    //if (faqResponse) {
      //console.log('✅ FAQ Cache Hit - No neurons used');
      //return NextResponse.json({ reply: faqResponse, cached: true });
    //}

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;
    if (!accountId || !apiToken) {
      console.error('Cloudflare credentials not found in environment');
      return NextResponse.json(
        { error: 'API not configured' },
        { status: 500 }
      );
    }

    // ✅ STEP 2: RETRIEVE - Search knowledge base for relevant data
    const retrievedData = searchMusicData(message);

    // ✅ STEP 3: AUGMENT - Add retrieved data to system prompt
    const augmentedSystemPrompt = retrievedData
      ? `${MELOS_SYSTEM_PROMPT}\n\nRELEVANT INFORMATION FROM KNOWLEDGE BASE:\n${retrievedData}`
      : MELOS_SYSTEM_PROMPT;

    // ✅ STEP 4: GENERATE - Call AI with augmented context
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: augmentedSystemPrompt },
            { role: 'user', content: message },
          ],
          max_tokens: 512,  // ← Optimized from 1024 (50% reduction!)
          temperature: 0.6, // ← Slightly lower for more consistent answers
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const reply = data.result?.response;

    if (!reply) {
      throw new Error('Empty response from Cloudflare Workers AI');
    }

    return NextResponse.json({ reply, cached: false });
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
