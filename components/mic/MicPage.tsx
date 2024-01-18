'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';

import '@mantine/core/styles.css';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

const MicPage = () => {
  const { mics } = useContext(MicDetailContext);
  console.log('Need the context', mics);
  // console.log(mics);

  function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  }

  if (!mics) {
    return (
      <div className="p-32">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center ">
      <Card className="flex w-64 bg-slate-500 gap-5 p-10" component="a">
        <div className="flex flex-row text-slate-700 text-4xl pt-5">
          <div>{mics.name}</div>
        </div>
        <div className="flex flex-row gap-1 text-green-700 text-sm">
          <div>{mics.address?.number}</div>
          <div>{mics.address?.streetName}</div>
          <div>{mics.address?.zipcode}</div>
          <div>{mics.borough}</div>
        </div>
        <div className="flex flex-row pt-8">
          <div className="pr-1">{mics.day}</div>
          <div>{formatTime(mics.time)}</div>
        </div>

        <div className="flex flex-row text-sm">
          <h1 className="text-sm">Cost: </h1>
          <div>{mics.cost?.costAmount}</div>
        </div>
        <div className="flex flex-row text-sm">
          <h1 className="text-sm">Host: </h1>
          <div>{mics.host?.firstHost}</div>
        </div>
        <div className="flex flex-row">
          <div>Notes: </div>
          <div>{mics.signup?.instructions}</div>
        </div>
      </Card>
    </div>
  );
};

export default MicPage;

export type MicPageProps = {
  mics?: any;
};
