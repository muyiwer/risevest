import { riseApp } from "@/assets";
import Image from "next/image";

export const FourthSection = () => {
  return (
    <section
      className="flex max-md:px-4 pt-[4rem] justify-around items-center max-md:hidden"
      aria-labelledby="rise-app-heading"
    >
      <Image src={riseApp} alt="Rise app preview" />

      <div className="flex flex-col gap-5 w-[25rem]">
        <h2 id="rise-app-heading" className="text-[1.12rem]">
          The Rise App
        </h2>

        <p className="text-[2.5rem] leading-[3rem] font-semibold">
          Save for your <span className="text-[#7600ffbd]">future</span>
        </p>

        <p className="text-tertiary">
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future, and more.
        </p>

        <button
          className="bg-primary rounded-md text-white py-[1rem] px-[0.6rem] w-[10rem]"
          aria-label="Start saving with Rise app"
        >
          Start Saving
        </button>
      </div>
    </section>
  );
};
