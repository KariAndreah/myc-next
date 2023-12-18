'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';
import { MicListingContext } from '@/lib/context/MicListingContext';

import '@mantine/core/styles.css';

const MicCard = () => {
  const { mics } = useContext(MicListingContext);
  console.log('Need the context', mics);
  // console.log(mics);

  if (!mics) {
    return (
      <div className="p-32">
        <h1>NOT FOUND</h1>
      </div>
    );
  }
  const openMic = mics?.map((mic: any) => (
    <div key={mic?.id} className="flex shadow-md ">
      <Card className="flex w-64 bg-slate-500" component="a" href="google.com">
        <div className="flex flex-row text-slate-700 text-xl">
          <div>{mic?.name}</div>
        </div>

        <div className="flex flex-row gap-1 text-green-700 text-sm">
          <div>{mic.address.number}</div>
          <div>{mic.address.streetName}</div>
        </div>
        <div className="flex flex-row pt-3">
          <div>{mic?.day}</div>
        </div>
        <div className="flex flex-row">
          <div>{mic?.time}</div>
        </div>
        <div className="flex flex-row">
          <div>{mic?.cost.costAmount}</div>
        </div>
        <div className="flex flex-row">
          <div>Notes: </div>
          <div>{mic?.notes}</div>
        </div>
      </Card>
    </div>
  ));
  return (
    <div>
      <div>Hi</div>
      <div className="flex flex-row flex-wrap gap-3">{openMic}</div>
    </div>
  );
};

export default MicCard;

export type MicCardProps = {
  mics: any;
};
