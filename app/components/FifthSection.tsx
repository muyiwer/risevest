export const FifthSection = () => {
  return (
    <section
      className="bg-[url('./assets/regulation_bg.svg')] mt-[4rem] flex w-full max-md:px-4  max-md:py-4 justify-center items-center flex-col md:py-8"
      aria-labelledby="regulation-heading"
    >
      <h2
        id="regulation-heading"
        className="text-[2.5rem] max-md:text-[2rem] max-md:text-center font-bold"
      >
        How We Are Regulated
      </h2>

      <p className="text-tertiary max-md:w-[95%] md:w-[40%] text-center max-md:text-[0.8rem] mt-4">
        Rise is registered and regulated both in the US and in Nigeria. Our team
        consists of US registered investment advisers, our Nigerian users are
        covered by our SEC-licensed trustees, ARM Trustees, and all our assets
        are held with regulated third parties in all relevant jurisdictions.
      </p>
    </section>
  );
};
