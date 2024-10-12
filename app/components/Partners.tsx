import {
  armsIcon,
  westernUnionIcon,
  techStarIcon,
  venturesIcon,
} from "@/assets";
import Image from "next/image";

export const Partners = () => {
  return (
    <section
      className="pt-[6rem] px-4 flex md:justify-center md:items-center max-md:flex-col max-md:gap-3 w-full"
      aria-labelledby="partners-heading"
    >
      <h2 id="partners-heading" className="sr-only">
        Our Partners
      </h2>
      <span className="text-secondary font-bold text-[1.125rem] md:hidden">
        We are supported by
      </span>

      <div className="flex gap-5 max-md:w-full items-center">
        <figure className="max-md:w-[20%]">
          <Image src={armsIcon} alt="Arms Trustees logo" />
          <figcaption className="sr-only">Arms Trustees</figcaption>
        </figure>

        <figure className="max-md:w-[20%]">
          <Image src={westernUnionIcon} alt="Western Union logo" />
          <figcaption className="sr-only">Western Union</figcaption>
        </figure>

        <figure className="max-md:w-[20%]">
          <Image src={techStarIcon} alt="Tech Star logo" />
          <figcaption className="sr-only">Tech Star</figcaption>
        </figure>

        <figure className="max-md:w-[20%]">
          <Image src={venturesIcon} alt="Ventures Platform logo" />
          <figcaption className="sr-only">Ventures Platform</figcaption>
        </figure>
      </div>
    </section>
  );
};
