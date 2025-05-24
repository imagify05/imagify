import Link from "next/link";
import Image from "next/image";
import LoginButton from "@/components/login-button";
import { Button } from "@/components/ui/button";

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
      <div className="my-10 max-w-7xl mx-auto p-4">
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
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="max-w-[545px] mx-auto flex justify-center items-center flex-wrap gap-4">
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
      </div>
    </section>
  );
}
