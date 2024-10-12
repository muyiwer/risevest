import {
  choose,
  invest,
  goals,
  remember,
  arrowRightIcon,
  rectangleIcon,
} from "@/assets";
import Image from "next/image";

export const SecondSection = () => {
  return (
    <section
      className="flex flex-col gap-11 px-6 max-md:px-3 pt-[4rem] max-md:gap-[5.5rem]"
      aria-labelledby="investment-features-heading"
    >
      <h2 id="investment-features-heading" className="sr-only">
        Investment Features
      </h2>

      {/* Superior Performance Section */}
      <article
        className="flex flex-col md:flex-row justify-between items-center max-md:gap-6"
        aria-labelledby="superior-performance-heading"
      >
        <header className="sr-only">
          <h3 id="superior-performance-heading">Superior Performance</h3>
        </header>

        <div className="relative md:hidden">
          <Image
            src={invest}
            alt="Investment illustration"
            className="mb-4 max-md:w-[10.8rem]"
          />
          <Image
            src={rectangleIcon}
            alt="Decorative rectangle"
            className="md:hidden absolute bottom-4 left-[5%]"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-[1.25rem] text-center md:hidden">
            Superior Performance
          </h1>
          <p className="text-tertiary text-center md:hidden w-full">
            Rise outperforms your other alternatives in two ways. The first is
            through our expert, algorithm-driven investment approach that picks
            through over 3,000 data sets to find the perfect investment for you.
          </p>
          <h1 className="font-bold text-[2rem] max-md:hidden">
            Invest your money in dollars
          </h1>
          <p className="text-tertiary w-[19.8rem] max-md:hidden">
            By holding your investments in a stable currency, your money grows
            more over time and retains its value better.
          </p>
          <div className="flex gap-2 mt-4 items-center max-md:hidden">
            <a href="/" className="text-primary leading-[1.35rem]">
              Start Investing Now
            </a>
            <a href="/">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </div>

        <Image
          src={invest}
          alt="Investment illustration"
          className="mr-9 max-md:hidden"
        />
      </article>

      {/* Personalization Section */}
      <article
        className="flex flex-col md:flex-row justify-between items-center"
        aria-labelledby="personalization-heading"
      >
        <header className="sr-only">
          <h3 id="personalization-heading">Personalization</h3>
        </header>

        <div className="relative">
          <Image
            src={choose}
            alt="Choice illustration"
            className="mb-4 md:mb-0 max-md:w-[10.8rem]"
          />
          <Image
            src={rectangleIcon}
            alt="Decorative rectangle"
            className="md:hidden absolute bottom-4 left-[5%]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[1.25rem] text-center md:hidden">
            Personalization
          </h1>
          <p className="text-tertiary text-center md:hidden w-full">
            No two people are the same, and everyone’s financial goals are
            different. Rise understands this, which is why we tailor your
            journey to financial freedom to fit you.
          </p>
          <h1 className="font-bold text-[2rem] w-[19rem] leading-[2.4rem] max-md:hidden">
            Choose what's best for you
          </h1>
          <p className="text-tertiary w-[27rem] text-[1rem] max-md:hidden">
            Unlike other platforms, Rise lets you pick between stocks, US real
            estate, and fixed income, according to your risk appetite. That way
            you can spread your risk and tap into different investments all in
            one place.
          </p>
          <div className="flex gap-2 mt-4 items-center max-md:hidden">
            <a href="/" className="text-primary leading-[1.35rem]">
              Start Investing Now
            </a>
            <a href="/">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </div>
      </article>

      {/* Diversification Section */}
      <article
        className="flex flex-col md:flex-row justify-between items-center"
        aria-labelledby="diversification-heading"
      >
        <header className="sr-only">
          <h3 id="diversification-heading">Diversification</h3>
        </header>

        <div className="relative md:hidden">
          <Image
            src={goals}
            alt="Goals illustration"
            className="mb-4 max-md:w-[10.8rem]"
          />
          <Image
            src={rectangleIcon}
            alt="Decorative rectangle"
            className="md:hidden absolute bottom-4 left-[5%]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[1.25rem] text-center md:hidden">
            Diversification
          </h1>
          <p className="text-tertiary text-center md:hidden w-full">
            Rise offers a choice of three asset classes: US equities, US real
            estate, and fixed income assets to provide stability to your
            investments and protection from market declines. You can pick one
            asset class or more.
          </p>
          <h1 className="font-bold text-[2rem] max-md:hidden">
            Set goals and reach them
          </h1>
          <p className="text-tertiary w-[27rem] max-md:hidden">
            You can invest towards a goal on Rise—retirement, higher education,
            saving for your home, or travel budgets. Or create a goal of your
            own and invest periodically to achieve them.
          </p>
          <div className="flex gap-2 mt-4 items-center max-md:hidden">
            <a href="/" className="text-primary leading-[1.35rem]">
              Start Investing Now
            </a>
            <a href="/">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </div>

        <Image
          src={goals}
          alt="Goals illustration"
          className="max-md:hidden mr-9"
        />
      </article>

      {/* Auto-investment Section */}
      <article
        className="flex flex-col md:flex-row justify-between items-center max-md:hidden"
        aria-labelledby="auto-invest-heading"
      >
        <header className="sr-only">
          <h3 id="auto-invest-heading">Auto-investment</h3>
        </header>

        <Image src={remember} alt="Reminder illustration" />

        <div className="flex flex-col">
          <h1 className="font-bold text-[2rem] w-[26rem] leading-[2.4rem]">
            We remember so you don’t have to
          </h1>
          <p className="text-tertiary w-[27rem]">
            Our Auto-invest feature makes it easy to stay consistent, even when
            you forget. Set a funding amount, frequency, and payment method, and
            Rise will automatically fund your investment on schedule.
          </p>
          <div className="flex gap-2 mt-4 items-center">
            <a href="/" className="text-primary leading-[1.35rem]">
              Start Investing Now
            </a>
            <a href="/">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
