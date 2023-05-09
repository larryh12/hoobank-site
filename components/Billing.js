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
    </section>
  );
};

export default Billing;
