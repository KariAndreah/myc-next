'use client';

import { useContext } from 'react';
import { Card } from '@mantine/core';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

import '@mantine/core/styles.css';

const MicDetailCard = () => {
  const { mics } = useContext(MicDetailContext);
  // console.log('Mic Detail Context:', mics);
  // console.log(mics);

  function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  }

  // if (!mics) {
  //   return (
  //     <div className="p-32">
  //       <h1>Loading ...</h1>
  //     </div>
  //   );
  // }
  const openMic = mics?.content.map((mic: any) => (
    <div key={mic?.id} className="flex">
      <Card
        className="flex w-64 bg-slate-500 cursor-pointer hover:scale-105 shadow-md group height-[100px]"
        component="a"
      >
        <div className="flex flex-row text-slate-700 text-3xl font-semibold group-hover:text-blue-800 group-hover:underline">
          <div>{mic?.name}</div>
        </div>

        <div className="flex flex-row gap-1 text-green-700 text-sm">
          <div>{mic.address.number}</div>
          <div>{mic.address.streetName}</div>
        </div>
        <div className="text-sm font-bold">{mic.borough}</div>
        <div className="pt-8 flex flex-row gap-1">
          <div>{mic?.day}</div>
          <div>{formatTime(mic?.time)}</div>
        </div>
        <div className="flex flex-row  text-blue-700 ">
          <h1 className="text-sm text-blue-700">Cost: </h1>
          <div className="pl-1 text-sm"> {mic?.cost.costAmount}</div>
        </div>
        <div className="flex flex-row">
          <div className="text-sm">Notes: </div>
          <div>{mic?.notes}</div>
        </div>
      </Card>
    </div>
  ));
  return <div className="flex flex-row flex-wrap gap-3 ">{openMic}</div>;
};

export default MicDetailCard;

export type MicDetailCardProps = {
  mics: any;
};
