"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Subscription({ plan }) {
  const { user } = useUser();
  const router = useRouter();
  if (!user) {
    router.push("/sign-in");
  }
  return (
    <div className="w-full">
      <Button className="w-full">Get Started</Button>
    </div>
  );
}
