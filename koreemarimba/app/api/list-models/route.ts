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
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
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

    // Filter for models that support generateContent
    const generateContentModels = data.models
      .filter((model: any) => model.supportedGenerationMethods?.includes('generateContent'))
      .map((model: any) => ({
        name: model.name,
        displayName: model.displayName,
        inputTokenLimit: model.inputTokenLimit,
        outputTokenLimit: model.outputTokenLimit,
      }));

    return NextResponse.json({
      status: 'success',
      message: 'Available models for generateContent',
      modelCount: generateContentModels.length,
      models: generateContentModels,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to list models',
      error: errorMessage,
    }, { status: 500 });
  }
}
