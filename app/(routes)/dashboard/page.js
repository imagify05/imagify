"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/loading";
import Image from "next/image";
import { Download } from "lucide-react";
import { CreditContext } from "@/utils/context/credit-context";
import Link from "next/link";

export default function Dashboard() {
  const {
    fetchCredits,
    credits,
    isLoading: creditsLoading,
  } = useContext(CreditContext);
  const { user } = useUser();
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  const fetchImage = async () => {
    try {
      if (!prompt) {
        toast.error("Enter a prompt first!");
        return;
      }
      setIsLoading(true);
      const response = await fetch("/api/generate-image", {
        method: "POST",
        body: JSON.stringify({
          user_id: user?.id,
          prompt: prompt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(response.status, response.statusText);
      }
      const data = await response.json();
      const imageUrl = `data:image/png;base64,${data.message}`;
      setImage(imageUrl);
      fetchCredits();
      setPrompt("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate image");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (imageData) => {
    const imageUrl = imageData;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="p-4">
      {image ? (
        <div className="my-16 max-w-xl mx-auto flex flex-col justify-center items-center">
          <Image
            height={400}
            width={400}
            className="object-contain object-center rounded-lg"
            alt="Generated Image"
            src={image}
          />
          <div className="flex gap-x-6 justify-center items-center my-5">
            <Button
              className="flex items-center justify-center gap-x-2"
              onClick={() => handleDownload(image)}
            >
              Download <Download />
            </Button>
            <Button
              className="flex items-center justify-center gap-x-2"
              variant="outline"
              onClick={() => setImage("")}
            >
              Create More 😊
            </Button>
          </div>
        </div>
      ) : creditsLoading ? (
        <div className="my-28 flex flex-col max-w-3xl mx-auto gap-y-6">
          <p className="text-center text-2xl sm:text-3xl font-[600] text-[#007aff]">
            Loading credits...
          </p>
        </div>
      ) : credits === null ? (
        <div className="my-28 flex flex-col max-w-3xl mx-auto gap-y-6">
          <p className="text-center text-2xl sm:text-3xl font-[600] text-[#007aff]">
            Maintenance is going on
          </p>
        </div>
      ) : credits === 0 ? (
        <div className="my-28 flex flex-col max-w-3xl mx-auto gap-y-6">
          <p className="text-center text-2xl sm:text-3xl font-[600] text-[#007aff]">
            Ooops! Looks like you have finished your credits 🥲
          </p>
          <Link
            href="/pricing"
            className="w-full flex justify-center items-center"
          >
            <Button variant="outline">Buy More 😁</Button>
          </Link>
        </div>
      ) : (
        <form
          className="my-28 max-w-xl mx-auto flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            fetchImage();
          }}
        >
          <Textarea
            className="w-full p-4"
            placeholder="Describe what you want to generate..."
            value={prompt}
            disabled={isLoading || creditsLoading || credits === "waiting"}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            className="w-[239px] h-[55px] rounded-[50px] my-5"
            disabled={isLoading || creditsLoading || credits === "waiting"}
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-x-2">
                <Loading />
                <span>Generating with AI...</span>
              </div>
            ) : (
              "Generate Image ✨"
            )}
          </Button>
        </form>
      )}
    </section>
  );
}
