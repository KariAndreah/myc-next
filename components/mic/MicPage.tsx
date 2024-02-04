'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';

import '@mantine/core/styles.css';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

const MicPage = () => {
  const { mics } = useContext(MicDetailContext);
  // console.log('Need the context MIC DETAILS', mics.mics[0].name);
  // console.log(mics);

  // const mic = mics.mics[0];

  // This is causing an error I don't like:
  // function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
  //   const [hourString, minute] = timeString.split(':');
  //   const hour = +hourString % 24;
  //   return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  // }

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

  const mic = mics.mics[0];

  return (
    <Card className="flex flex-1 bg-slate-500 gap-5">
      <div className="flex flex-row text-slate-700 text-4xl pt-5">
        <div>{mic.name}</div>
      </div>
      <div className="flex flex-row gap-1 text-green-700 text-lg">
        <div>{mic.unit_number}</div>
        <div>{mic.street_name},</div>
        <div>{mic.zipcode},</div>
        <div>{mic.borough}</div>
      </div>
      <div className="flex flex-row pt-8">
        <div className="pr-1">{mic?.day}</div>
        <div>{formatTime(mic.start_time)}</div>
        <div className="font-semibold">{mic?.schedule}</div>
      </div>

      <div className="flex flex-row text-sm">
        <h1 className="text-sm">Cost: </h1>
        <div>{mic.cost_amount}</div>
      </div>
      <div className="flex flex-row text-sm">
        <h1 className="text-sm">Host: </h1>
        <div>{mic.first_host}</div>
      </div>
      <div className="flex flex-row">
        <div>Notes: </div>
        <div>{mic.instructions}</div>
      </div>
      {/* <div>
        <h1>Reviews: </h1>
      </div> */}
    </Card>
  );
};

export default MicPage;

export type MicPageProps = {
  mics?: any;
};
