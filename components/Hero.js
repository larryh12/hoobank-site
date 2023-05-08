import React from 'react';

import Image from 'next/image';
import discount from '@/public/Discount.svg';
import robot from '@/public/robot.png';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col py-6 sm:py-16 md:flex-row">
      {/* left section */}
      <div className="flex flex-1 flex-col items-start justify-center px-6 sm:px-16 xl:px-0">
        {/* discount bar */}
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <Image src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className="ml-2 font-sans text-[18px] font-normal uppercase leading-[30.8px] text-dimWhite">
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        {/* heading text upper*/}
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="flex-1 font-sans text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100.8px]">
            The Next <br className="hidden sm:block" />{' '}
            <span className="text-gradient">Generation</span>{' '}
          </h1>
          <div className="mr-0 hidden text-white ss:flex md:mr-4">
            GetStarted
          </div>
        </div>
        {/* heading text lower*/}
        <h1 className="w-full font-sans text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100.8px]">
          Payment Method.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
