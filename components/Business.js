import React from 'react';

const Business = () => {
  return (
    <section id="features" className="flex flex-col py-6 sm:py-16 md:flex-row">
      {/* left section */}
      <div className="flex flex-1 flex-col items-start justify-center">
        <h2 className="w-full font-sans text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p className="mt-5 max-w-[470px] font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <button
          type="button"
          className="bg-blue-gradient mt-10 rounded-[10px] px-6 py-4 font-sans text-[18px] font-medium text-primary outline-none"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Business;
