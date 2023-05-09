import React from 'react';
import Image from 'next/image';
import card from '@/public/card.png';

const CardDeal = () => {
  return (
    <section className="flex flex-col py-6 sm:py-16 md:flex-row">
      <div className="flex flex-1 flex-col items-start justify-center">
        <h2 className="w-full font-sans text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className="mt-5 max-w-[470px] font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <button
          type="button"
          className="bg-blue-gradient mt-10 rounded-[10px] px-6 py-4 font-sans text-[18px] font-medium text-primary outline-none"
        >
          Get Started
        </button>
      </div>

      <div className="relative ml-0 mt-10 flex flex-1 items-center justify-center md:ml-10 md:mt-0">
        <Image src={card} alt="card" className="h-[100%] w-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
