"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const [credits, setCredits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCredits = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/fetch-credits", {
        method: "POST",
        body: JSON.stringify({
          user_id: user?.id || "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText, response.status);
      }
      const data = await response.json();
      setCredits(data.credits);
    } catch (error) {
      console.error(error);
      toast.error("Error to fetch credits");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    user?.id && fetchCredits();
  }, [user?.id]);

  return (
    <header className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center gap-x-4">
      <div className="flex justify-center gap-x-2 items-center">
        <Image src="/logo.svg" height={31} width={31} alt="logo-image" />
        <p className="font-semibold text-[30px] max-sm:hidden">Imagify</p>
      </div>
      <div className="flex justify-center gap-x-4 items-center">
        {isSignedIn && (
          <div className="flex justify-center gap-x-2 px-5 py-3 items-center rounded-full bg-[#d7ebff]">
            <Image src="/group.svg" alt="star icon" height={23} width={23} />
            <p className="text-[15px] leading-[28px] text-[#4a4a4a]">
              {isLoading ? "Loading..." : `Credits left: ${credits}`}
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
