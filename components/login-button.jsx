"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

export default function LoginButton() {
  const { isSignedIn, user } = useUser();
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
