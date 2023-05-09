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
  return (
    <section className="my-4 flex items-center justify-center">
      <div className="flex w-full flex-wrap items-center justify-center">
        {clients.map((client) => (
          <div
            key={client.id}
            className="m-5 flex min-w-[120px] flex-1 items-center justify-center sm:min-w-[192px]"
          >
            <Image
              src={client.logo}
              alt="client_logo"
              className="w-[100px] object-contain sm:w-[192px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
