import Link from "next/link";
import Image from "next/image";
import LoginButton from "@/components/login-button";

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
    </section>
  );
}
