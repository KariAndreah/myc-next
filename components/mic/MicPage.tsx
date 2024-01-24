'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';

import '@mantine/core/styles.css';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

const MicPage = () => {
  const { mics } = useContext(MicDetailContext);
  console.log('Need the context', mics);
  // console.log(mics);

  // This is causing an error I don't like:
  // function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
  //   const [hourString, minute] = timeString.split(':');
  //   const hour = +hourString % 24;
  //   return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  // }

  if (!mics) {
    return (
      <div className="p-32">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <Card className="flex flex-1 w-full bg-slate-500 gap-5 m-10">
      <div className="flex flex-row text-slate-700 text-4xl pt-5">
        <div>{mics.content[0]?.name}</div>
      </div>
      <div className="flex flex-row gap-1 text-green-700 text-sm">
        <div>{mics.content[0]?.address?.number}</div>
        <div>{mics.content[0]?.address?.streetName}</div>
        <div>{mics.content[0]?.address?.zipcode}</div>
        <div>{mics.content[0]?.borough}</div>
      </div>
      <div className="flex flex-row pt-8">
        <div className="pr-1">{mics.content.day}</div>
        <div>{mics.content[0]?.time}</div>
      </div>

      <div className="flex flex-row text-sm">
        <h1 className="text-sm">Cost: </h1>
        <div>{mics.content[0]?.cost?.costAmount}</div>
      </div>
      <div className="flex flex-row text-sm">
        <h1 className="text-sm">Host: </h1>
        <div>{mics.content[0]?.host?.firstHost}</div>
      </div>
      <div className="flex flex-row">
        <div>Notes: </div>
        <div>{mics.content[0]?.signup?.instructions}</div>
      </div>
      <div>
        <h1>Reviews: </h1>
      </div>
    </Card>
  );
};

export default MicPage;

export type MicPageProps = {
  mics?: any;
};
