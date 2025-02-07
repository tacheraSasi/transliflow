import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return NextResponse.json({ error: 'Missing OpenAI API Key' }, { status: 500 });
    }

    const { text, from, to } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that translates text from ${from} to ${to}. 
            !IMPORTANT only return back the translated text and nothing more.
            `
          },
          {
            role: "user",
            content: `Translate the following text: "${text}"`
          }
        ]
      })
    });

    const data = await response.json();
    const translatedText = data.choices?.[0]?.message?.content || "Translation failed.";

    return NextResponse.json({ translatedText });
  } catch (error) {
    return NextResponse.json({ error: 'Translation request failed' }, { status: 500 });
  }
}
