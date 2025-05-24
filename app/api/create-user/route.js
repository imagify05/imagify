import { NextResponse } from "next/server";
import connectToDb from "@/db/mongodb";
import userModel from "@/models/user.model";

export async function POST(request) {
  const { user_id } = await request.json();
  if (!user_id) {
    return NextResponse.json(
      {
        message: "user_id is not sent",
      },
      { status: 400 }
    );
  } else {
    try {
      await connectToDb();
      const result = await userModel.findOne({
        user_id: user_id,
      });
      if (result) {
        return NextResponse.json(
          {
            message: "user is already present with this user_id",
          },
          { status: 200 }
        );
      } else {
        await userModel.create({
          user_id: user_id,
        });
        return NextResponse.json(
          {
            message: "user created successfully",
          },
          { status: 201 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        {
          message: `internal server error: ${error}`,
        },
        { status: 500 }
      );
    }
  }
}
