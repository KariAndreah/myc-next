'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Card } from '@mantine/core';
import { MicListingContext } from '@/lib/context/MicListingContext';

import '@mantine/core/styles.css';

const MicCard = () => {
  const { mics } = useContext(MicListingContext);
  console.log('Need the context', mics);
  // console.log(mics);

  const router = useRouter();

  function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  }

  if (mics === undefined) {
    return (
      <div className="p-32">
        <h1>Loading ...</h1>
      </div>
    );
  }

  // let mic_cost: any;

  // if (mics.mics[0].cost_id === 1) {
  //   mic_cost = 'Free';
  // }

  const openMic = mics?.mics.map((mic: any) => (
    <div
      key={mic?.id}
      className="flex w-[calc(50vw-22px)] lg:w-[calc(30vw-100px)] min-w-[350px] md:min-w-[200px] border-[1px] border-stone-300 shadow-lg shadow-slate-300 hover:scale-105 hover:border-blue-800"
    >
      <Card
        className="w-[100%] flex  bg-slate-500 cursor-pointer  group"
        component="a"
        onClick={() => router.replace(`./mics/${mic?.id}`)}
      >
        <div className="flex flex-row text-slate-700 text-3xl font-semibold group-hover:text-blue-800 group-hover:underline">
          <div>{mic?.name}</div>
        </div>

        <div className="flex flex-row gap-1 text-green-700 text-sm">
          <div>{mic.unit_number}</div>
          <div>{mic.street_name}</div>
        </div>
        <div className="text-sm font-bold">{mic.borough}</div>
        <div className="pt-8 flex flex-row">
          <div className="pr-1">{mic?.day}</div>
          <div className="pr-1 ">{formatTime(mic?.start_time)}</div>
          <div className="font-semibold">{mic?.schedule}</div>
        </div>
        <div className="flex flex-row ">
          <h1 className="text-sm text-blue-700">Cost: </h1>
          <div className="pl-1 text-sm"> {mic?.cost_id === 1 ? 'Free' : mic?.cost_amount}</div>
        </div>
      </Card>
    </div>
  ));
  return <div className="flex flex-row flex-wrap gap-3 justify-center">{openMic}</div>;
};

export default MicCard;

export type MicCardProps = {
  mics: any;
};
