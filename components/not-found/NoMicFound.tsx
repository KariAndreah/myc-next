'use client';

import '@mantine/core/styles.css';
import { Card } from '@mantine/core';

const NoMicFound = () => (
  <Card className="flex flex-1 bg-slate-500 pt-32 max-w-[800px]">
    <h1 className="text-7xl text-center font-bold ">
      <span className="inherit bg-gradient-to-r from-blue-400 to-orange-600 inline-block text-transparent bg-clip-text ">
        Bummer!
      </span>{' '}
      No mics.
    </h1>
    <h2 className="font-light text-2xl lg:text-4xl md:text-3xl px-2 text-center text-[#1A1F2C]">
      <p>
        Let me help you back
        <a
          className="text-blue-400 underline decoration-dashed pl-1 hover:decoration-solid hover:underline"
          href="/"
        >
          home.
        </a>
      </p>
    </h2>
  </Card>
);

export default NoMicFound;
