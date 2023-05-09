import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import instagram from '@/public/instagram.svg';
import facebook from '@/public/facebook.svg';
import twitter from '@/public/twitter.svg';
import linkedin from '@/public/linkedin.svg';

const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
];

const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center py-6 sm:py-16">
      <div className="mb-8 flex w-full flex-col items-start justify-center md:flex-row">
        <div className="mr-10 flex flex-[1] flex-col justify-start">
          <Image
            src={logo}
            alt="hoobank"
            className="h-[72.14px] w-[266px] object-contain"
          />
          <p className="mt-4 max-w-[312px] font-sans text-[18px] font-normal leading-[30.8px] text-dimWhite">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="my-4 flex min-w-[150px] flex-col ss:my-0"
            >
              <h4 className="font-sans text-[18px] font-medium leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`cursor-pointer font-sans text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondary ${
                      index === footerlink.links.length - 1 ? 'mb-0' : 'mb-4'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
        <p className="text-center font-sans text-[18px] font-normal leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="mt-6 flex flex-row md:mt-0">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`h-[21px] w-[21px] cursor-pointer object-contain ${
                index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'
              }`}
              // onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
