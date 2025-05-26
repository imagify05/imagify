"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Subscription({ plan }) {
  const { user } = useUser();
  const router = useRouter();

  const handlePayment = () => {
    console.log("paid");
  };

  return (
    <div className="w-full">
      <Button
        className="w-full"
        onClick={() => {
          if (!user) {
            router.push("/sign-in");
          } else {
            handlePayment();
          }
        }}
      >
        Pay Now
      </Button>
    </div>
  );
}
