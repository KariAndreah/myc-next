'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';

import '@mantine/core/styles.css';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

const MicPage = () => {
  const { mics } = useContext(MicDetailContext);
  console.log('Need the context', mics);
  // console.log(mics);

  if (!mics) {
    return (
      <div className="p-32">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-3">
        <Card className="flex w-64 bg-slate-500" component="a">
          <div className="flex flex-row text-slate-700 text-xl">
            <div>{mics.name}</div>
          </div>

          <div className="flex flex-row gap-1 text-green-700 text-sm">
            <div>{mics.address?.number}</div>
            <div>{mics.address?.streetName}</div>
          </div>
          <div className="flex flex-row pt-3">
            <div>{mics.day}</div>
          </div>
          <div className="flex flex-row">
            <div>{mics.time}</div>
          </div>
          <div className="flex flex-row">
            <div>{mics.cost?.costAmount}</div>
          </div>
          <div className="flex flex-row">
            <div>Notes: </div>
            <div>{mics.notes}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MicPage;

export type MicPageProps = {
  mics?: any;
};
