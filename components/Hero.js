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
      </div>
    </section>
  );
};

export default Hero;
