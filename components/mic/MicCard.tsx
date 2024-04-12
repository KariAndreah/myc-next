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
    return `${hour % 12 || 12}:${minute}${hour < 12 ? 'am' : 'pm'}`;
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
      className="flex lg:max-w-[calc(50vw-50px)] min-w-[350px] border-[12px] border-solid hover:border-blue-700 shadow-xl shadow-slate-300  group hover:cursor-pointer"
      component="div"
      onClick={() => router.replace(`./mics/${mic?.id}`)}
      key={mic?.id}
      color="blue"
      withBorder
    >
      <div className="flex flex-row gap-10 ">
        <div className="pr-3 pt-2 border-r-2 border-[slate-700]border-black">
          <p className="pr-1 font-bold ">{mic?.day}</p>
          <p className="pr-1 ">{formatTime(mic?.start_time)}</p>
          <p className="text-slate-[700] text-xs pt-2">{mic?.mic_occurrence?.schedule}</p>
        </div>
        <div className="pt-1">
          <div className="flex text-[slate-700 ]font-semibold group-hover:text-blue-700 ">
            <h1 className="text-xl font-bold text-blue-700 group-hover:underline">{mic?.name}</h1>
          </div>

          <div className="flex flex-row gap-1 text-green-700">
            <p>{mic.mic_address.unit_number}</p>
            <p>{mic.mic_address.street_name},</p>
            <p className="font-bold">{mic.borough}</p>
          </div>
          <div className="flex flex-row  text-] pt-1">
            <p>Cost: </p>
            <p className="pl-1 "> {mic?.cost_id === 1 ? 'Free' : mic?.mic_cost.cost_amount}</p>
          </div>
        </div>
      </div>
    </Card>
  ));
  return <div className="flex flex-col gap-3 justify-center align-center">{openMic}</div>;
};

export default MicCard;

export type MicCardProps = {
  mics: any;
};
