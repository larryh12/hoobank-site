import React from 'react';

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
  return (
    <nav className="flex w-full items-center justify-between py-6">
      <Image src={logo} alt="hoobank" className="h-[32px] w-[124px]" />

      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="mr-10 cursor-pointer font-sans text-[16px] font-normal text-white"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
