'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Card } from '@mantine/core';
// import { TbMicrophoneOff } from 'react-icons/tb';
import { MicListingContext } from '@/lib/context/MicListingContext';
import '@mantine/core/styles.css';

const MicCard = () => {
  const { mics, error } = useContext(MicListingContext);
  console.log('Need the context', mics);
  // console.log(mics);

  const router = useRouter();

  function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  }

  // if (mics === undefined) {
  //   return (
  //     <div className="p-32">
  //       <h1>Loading ...</h1>
  //     </div>
  //   );
  // }

  // if (mics.message === 'No mics found') {
  //   return (
  //     <div className="p-32 flex flex-col items-center">
  //       <h1 className="text-red-600">404 ... </h1>
  //       <TbMicrophoneOff size={64} color="rgb(220 38 38)" />
  //       <p className="text-red-600">No Mics Found</p>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="p-32">
        <h1>No mics Found</h1>
      </div>
    );
  }

  console.log('Mics in the MicCard', mics);
  // if (mics.has('message') === true) {
  //   return <div>No mics</div>;
  // }

  // let mic_cost: any;

  // if (mics.mics[0].cost_id === 1) {
  //   mic_cost = 'Free';
  // }

  const openMic = mics?.mics.map((mic: any) => (
    <Card
      className="flex w-[calc(50vw-22px)] lg:w-[calc(30vw-100px)] min-w-[350px] md:min-w-[200px] border-[12px] border-solid hover:border-blue-700 shadow-xl shadow-slate-300 hover:scale-105 rounded-lg group hover:cursor-pointer"
      component="a"
      onClick={() => router.replace(`./mics/${mic?.id}`)}
      key={mic?.id}
    >
      <div className="flex flex-row text-slate-700 font-semibold group-hover:text-blue-700 group-hover:underline">
        <h1 className="text-lg">{mic?.name}</h1>
      </div>

      <div className="flex flex-row gap-1 text-green-700">
        <p>{mic.mic_address.unit_number}</p>
        <p>{mic.mic_address.street_name}</p>
      </div>
      <p className="font-bold">{mic.borough}</p>
      <div className="pt-8 flex flex-row">
        <p className="pr-1">{mic?.day}</p>
        <p className="pr-1 ">{formatTime(mic?.start_time)}</p>
        <p className="font-semibold">{mic?.schedule}</p>
      </div>
      <div className="flex flex-row  text-blue-700">
        <p>Cost: </p>
        <p className="pl-1 "> {mic?.cost_id === 1 ? 'Free' : mic?.mic_cost.cost_amount}</p>
      </div>
    </Card>
  ));
  return <div className="flex flex-row flex-wrap gap-3 justify-center">{openMic}</div>;
};

export default MicCard;

export type MicCardProps = {
  mics: any;
};
