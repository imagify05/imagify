"use server";
import { auth } from "@clerk/nextjs/server";

const createUser = async () => {
  const { user_id } = await auth();
  try {
    const response = await fetch("/api/create-user", {
      method: "POST",
      body: JSON.stringify({
        user_id: user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.status, response.statusText);
    } else {
      const data = await response.json();
      console.log(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export default createUser;
