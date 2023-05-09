import React from 'react';

import Image from 'next/image';
import apple from '@/public/apple.svg';
import google from '@/public/google.svg';
import bill from '@/public/bill.png';

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse py-6 sm:py-16 md:flex-row"
    >
      {/* left section */}
      <div className="relative mr-0 mt-10 flex flex-1 items-center justify-center md:mr-10 md:mt-0">
        <Image
          src={bill}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />
        {/* gradient start */}
        <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
        <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
        {/* gradient end */}
      </div>

      {/* right section */}
      <div className="flex flex-1 flex-col items-start justify-center">
        <h2 className="w-full font-sans text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing
        </h2>
        <p className="mt-5 max-w-[470px] font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
          <Image
            src={apple}
            alt="app_store"
            className="mr-5 h-[42.05px] w-[128.86px] cursor-pointer object-contain"
          />
          <Image
            src={google}
            alt="google_play"
            className="h-[43.08px] w-[144.17px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
