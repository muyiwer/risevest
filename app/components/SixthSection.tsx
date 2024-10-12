import { firstUser, secondUser, thirdUser } from "@/assets";
import Image from "next/image";

export const SixthSection = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="px-2 mt-[4rem] flex flex-col gap-11"
    >
      <div className="flex flex-col max-md:px-6 justify-center items-center max-md:gap-3">
        <h2
          id="testimonials-heading"
          className="text-primary text-[2.5rem] font-semibold max-md:hidden"
        >
          From The People Who Use Rise
        </h2>
        <h2 className="text-primary text-[2rem] text-center leading-[1.8rem] font-semibold md:hidden">
          What our customers are saying
        </h2>
        <p className="text-[1.1rem] text-tertiary text-center w-[50%] max-md:hidden">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
        <p className="text-[1.1rem] text-center md:hidden">
          We serve over 80,000 amazing users.
        </p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        <article className="h-[12rem] flex flex-col justify-between max-md:justify-center max-md:items-center max-md:gap-3 px-4">
          <blockquote className="text-tertiary max-md:text-center">
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </blockquote>
          <div className="flex gap-2 max-md:gap-0 items-center max-md:flex-col">
            <Image src={firstUser} alt="Lade" />
            <div className="text-center max-md:mt-2">
              <strong className="font-semibold">Lade</strong>
              <p className="text-tertiary md:hidden">UX Researcher</p>
            </div>
          </div>
        </article>

        <article className="h-[12rem] flex flex-col justify-between px-4 max-md:hidden">
          <blockquote className="text-tertiary">
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </blockquote>
          <div className="flex gap-2 items-center">
            <Image src={secondUser} alt="Jesse" />
            <span className="font-semibold">Jesse</span>
          </div>
        </article>

        <article className="h-[12rem] flex flex-col justify-between px-4 max-md:hidden">
          <blockquote className="text-tertiary">
            I chose Rise because of its leadership, wealth of knowledge and the
            people who support them. I invest with Rise in order to protect my
            savings and investment from being depleted by devaluation and
            inflation that’s at an all-time high in Nigeria.
          </blockquote>
          <div className="flex gap-2 items-center">
            <Image src={thirdUser} alt="Raye" />
            <span className="font-semibold">Raye</span>
          </div>
        </article>
      </div>
    </section>
  );
};
