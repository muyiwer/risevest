import {
  appStoreIcon,
  bubbleLarge,
  bubbleMedium,
  bubbleMobileIcon,
  googleStoreIcon,
  mobileAppIcon,
} from "@/assets";
import Image from "next/image";

export const FirstSection = () => {
  return (
    <section
      className="flex justify-between pt-[4rem] px-6 max-md:px-4 max-md:grid max-md:grid-cols-1 max-md:gap-[50px] relative"
      aria-labelledby="business-description-heading"
    >
      <Image
        src={bubbleLarge}
        alt=""
        aria-hidden="true"
        className="absolute right-[40%] animate-bounceXSlow max-md:hidden"
      />
      <Image
        src={bubbleLarge}
        alt=""
        aria-hidden="true"
        className="absolute left-[12%] -bottom-[10%] animate-bounceXSlow max-md:hidden"
      />
      <Image
        src={bubbleLarge}
        alt=""
        aria-hidden="true"
        className="absolute -right-[5%] -bottom-[10%] animate-bounceXSlow max-md:hidden"
      />
      <Image
        src={bubbleMedium}
        alt=""
        aria-hidden="true"
        className="absolute right-[30%] -bottom-[10%] animate-bounceXSlow max-md:hidden"
      />
      <Image
        src={bubbleMedium}
        alt=""
        aria-hidden="true"
        className="absolute left-[5%] animate-bounceXSlow max-md:hidden"
      />
      <Image
        src={bubbleMobileIcon}
        alt=""
        aria-hidden="true"
        className="absolute right-6 top-6 animate-bounceXSlow md:hidden"
      />
      <Image
        src={bubbleMobileIcon}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[50%] left-[10%] animate-bounceXSlow md:hidden"
      />
      <Image
        src={bubbleMobileIcon}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[25%] right-[10%] animate-bounceXSlow md:hidden"
      />

      <div className="flex flex-col gap-3 justify-center max-md:items-center">
        <h1 className="text-[3.5rem] w-[55%] leading-[3.75rem] font-bold text-primary max-md:w-full max-md:text-[2.1rem] max-md:leading-[2.25rem] max-md:text-center">
          Dollar investments that help you grow
        </h1>
        <p className="leading-[1.75rem] text-[1rem] w-[45%] max-md:hidden">
          We put your money in high quality assets that help you build wealth
          and achieve your financial goals.
        </p>
        <p className="md:hidden leading-[1.75rem] text-[1rem] text-tertiary w-[70%]">
          Your personal wealth manager. Get started with a minimum of $10 and
        </p>

        <div className="flex gap-4">
          <a href="https://apps.apple.com" aria-label="Download from App Store">
            <Image src={appStoreIcon} alt="App Store" />
          </a>
          <a
            href="https://play.google.com"
            aria-label="Download from Google Play"
          >
            <Image src={googleStoreIcon} alt="Google Play" />
          </a>
        </div>
      </div>

      <div className="max-md:justify-center flex">
        <Image src={mobileAppIcon} alt="Mobile application screenshot" />
      </div>
    </section>
  );
};
