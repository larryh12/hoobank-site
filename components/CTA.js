import React from 'react';

const CTA = () => {
  return (
    <section className="bg-black-gradient-2 box-shadow my-6 flex flex-col items-center justify-center rounded-[20px] px-6 py-4 sm:my-16 sm:flex-row sm:px-16 sm:py-12">
      <div className="flex flex-1 flex-col">
        <h2 className="w-full font-sans text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Let’s try our service now!
        </h2>
        <p className="mt-5 max-w-[470px] font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="ml-0 mt-10 flex items-center justify-center sm:ml-10 sm:mt-0">
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

export default CTA;
