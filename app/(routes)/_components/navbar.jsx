"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  return (
    <header className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center gap-x-4">
      <div className="flex justify-center gap-x-2 items-center">
        <Image src="/logo.svg" height={31} width={31} alt="logo-image" />
        <p className="font-semibold text-[30px] max-sm:hidden">Imagify</p>
      </div>
      <div className="flex justify-center gap-x-4 items-center">
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
      </div>
    </header>
  );
}
