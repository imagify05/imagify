"use client";
import { useUser } from "@clerk/nextjs";
import { createContext, useState } from "react";

export const CreditContext = createContext();

export default function CreditProvider({ children }) {
  const { user } = useUser();
  const [credits, setCredits] = useState("waiting");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCredits = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/fetch-credits", {
        method: "POST",
        body: JSON.stringify({
          user_id: user?.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
      }
      const data = await response.json();
      setCredits(data.credits);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CreditContext.Provider
      value={{ fetchCredits, isLoading, credits, setCredits }}
    >
      {children}
    </CreditContext.Provider>
  );
}
