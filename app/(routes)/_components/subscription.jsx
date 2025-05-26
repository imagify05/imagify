"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Subscription({ plan }) {
  const { user } = useUser();
  const router = useRouter();

  const updateCredits = async () => {
    try {
      const response = await fetch("/api/update-credits", {
        method: "PATCH",
        body: JSON.stringify({
          user_id: user?.id,
          plan: plan,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.status, response.statusText);
      }
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update credits");
    }
  };

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
