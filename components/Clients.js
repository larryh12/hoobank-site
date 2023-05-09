import React from 'react';
import Image from 'next/image';
import airbnb from '@/public/airbnb.png';
import binance from '@/public/binance.png';
import coinbase from '@/public/coinbase.png';
import dropbox from '@/public/dropbox.png';

const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
];

const Clients = () => {
  return <div className="text-white">Clients</div>;
};

export default Clients;
