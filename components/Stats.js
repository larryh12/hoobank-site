import React from 'react';

const stats = [
  {
    id: 'stats-1',
    title: 'User Active',
    value: '3800+',
  },
  {
    id: 'stats-2',
    title: 'Trusted by Company',
    value: '230+',
  },
  {
    id: 'stats-3',
    title: 'Transaction',
    value: '$230M+',
  },
];

const Stats = () => {
  return (
    <section className="mb-6 flex flex-row flex-wrap items-center justify-center sm:mb-20">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`m-3 flex flex-1 flex-row items-center justify-start`}
        >
          <h4 className="font-sans text-[30.89px] font-semibold leading-[43.16px] text-white xs:text-[40.89px] xs:leading-[53.16px]">
            {stat.value}
          </h4>
          <p className="text-gradient ml-3 font-sans text-[15.45px] font-normal uppercase leading-[21.58px] xs:text-[20.45px] xs:leading-[26.58px]">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
