import { incomeIcon, estateIcon, stockIcon, arrowRightIcon } from "@/assets";
import Image from "next/image";

export const ThirdSection = () => {
  return (
    <section
      className="flex flex-col px-6 max-md:px-4 max-md:mx-4 pt-[4rem] gap-11"
      aria-labelledby="asset-classes-heading"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 id="asset-classes-heading" className="text-[2.5rem] font-bold">
          Asset Classes
        </h2>
        <p className="text-[#2D2D2D]">
          It’s your money, choose where you invest it
        </p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
        <article
          className="flex flex-col justify-between border-2 border-[#919FB533] rounded-[1rem]"
          aria-labelledby="stocks-heading"
        >
          <div className="flex flex-col gap-16">
            <div className="bg-[#FFF4F0] h-[10rem] relative rounded-[1rem]">
              <div className="absolute -bottom-1/3 left-1/2 transform -translate-x-1/2 border-[#ffffff] border-[15px] rounded-full">
                <Image src={stockIcon} alt="Stocks icon" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 max-md:px-2">
              <h3
                id="stocks-heading"
                className="text-tertiary text-[1.5rem] text-center"
              >
                Stocks
              </h3>
              <p className="text-center text-tertiary w-[85%] max-md:w-full">
                We help you invest and manage your money by investing in our
                portfolio of 30 high-growth stocks across the US market with our
                equity portfolio of power stocks.
              </p>
              <div className="flex justify-center items-center flex-col text-tertiary -mt-2">
                <p>
                  <span className="text-[#b7bcbc]">Historical returns:</span>{" "}
                  <span>14% per annum</span>
                </p>
                <p>
                  <span className="text-[#b7bcbc]">Risk Level:</span>{" "}
                  <span>Medium</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6 items-center justify-center mb-6">
            <a href="/" className="text-primary leading-[1.35rem]">
              Learn how Stocks work
            </a>
            <a href="/" aria-label="Learn more about Stocks">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </article>

        <article
          className="flex flex-col justify-between border-2 border-[#919FB533] rounded-[1rem]"
          aria-labelledby="real-estate-heading"
        >
          <div className="flex flex-col gap-16">
            <div className="bg-[#F6F2FF] h-[10rem] relative rounded-[1rem]">
              <div className="absolute -bottom-1/3 left-1/2 transform -translate-x-1/2 border-[#ffffff] border-[15px] rounded-full">
                <Image src={estateIcon} alt="Real Estate icon" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 max-md:px-2">
              <h3
                id="real-estate-heading"
                className="text-tertiary text-[1.5rem] text-center"
              >
                Real Estate
              </h3>
              <p className="text-center text-tertiary w-[80%] max-md:w-full">
                Our Real Estate plan is the sweet middle. Best for those who
                want a balance of good returns and medium risk. This plan
                invests in rented buildings in the US.
              </p>
              <div className="flex justify-center items-center flex-col text-tertiary -mt-2">
                <p>
                  <span className="text-[#b7bcbc]">Historical returns:</span>{" "}
                  <span>14% per annum</span>
                </p>
                <p>
                  <span className="text-[#b7bcbc]">Risk Level:</span>{" "}
                  <span>Medium</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6 items-center justify-center mb-6">
            <a href="/" className="text-primary leading-[1.35rem]">
              Learn how Real Estate works
            </a>
            <a href="/" aria-label="Learn more about Real Estate">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </article>

        <article
          className="flex flex-col justify-between gap-16 border-2 border-[#919FB533] rounded-[1rem]"
          aria-labelledby="fixed-income-heading"
        >
          <div className="flex flex-col gap-16">
            <div className="bg-[#FFF4F0] h-[10rem] relative rounded-[1rem]">
              <div className="absolute -bottom-1/3 left-1/2 transform -translate-x-1/2 border-[#ffffff] border-[15px] rounded-full">
                <Image src={incomeIcon} alt="Fixed Income icon" />
              </div>
            </div>
            <div className="flex flex-col justify-center px-3 gap-5 max-md:px-2">
              <h3
                id="fixed-income-heading"
                className="text-tertiary text-[1.5rem] text-center"
              >
                Fixed Income
              </h3>
              <p className="text-center text-tertiary max-md:w-full">
                A low-risk asset perfect for anyone who wants to protect their
                money in a secure, appreciating currency, i.e. the dollar. For
                people who want to protect their hard-earned money from
                inflation while earning steady returns.
              </p>
              <div className="flex justify-center items-center flex-col text-tertiary -mt-2">
                <p>
                  <span className="text-[#b7bcbc]">Historical returns:</span>{" "}
                  <span>14% per annum</span>
                </p>
                <p>
                  <span className="text-[#b7bcbc]">Risk Level:</span>{" "}
                  <span>Medium</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6 items-center justify-center mb-6">
            <a href="/" className="text-primary leading-[1.35rem]">
              Learn how Fixed Income works
            </a>
            <a href="/" aria-label="Learn more about Fixed Income">
              <Image src={arrowRightIcon} alt="Arrow pointing right" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
