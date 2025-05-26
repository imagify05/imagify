import connectToDb from "@/db/mongodb";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  const { user_id, plan } = await request.json();
  if (!user_id || !plan) {
    return NextResponse.json(
      {
        message: "incomplete fields",
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
    if (plan === "Basic") {
      await userModel.updateOne(
        { user_id: user_id },
        { $set: { token: user.token + 100 } }
      );
      return NextResponse.json(
        {
          message: "updated credits",
        },
        { status: 200 }
      );
    } else if (plan === "Advanced") {
      await userModel.updateOne(
        { user_id: user_id },
        { $set: { token: user.token + 500 } }
      );
      return NextResponse.json(
        {
          message: "updated credits",
        },
        { status: 200 }
      );
    } else if (plan === "Enterprise") {
      await userModel.updateOne(
        { user_id: user_id },
        { $set: { token: user.token + 5000 } }
      );
      return NextResponse.json(
        {
          message: "updated credits",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "invalid plan",
        },
        { status: 403 }
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
