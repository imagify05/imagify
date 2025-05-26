import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Subscription from "./subscription";

const pricingData = [
  {
    id: uuidv4(),
    plan: "Basic",
    description: "Best for personal use",
    price: 10,
    credits: 100,
  },
  {
    id: uuidv4(),
    plan: "Advanced",
    description: "Best for business use",
    price: 50,
    credits: 500,
  },
  {
    id: uuidv4(),
    plan: "Enterprise",
    description: "Best for enterprise use",
    price: 250,
    credits: 5000,
  },
];

export default function PricingCard() {
  return (
    <div className="my-5 flex flex-wrap gap-6 justify-center items-center">
      {pricingData.map((item) => (
        <div
          className="p-5 bg-white flex flex-col gap-y-7 border rounded-[10px] w-[333px]"
          key={item.id}
        >
          <div className="w-full flex justify-start">
            <Image src="/logo.svg" height={31} width={31} alt="logo image" />
          </div>
          <div className="space-y-2">
            <p className="text-[20px] font-[500] text-[#515151] leading-[28px]">
              {item.plan}
            </p>
            <span className="text-[15px] text-[#515151]">
              {item.description}
            </span>
          </div>
          <div className="flex gap-x-1.5 items-center">
            <span className="text-[34px] leading-[28px] font-[500] text-[#515151]">
              &#8377;{item.price}
            </span>
            <span className="text-[15px] leading-[28px] text-[#515151]">
              /{item.credits} credits
            </span>
          </div>
          <Subscription plan={item.plan} />
        </div>
      ))}
    </div>
  );
}
