import Link from "next/link";
import Image from "next/image";
import LoginButton from "@/components/login-button";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <section className="w-full h-full">
      <header className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center gap-x-4">
        <div className="flex justify-center gap-x-2 items-center">
          <Image src="/logo.svg" height={31} width={31} alt="logo-image" />
          <p className="font-semibold text-[30px] max-sm:hidden">Imagify</p>
        </div>
        <div className="flex justify-center gap-x-4 items-center">
          <Link
            href="/pricing"
            className="font-normal text-[15px] text-[#545454]"
          >
            Pricing
          </Link>
          <LoginButton />
        </div>
      </header>
      <section className="my-10 max-w-7xl mx-auto p-4">
        <div className="px-5 py-2 bg-white max-w-[273px] mx-auto rounded-[50px] flex justify-center items-center border-[0.3px] border-gray-300 animate-bounce">
          <p className="text-[15px] text-[#696969]">
            Best text to image generator 💫
          </p>
        </div>
        <p className="my-7 text-[80px] max-sm:text-[40px] text-center leading-[80px] max-sm:leading-[40px]">
          Turn text to <br /> <span className="text-[#007aff]">image</span>, in
          seconds
        </p>
        <p className="my-5 text-center max-sm:text-sm text-[18px] text-[#545454] max-w-[576px] mx-auto">
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds - just type, and watch the magic happen.
        </p>
        <Link
          href="/dashboard"
          className="w-full flex justify-center items-center my-5"
        >
          <Button className="w-[239px] h-[55px] rounded-[50px]">
            Generate Images ✨
          </Button>
        </Link>
      </section>
      <section className="max-w-7xl mx-auto my-10 p-4">
        <div className="max-w-[560px] mx-auto flex justify-center items-center flex-wrap gap-4">
          <Image
            src="/img1.svg"
            height={78}
            width={78}
            alt="previously generated images"
            className="rounded-[6px]"
          />
          <Image
            src="/img2.svg"
            height={78}
            width={78}
            alt="previously generated images"
            className="rounded-[6px]"
          />
          <Image
            src="/img1.svg"
            height={78}
            width={78}
            alt="previously generated images"
            className="rounded-[6px]"
          />
          <Image
            src="/img2.svg"
            height={78}
            width={78}
            alt="previously generated images"
            className="rounded-[6px]"
          />
          <Image
            src="/img1.svg"
            height={78}
            width={78}
            alt="previously generated images"
            className="rounded-[6px]"
          />
          <Image
            src="/img2.svg"
            height={78}
            width={78}
            alt="previously generated images"
            className="rounded-[6px]"
          />
        </div>
        <p className="my-3 text-[15px] text-[#545454] text-center">
          Generated images from imagify
        </p>
      </section>
      <section className="my-10 mt-20 mb-15 max-w-7xl mx-auto">
        <h2 className="text-center font-[500] text-[40px] max-sm:text-[20px] leading-[80px] max-sm:leading-[40px]">
          How it works
        </h2>
        <p className="text-center text-[#797484]">
          Transform Words Into Stunning Images
        </p>
      </section>
      <section className="my-5 sm:my-10 max-w-7xl mx-auto">
        <FAQ />
      </section>
      <section className="max-w-7xl mx-auto my-10 p-4">
        <h2 className="text-center font-[500] text-[40px] max-sm:text-[20px] leading-[80px] max-sm:leading-[40px]">
          Create AI Images
        </h2>
        <p className="text-center text-[#797484]">
          Turn your imagination into visuals
        </p>
        <div className="flex flex-col sm:flex-row my-5 sm:my-20 gap-6 sm:gap-x-10 justify-center items-center">
          <Image
            src="/banner.svg"
            height={393}
            width={393}
            alt="banner photo"
            className="rounded-[6px]"
          />
          <div className="flex flex-col gap-y-6">
            <h3 className="font-[500] text-[28px] leading-[38px] text-center sm:text-start">
              Introducing the AI-Powered Text to <br /> Image Generator
            </h3>
            <p className="leading-[22px] text-[#797484] max-w-[550px]">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly.
            </p>
            <p className="leading-[22px] text-[#797484] max-w-[550px]">
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds. From product visuals to
              character designs and portraits, even concepts that don’t yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
