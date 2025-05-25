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

export default function Dashboard() {
  const { fetchCredits } = useContext(CreditContext);
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
            className="object-contain object-center"
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
      ) : (
        <form
          className="my-15 sm:my-32 max-w-xl mx-auto flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            fetchImage();
          }}
        >
          <Textarea
            className="w-full p-4"
            placeholder="Describe what you want to generate..."
            value={prompt}
            disabled={isLoading}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            className="w-[239px] h-[55px] rounded-[50px] my-5"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-x-2">
                <Loading fill="white" text="black" />
                <span>Generating with AI...</span>
              </div>
            ) : (
              "Generate Images ✨"
            )}
          </Button>
        </form>
      )}
    </section>
  );
}
