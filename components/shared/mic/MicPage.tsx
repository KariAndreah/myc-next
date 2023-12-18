'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';

import '@mantine/core/styles.css';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import { Mic } from '@/models/mic';

const MicCard = () => {
  const { mics } = useContext(MicDetailContext);
  console.log('Need the context', mics);
  // console.log(mics);

  if (!mics) {
    return (
      <div className="p-32">
        <h1>NOT FOUND</h1>
      </div>
    );
  }

  return (
    <div>
      <div>Hi</div>
      <div className="flex flex-row flex-wrap gap-3">
        <Card className="flex w-64 bg-slate-500" component="a" href="google.com">
          <div className="flex flex-row text-slate-700 text-xl">
            <div>{mics[0].name}</div>
          </div>

          <div className="flex flex-row gap-1 text-green-700 text-sm">
            {/* <div>{mics[0].address.number}</div>
            <div>{mics[0].address.streetName}</div> */}
          </div>
          <div className="flex flex-row pt-3">
            <div>{mics[0].day}</div>
          </div>
          <div className="flex flex-row">
            <div>{mics[0].time}</div>
          </div>
          <div className="flex flex-row">{/* <div>{mics[0].cost.costAmount}</div> */}</div>
          <div className="flex flex-row">
            <div>Notes: </div>
            <div>{mics[0].notes}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MicCard;

export type MicCardProps = {
  mics?: Mic;
};
