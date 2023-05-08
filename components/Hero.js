import React from 'react';

import Image from 'next/image';
import discount from '@/public/Discount.svg';
import arrowUp from '@/public/arrow-up.svg';
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
          {/* get started button */}
          <div className="bg-blue-gradient mr-0 hidden h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-full p-[2px] ss:flex md:mr-4">
            <div className="flex h-[100%] w-[100%] flex-col items-center justify-center rounded-full bg-primary">
              <div className="flex flex-row items-start justify-center">
                <p className="font-sans text-[18px] font-medium leading-[23.4px]">
                  <span className="text-gradient">Get</span>
                </p>
                <Image
                  src={arrowUp}
                  alt="arrow-up"
                  className="h-[23px] w-[23px] object-contain"
                />
              </div>
              <p className="font-sans text-[18px] font-medium leading-[23.4px]">
                <span className="text-gradient">Started</span>
              </p>
            </div>
          </div>
        </div>
        {/* heading text lower*/}
        <h1 className="w-full font-sans text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100.8px]">
          Payment Method.
        </h1>
        {/* paragraph text */}
        <p className="mt-5 max-w-[470px] font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      {/* right section */}
      <div className="relative my-10 flex flex-1 items-center justify-center md:my-0">
        <Image
          src={robot}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />
      </div>
    </section>
  );
};

export default Hero;
