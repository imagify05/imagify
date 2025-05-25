import connectToDb from "@/db/mongodb";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { user_id } = await request.json();
  if (!user_id) {
    return NextResponse.json(
      {
        message: "user_id is not present",
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
    } else {
      const result = user.token;
      return NextResponse.json(
        {
          credits: result,
        },
        { status: 200 }
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
