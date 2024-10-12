import { appStoreIcon, googleStoreIcon, riseAppIcon, riseAppMobileIcon } from "@/assets";
import Image from "next/image";

export const EightSection = () => {
  return (
    <section
      aria-labelledby="download-app-heading"
      className=" bg-[#ECFEFE] relative max-md:h-[65%] rounded-[3rem] grid grid-cols-[3fr_1fr] mt-[4rem] pt-11 px-6 max-md:px-4 max-md:grid max-md:grid-cols-1 max-md:gap-[50px]"
    >
      <div className="flex flex-col gap-3 md:justify-center">
        <h1
          id="download-app-heading"
          className="w-[55%] leading-[3.75rem] font-bold text-primary max-md:w-full max-md:text-center"
        >
          Download The Rise App
        </h1>
        <p className="text-[2rem] w-[60%] font-semibold leading-[2.37rem] max-md:text-[1.25rem] max-md:leading-[1.5rem] max-md:w-full max-md:text-center">
          Join our 100,000 users investing and setting long term goals!
        </p>
        <p className="leading-[1.75rem] text-[1rem] text-tertiary max-md:text-center">
          Dollar investments that help you grow.
        </p>

        <div className="flex gap-4 mt-3 max-md:justify-center">
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
        <Image className="max-md:hidden" src={riseAppIcon} alt="Screenshot of the Rise mobile app" />
        <Image className="md:hidden" src={riseAppMobileIcon} alt="Screenshot of the Rise mobile app" />
      </div>
    </section>
  );
};
