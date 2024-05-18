'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Card, Loader } from '@mantine/core';
// import { TbMicrophoneOff } from 'react-icons/tb';
import { MicListingContext } from '@/lib/context/MicListingContext';
import changeTime from '@/lib/utils/changeTime';
import ChatPagination2 from '../pagination/ChatPagination2';
import capitalizeDay from '@/lib/utils/capitalizeDay';
import { SearchResults } from './SearchResults';
import NoMicFound from '../not-found/NoMicFound';

const MicCard = () => {
  const { mics, isLoading } = useContext(MicListingContext);

  const router = useRouter();

  if (!mics) {
    return (
      <div className="flex pt-36 justify-center">
        <Loader color="blue" />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex pt-36 justify-center">
        <Loader color="blue" />
      </div>
    );
  }

  if (mics?.mics.length === 0) {
    return (
      <div className="flex justify-center pt-36">
        <NoMicFound />
      </div>
    );
  }

  const openMic = mics?.mics.map((mic: any) => (
    <Card
      component="div"
      onClick={() => {
        router.push(`/mics/${mic?.id}`);
      }}
      className="flex group  lg:max-w-[calc(50vw-50px)] min-w-[330px] border-[20px] border-solid hover:border-blue-700 shadow-xl shadow-slate-300 hover:cursor-pointer"
      key={mic?.id}
      withBorder
    >
      <div className="flex flex-row gap-3 lg:gap-10 ">
        <div className="pr-2 lg:pr-4 pt-2 border-r-2 border-[slate-700]   text-base">
          <p className="pr-1 font-bold">{capitalizeDay(mic?.day.toString())}</p>
          <p>{changeTime(mic?.start_time)}</p>
          <p className="text-slate-[700] text-sm pt-10">{mic?.mic_occurrence?.schedule}</p>
        </div>
        <div>
          <div className="flex whitespace-wrap text-[slate-700]font-semibold group-hover:text-blue-700 ">
            <h2 className="lg:text-3xl text-2xl font-bold text-blue-700 group-hover:decoration-dashed group-hover:underline">
              {mic?.name}
            </h2>
          </div>
          <div className="pr-1 text-slate-700 font-bold">{mic.mic_address.venue}</div>
          <div className="flex flex-row flex-wrap text-green-700 text-base">
            <p className="pr-1">{mic.mic_address.unit_number} </p>
            <p className="pr-1">{mic.mic_address.street_name},</p>
            <p className="font-bold">{capitalizeDay(mic.borough.toString())}</p>
          </div>
          <div className="flex flex-row pt-3 text-base">
            <p className="pr-1">Cost: </p>
            <p className="font-bold "> {mic?.cost_id === 1 ? 'Free' : mic?.mic_cost.cost_amount}</p>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <div className="flex flex-col justify-between p-6 pt-32 md:pt-40 bg-black-white bg-cover shadow-box-shadow-background min-h-[100vh]">
      {mics && <SearchResults />}
      <div className="flex flex-col gap-2">{openMic}</div>
      <div className="flex w-auto lg:w-[50vw] justify-center pt-16">
        {mics && <ChatPagination2 />}
      </div>
    </div>
  );
};

export default MicCard;

export type MicCardProps = {
  mics: any;
};
