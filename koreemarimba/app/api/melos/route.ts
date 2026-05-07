import { NextRequest, NextResponse } from 'next/server';
import { searchMusicData } from '@/lib/ragSearch';
import { searchFAQCache } from '@/lib/faqCache';
import { supabase } from '@/lib/supabaseClient';
import { getMidiSystemPromptAddition } from '@/app/midi/midiAiContext';

const BASE_MELOS_SYSTEM_PROMPT = `You are Melos, an expert AI guide helping young music artists navigate the music industry. You are specifically an expert on music distributors, streaming platforms, royalties, copyright, and artist development.

Always be:
- Helpful and encouraging
- Specific with information and numbers when possible
- Honest about pros and cons
- Supportive of young artists' dreams

Keep responses conversational and friendly. Don't use emojis.

If the user's message contains a [MIDI FILE ANALYSIS] or [LIVE MIDI INPUT] block, prioritize musical interpretation of that MIDI data even if it is outside music-industry career topics. In that case, do not redirect away from the MIDI analysis.`;

const MELOS_SYSTEM_PROMPT = `${BASE_MELOS_SYSTEM_PROMPT}\n\n${getMidiSystemPromptAddition()}`;

const PRIMARY_MODEL = process.env.MISTRAL_MODEL || 'mistral-small-latest';
const RETRY_DELAYS_MS = [300, 800, 1500];

type AIResult = {
  reply: string;
  model: string;
};

function isRateLimitStatus(status: number) {
  return status === 429;
}

function isRetryableStatus(status: number) {
  return status >= 500 || isRateLimitStatus(status);
}

async function callMistral(
  model: string,
  apiToken: string,
  body: object
): Promise<AIResult> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    const response = await fetch(
      'https://api.mistral.ai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message = `API error (${model}): ${JSON.stringify(errorData)}`;
      lastError = new Error(message);

      if (isRetryableStatus(response.status) && attempt < RETRY_DELAYS_MS.length) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAYS_MS[attempt]));
        continue;
      }
      throw lastError;
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      throw new Error(`Empty response from Mistral (${model})`);
    }

    return { reply, model };
  }

  throw lastError || new Error('Unknown AI error');
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Get user's IP and user agent for tracking
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const hasMidiBlock = message.includes('[MIDI FILE ANALYSIS]') || message.includes('[LIVE MIDI INPUT]');

    // 🎯 STEP 1: Check FAQ Cache First (saves neurons!)
    const faqResponse = hasMidiBlock ? null : searchFAQCache(message);
    if (faqResponse) {
      const responseTime = Date.now() - startTime;
      
      // Log to Supabase
      const { error: faqLogError } = await supabase.from('melos_prompts').insert({
        user_message: message,
        ai_response: faqResponse,
        from_faq_cache: true,
        tokens_used: 0,
        response_time_ms: responseTime,
        ip_address: ip,
        user_agent: userAgent,
      });
      if (faqLogError) console.error('Supabase log error:', faqLogError);

      console.log('✅ FAQ Cache Hit - No neurons used');
      return NextResponse.json({ reply: faqResponse, cached: true });
    }

    const apiToken = process.env.MISTRAL_API_KEY;
    if (!apiToken) {
      console.error('Mistral API key not found in environment');
      return NextResponse.json(
        { error: 'API not configured' },
        { status: 500 }
      );
    }

    // ✅ STEP 2: RETRIEVE - Search knowledge base for relevant data
    const retrievedData = hasMidiBlock ? null : searchMusicData(message);

    // ✅ STEP 3: AUGMENT - Add retrieved data to system prompt
    const augmentedSystemPrompt = retrievedData
      ? `${MELOS_SYSTEM_PROMPT}\n\nRELEVANT INFORMATION FROM KNOWLEDGE BASE:\n${retrievedData}`
      : MELOS_SYSTEM_PROMPT;

    const historyMessages = Array.isArray(conversationHistory)
      ? conversationHistory
          .filter((entry: { role?: string; text?: string }) =>
            entry && (entry.role === 'user' || entry.role === 'bot') && typeof entry.text === 'string'
          )
          .slice(-12)
          .map((entry: { role: 'user' | 'bot'; text: string }) => ({
            role: entry.role === 'bot' ? 'assistant' : 'user',
            content: entry.text,
          }))
      : [];

    // ✅ STEP 4: GENERATE - Call AI with augmented context
    const body = {
      model: PRIMARY_MODEL,
      messages: [
        { role: 'system', content: augmentedSystemPrompt },
        ...historyMessages,
        { role: 'user', content: message },
      ],
      max_tokens: 512,
      temperature: 0.6,
    };

    const aiResult = await callMistral(PRIMARY_MODEL, apiToken, body);

    const reply = aiResult.reply;

    const responseTime = Date.now() - startTime;
    const tokensUsed = Math.ceil(message.length / 4) + Math.ceil(reply.length / 4); // Rough estimate

    // 📊 Log to Supabase
    const { error: logError } = await supabase.from('melos_prompts').insert({
      user_message: message,
      ai_response: reply,
      from_faq_cache: false,
      tokens_used: tokensUsed,
      response_time_ms: responseTime,
      ip_address: ip,
      user_agent: userAgent,
    });
    if (logError) console.error('Supabase log error:', logError);

    return NextResponse.json({ reply, cached: false });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Melos API error:', errorMessage);

    const friendlyMessage = errorMessage.includes('429')
      ? 'Rate limit hit. Please try again in a minute.'
      : `Failed to get response from Melos: ${errorMessage}`;

    return NextResponse.json(
      {
        error: friendlyMessage,
      },
      { status: 500 }
    );
  }
}
