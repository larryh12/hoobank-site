'use client';

import React from 'react';
import { useState } from 'react';

import Image from 'next/image';
import close from '@/public/close.svg';
import logo from '@/public/logo.svg';
import menu from '@/public/menu.svg';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex w-full items-center justify-between py-6">
      <Image src={logo} alt="hoobank" className="h-[32px] w-[124px]" />

      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-sans text-[16px] font-normal ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* hamburger menu */}
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          Show
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
