import Image from "next/image";

export default function TestimonialSection() {
  return (
    <aside className="flex flex-wrap gap-6 justify-center items-center">
      <div className="flex flex-col gap-2 max-w-[322px] w-full min-h-[327px] items-center justify-center p-6 border rounded-[8px] border-[#e1e1e1] shadow-[0px_4px_15px_0px_#0000000D]">
        <Image
          src="/profile_img_1.svg"
          alt="avatar 1"
          height={42.4}
          width={42.4}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="font-[500] text-[18px] leading-[28px] text-[#4b445a]">
            Donald Jackman
          </p>
          <span className="font-[500] text-[13px] leading-[28px] text-[#62577b]">
            Graphic Designer
          </span>
        </div>
        <Image
          src="/star_ratings.svg"
          alt="star ratings"
          height={18}
          width={92}
        />
        <p className="text-[#797484] leading-[22px] text-center my-1">
          have been using imagify for nearly two years, primarily for Instagram,
          and it has been incredibly user-friendly, making my work much easier.
        </p>
      </div>
      <div className="flex flex-col gap-2 max-w-[322px] w-full min-h-[327px] items-center justify-center p-6 border rounded-[8px] border-[#e1e1e1] shadow-[0px_4px_15px_0px_#0000000D]">
        <Image
          src="/profile_img_2.svg"
          alt="avatar 2"
          height={42.4}
          width={42.4}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="font-[500] text-[18px] leading-[28px] text-[#4b445a]">
            Richard Nelson
          </p>
          <span className="font-[500] text-[13px] leading-[28px] text-[#62577b]">
            Content Creator
          </span>
        </div>
        <Image
          src="/star_ratings.svg"
          alt="star ratings"
          height={18}
          width={92}
        />
        <p className="text-[#797484] leading-[22px] text-center my-1">
          have been using imagify for nearly two years, primarily for Instagram,
          and it has been incredibly user-friendly, making my work much easier.
        </p>
      </div>
      <div className="flex flex-col gap-2 max-w-[322px] w-full min-h-[327px] items-center justify-center p-6 border rounded-[8px] border-[#e1e1e1] shadow-[0px_4px_15px_0px_#0000000D]">
        <Image
          src="/profile_martin.svg"
          alt="avatar 3"
          height={42.4}
          width={42.4}
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="font-[500] text-[18px] leading-[28px] text-[#4b445a]">
            James Washington
          </p>
          <span className="font-[500] text-[13px] leading-[28px] text-[#62577b]">
            Co-Founder
          </span>
        </div>
        <Image
          src="/star_ratings.svg"
          alt="star ratings"
          height={18}
          width={92}
        />
        <p className="text-[#797484] leading-[22px] text-center my-1">
          have been using imagify for nearly two years, primarily for Instagram,
          and it has been incredibly user-friendly, making my work much easier.
        </p>
      </div>
    </aside>
  );
}
