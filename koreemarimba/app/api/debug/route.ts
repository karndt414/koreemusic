import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({
      status: 'error',
      message: 'GEMINI_API_KEY not set in environment',
    });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: 'Say "Melos API is working!" in exactly those words' }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        status: 'error',
        message: 'API call failed',
        error: data.error?.message || JSON.stringify(data),
      }, { status: 500 });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json({
      status: 'success',
      message: 'API key is valid and working',
      apiKeyPreview: apiKey.substring(0, 10) + '...',
      modelResponse: reply,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      status: 'error',
      message: 'API key test failed',
      error: errorMessage,
    }, { status: 500 });
  }
}

