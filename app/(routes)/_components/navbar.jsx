"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { CreditContext } from "@/utils/context/credit-context";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const value = useContext(CreditContext);

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

  useEffect(() => {
    user?.id && value.fetchCredits();
  }, [user?.id]);

  return (
    <header className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center gap-x-4">
      <Link href="/" className="flex justify-center gap-x-2 items-center">
        <Image src="/logo.svg" height={31} width={31} alt="logo-image" />
        <p className="font-semibold text-[30px] max-sm:hidden">Imagify</p>
      </Link>
      <div className="flex justify-center gap-x-4 items-center">
        {isSignedIn && (
          <div className="flex justify-center gap-x-2 px-5 py-3 items-center rounded-full bg-[#d7ebff]">
            <Image src="/group.svg" alt="star icon" height={23} width={23} />
            <p className="text-[15px] leading-[28px] text-[#4a4a4a]">
              {value.isLoading
                ? "Loading..."
                : `Credits left: ${value.credits}`}
            </p>
          </div>
        )}
        <div>
          {isSignedIn ? (
            <div className="flex justify-center items-center gap-x-3">
              <p className="text-[#4a4a4a] text-[15px] font-normal max-sm:hidden">
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
