import { NextResponse } from "next/server";
import { main } from "@/utils/google/ai-image-generation";

export async function POST(request) {
  const { prompt } = await request.json();
  if (!prompt) {
    return NextResponse.json(
      {
        message: "prompt is not available",
      },
      { status: 400 }
    );
  } else {
    try {
      const result = await main(prompt);
      if (!result) {
        return NextResponse.json(
          {
            message: "unable to generate image",
          },
          { status: 500 }
        );
      } else {
        return NextResponse.json(
          {
            message: result,
          },
          { status: 201 }
        );
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
          message: `internal server error, error: ${error}`,
        },
        { status: 500 }
      );
    }
  }
}
