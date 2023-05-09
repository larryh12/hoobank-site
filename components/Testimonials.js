import React from 'react';
import Image from 'next/image';
import people01 from '@/public/people01.png';
import people02 from '@/public/people02.png';
import people03 from '@/public/people03.png';

const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
];

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="relative flex flex-col items-center justify-center py-6 sm:py-16"
    >
      <div className="blue__gradient absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full" />

      <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
        <h2 className="w-full font-sans text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          What People are <br className="hidden sm:block" /> saying about us
        </h2>
        <div className="mt-6 w-full md:mt-0">
          <p className="max-w-[450px] text-left font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
