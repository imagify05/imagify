import PricingCard from "../_components/pricing-card";

export default function PricingPage() {
  return (
    <section className="w-full h-full">
      <div className="max-w-7xl mx-auto p-4 my-10">
        <div className="px-5 py-2 bg-white max-w-[164px] mx-auto rounded-[50px] flex justify-center items-center border-[0.3px] border-gray-300 animate-bounce">
          <p className="text-[15px] text-[#696969] uppercase">Our Plans</p>
        </div>
        <h1 className="text-[35px] max-sm:text-[20px] leading-[80px] text-center text-[#252525]">
          Choose the plan
        </h1>
        <div className="flex flex-wrap gap-x-6 justify-center items-center">
          <PricingCard />
        </div>
      </div>
    </section>
  );
}
