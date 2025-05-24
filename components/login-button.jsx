"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function LoginButton() {
  const { isSignedIn, user } = useUser();

  const createUser = async (userId) => {
    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
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

  useEffect(() => {
    user?.id && createUser(user?.id);
  }, [user?.id]);

  return (
    <div>
      {isSignedIn ? (
        <div className="flex justify-center items-center gap-x-3">
          <p className="text-[#4a4a4a] text-[15px] font-normal">
            Hi! {user?.firstName}
          </p>
          <UserButton />
        </div>
      ) : (
        <Link href="/sign-in">
          <Button className="sm:w-[146px] sm:h-[42px] rounded-[50px] max-sm:px-5 max-sm:py-1">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
}
