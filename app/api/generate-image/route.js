import { NextResponse } from "next/server";
import connectToDb from "@/db/mongodb";
import { main } from "@/utils/google/ai-image-generation";
import userModel from "@/models/user.model";

export async function POST(request) {
  const { user_id, prompt } = await request.json();
  if (!user_id || !prompt) {
    return NextResponse.json(
      {
        message: "fields are incomplete",
      },
      { status: 400 }
    );
  }
  try {
    await connectToDb();
    const user = await userModel.findOne({ user_id: user_id });
    if (!user) {
      return NextResponse.json(
        {
          message: "user not found",
        },
        { status: 403 }
      );
    }
    if (user.token <= 0) {
      return NextResponse.json(
        {
          message: "free tier has been ended",
        },
        { status: 402 }
      );
    }
    const result = await main(prompt);
    if (!result) {
      return NextResponse.json(
        {
          message: "unable to generate image",
        },
        { status: 500 }
      );
    }
    await userModel.updateOne(
      { user_id: user_id },
      { $set: { token: user.token - 1 } }
    );
    return NextResponse.json(
      {
        message: result,
      },
      { status: 201 }
    );
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
