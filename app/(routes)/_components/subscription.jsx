"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Subscription({ plan, price }) {
  const { user } = useUser();
  const router = useRouter();
  const amount = price;
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch("/api/create-order", { method: "POST" });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: user?.fullName,
        description: "Order Creation",
        order_id: data.orderId,
        handler: updateCredits,
        prefill: {
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        },
        theme: {
          color: "#3399c",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Button
        className="w-full"
        disabled={isProcessing}
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
