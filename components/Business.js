import React from 'react';

import Image from 'next/image';
import star from '@/public/Star.svg';
import shield from '@/public/Shield.svg';
import send from '@/public/Send.svg';

const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      index === features.length - 1 ? 'mb-0' : 'mb-6'
    } feature-card`}
  >
    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-dimBlue">
      <Image src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 font-sans text-[18px] font-semibold leading-[23.4px] text-white">
        {title}
      </h4>
      <p className="font-sans text-[16px] font-normal leading-[24px] text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

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
      {/* right section */}
      <div className="relative ml-0 mt-10 flex flex-1 flex-col items-center justify-center md:ml-10 md:mt-0">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
