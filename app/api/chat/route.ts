import { NextResponse } from "next/server";

const CHAT_ENDPOINT =
  process.env.N8N_CHAT_URL ??
  process.env.NEXT_PUBLIC_N8N_CHAT_URL ??
  "https://n8n.srv1091639.hstgr.cloud/webhook/8f61c22c-0a61-4153-99e6-8f11c336c70d/chat";
  
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const requestUrl = new URL(request.url);
    const action = requestUrl.searchParams.get("action") ?? "sendMessage";

    const targetUrl = new URL(CHAT_ENDPOINT);
    targetUrl.searchParams.set("action", action);

    const response = await fetch(targetUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // ensure server-to-server call isn't blocked by CORS
      cache: "no-store",
    });

    if (!response.ok || !response.body) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: "Chat request failed",
          details: errorText,
        },
        { status: response.status },
      );
    }

    if (action === "sendMessage") {
      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type":
            response.headers.get("Content-Type") ??
            "application/json; charset=utf-8",
          "Cache-Control": "no-cache",
        },
      });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[api/chat] error", error);
    return NextResponse.json(
      {
        error: "Unable to reach AI assistant.",
      },
      { status: 500 },
    );
  }
}

// import { openai } from "@ai-sdk/openai";
// import { streamText } from "ai";

// export async function POST(req: Request) {
//   const { messages } = await req.json();

//   const result = streamText({
//     model: openai.responses("gpt-4o"),
//     messages,
//     tools: {
//       web_search_preview: openai.tools.webSearchPreview(),
//     },
//   });

//   return result.toDataStreamResponse();
// }
