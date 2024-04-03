// vercel ai sdk
import { errResp } from "@/lib/network";
import { NextResponse } from "next/server";

import OpenAI from "openai";

// Set the runtime to edge for best performance
export const runtime = "edge";

const openai = new OpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { lyrics, style, title } = await req.json();
  if (!lyrics) {
    errResp("No lyrics", 400);
  }

  // Ask OpenAI for a streaming chat completion given the prompt
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "Your name is Suno ai - /chirp - Music Prompt maker.Your task is to create song text in English or Norwegian for Suno.ai. First, you need to determine the Style of Music. Based on the genre rules, decide which sections to include in the song. Format the song with each line on its own line, adding an extra blank line between sections for clarity. Use [Intro], [Verse], [Bridge], and [Chorus] tags as appropriate for the genre and structure of the song. Include words for backup vocals or choirs by putting them in parentheses, without using specific examples.",
        },
        {
          role: "system",
          content:
            "Change the following content to english song, set lyrics style and title the best you can",
        },
        {
          role: "user",
          content: `## lyrics style ${lyrics} ## style ${style} ## title ${title}`,
        },
        {
          role: "user",
          content: `return lyrics , style and title json object, set lyrics value are markdown`,
        },
      ],
    });
    const respText = completion.choices[0].message.content;

    // return;
    return NextResponse.json({ data: respText }, { status: 200 });
  } catch (err) {
    console.log(err);
    return errResp("chat openai error", 500);
  }
}
