import { community } from "@/assets";
import Image from "next/image";

export const SeventhSection = () => {
  return (
    <section
      aria-labelledby="community-heading"
      className="px-2 mt-[4rem] flex justify-between items-center max-md:flex-col max-md:px-4 max-md:gap-5"
    >
      <div className="flex flex-col gap-5 max-md:hidden">
        <h2 id="community-heading" className="text-[2.5rem] font-semibold">
          Join The Rise Community
        </h2>
        <p className="w-[29rem]">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice, and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <a
          href="#"
          className="bg-[#A0DDE2] rounded-md text-black py-[1rem] px-[0.6rem] w-[12rem] text-center"
        >
          Join our Community
        </a>
      </div>

      <Image src={community} alt="Join the Rise community" />

      <div className="flex flex-col gap-5 md:hidden justify-center items-center">
        <h2 className="text-[2rem] font-semibold text-center leading-[1.8rem]">
          Join The Rise Community
        </h2>
        <p className="text-tertiary text-center">
          If you want to go far, go together.
        </p>
        <a
          href="#"
          className="bg-[#A0DDE2] rounded-md text-black py-[1rem] px-[0.6rem] w-[12rem] text-center"
        >
          Join our Community
        </a>
      </div>
    </section>
  );
};
