import Image from "next/image";

export default function FAQ() {
  return (
    <article className="w-full flex flex-col gap-6 p-4 items-center justify-center">
      <div className="max-w-[800px] w-full px-7 pt-4 pb-7 flex justify-start items-center gap-x-4 border border-[#e1e1e1] rounded-[8px] shadow-[0px_4px_15px_0px_#0000000D]">
        <Image src="/icon1.svg" alt="icon" height={45} width={45} />
        <div className="flex flex-col justify-center">
          <h3 className="text-[20px]">Describe Your Vision</h3>
          <p className="text-[15px] text-[#7c7c7c]">
            "Type a phrase, sentence, or paragraph that describes the image you
            want to create."
          </p>
        </div>
      </div>
      <div className="max-w-[800px] w-full px-7 pt-4 pb-7 flex justify-start items-center gap-x-4 border border-[#e1e1e1] rounded-[8px] shadow-[0px_4px_15px_0px_#0000000D]">
        <Image src="/icon2.svg" alt="icon" height={45} width={45} />
        <div className="flex flex-col justify-center">
          <h3 className="text-[20px]">Watch the Magic</h3>
          <p className="text-[15px] text-[#7c7c7c]">
            "Our AI-powered engine will transform your text into a high-quality,
            unique image in seconds."
          </p>
        </div>
      </div>
      <div className="max-w-[800px] w-full px-7 pt-4 pb-7 flex justify-start items-center gap-x-4 border border-[#e1e1e1] rounded-[8px] shadow-[0px_4px_15px_0px_#0000000D]">
        <Image src="/icon3.svg" alt="icon" height={45} width={45} />
        <div className="flex flex-col justify-center">
          <h3 className="text-[20px]">Download & Share</h3>
          <p className="text-[15px] text-[#7c7c7c]">
            "Instantly download your creation or share it with the world
            directly from our platform."
          </p>
        </div>
      </div>
    </article>
  );
}
