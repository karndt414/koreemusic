import { NextResponse } from 'next/server';

export async function GET() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  
  if (!accountId || !apiToken) {
    return NextResponse.json({
      status: 'error',
      message: 'Cloudflare credentials not set in environment',
    });
  }

  try {
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
            { role: 'user', content: 'Say "Melos API is working!" in exactly those words' },
          ],
          max_tokens: 4096,
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        status: 'error',
        message: 'API call failed',
        error: data.errors || JSON.stringify(data),
      }, { status: 500 });
    }

    const reply = data.result?.response;

    return NextResponse.json({
      status: 'success',
      message: 'Cloudflare Workers AI is working',
      model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      modelResponse: reply,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      status: 'error',
      message: 'API test failed',
      error: errorMessage,
    }, { status: 500 });
  }
}

