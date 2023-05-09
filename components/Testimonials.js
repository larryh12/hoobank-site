import React from 'react';
import Image from 'next/image';
import people01 from '@/public/people01.png';
import people02 from '@/public/people02.png';
import people03 from '@/public/people03.png';
import quotes from '@/public/quotes.svg';

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

const FeedbackCard = ({ content, name, title, img, index }) => (
  <div
    className={`feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 ${
      index === feedback.length - 1 ? 'sm:mr-0' : 'sm:mr-5 md:mr-10'
    }`}
  >
    <Image
      src={quotes}
      alt="double_quotes"
      className="h-[27.6px] w-[42.6px] object-contain"
    />
    <p className="my-10 font-sans text-[18px] font-normal leading-[32.4px] text-white">
      {content}
    </p>

    <div className="flex flex-row">
      <Image src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className="font-sans text-[20px] font-semibold leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-sans text-[16px] font-normal leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

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
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
