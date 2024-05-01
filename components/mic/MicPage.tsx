'use client';

import { useContext } from 'react';
import { Container } from '@mantine/core';
import '@mantine/core/styles.css';
// import { TbMicrophoneOff } from 'react-icons/tb';
import { TbMicrophoneOff } from 'react-icons/tb';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import changeTime from '@/lib/utils/changeTime';
import { BackButton } from '../buttons/BackButton';

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

  if (!mics) {
    return (
      <div className="p-32">
        <h1>Loading ...</h1>
      </div>
    );
  }

  console.log('This is the mics in micPage', mics);

  if (mics?.totalMics === 0) {
    return (
      <div className="p-32">
        <TbMicrophoneOff size={32} />
        <h1>No mics Found</h1>
      </div>
    );
  }

  // if (mics.message === 'No mics found') {
  //   return (
  //     <div className="p-32 flex flex-col">
  //       <h1>404 ... </h1>
  //       <TbMicrophoneOff size={32} />
  //       <p>No Mics Found</p>
  //     </div>
  //   );
  // }

  const { mic } = mics;

  console.log('This is on the PAGE', mics);

  console.log('MicPage: Mic host is passing', mics.mic.host_mics);

  // const hostLoop = mics?.mic.host_mics.map((x: any) => x.mic_host.first_host);

  const hostLoop = mics?.mic.host_mics.map((x: any) => <p>{x.mic_host.first_host}</p>);

  console.log('MicPage: Are these the hosts?', hostLoop);

  return (
    <div className="flex flex-col gap-6 lg:w-[50%] w-auto pb-16 min-w-[300px]">
      <div className="pl-16">
        <BackButton />
      </div>
      <Container fluid className="flex-col bg-white p-12 ">
        <div className="flex flex-col text-slate-700 text-4xl pt-5">
          <h1 className="font-bold">{mic?.name}</h1>
          <h5>{mic?.venue}</h5>
          <h6>{mic?.neighborhood}</h6>
        </div>
        <div className="flex flex-row gap-1 text-green-700">
          <p>{mic?.mic_address.unit_number}</p>
          <p>{mic?.mic_address.street_name},</p>
          <p>{mic?.mic_address.zipcode},</p>
          <p className="font-semibold">{mic?.borough}</p>
        </div>
        <div className="flex flex-row pt-8">
          <p className="pr-1">{mic?.day}</p>
          <p className="pr-1">{changeTime(mic?.start_time)}</p>
          <p className="font-semibold">{mic?.schedule}</p>
          <p className="font-semibold">{mic?.mic_occurrence?.schedule}</p>
        </div>

        <div className="flex flex-row">
          <p className="pr-1">Cost: </p>
          <p>{mic?.cost_id === 1 ? 'Free' : mic?.mic_cost.cost_amount}</p>
        </div>
        <div className="flex flex-row">
          <p className="pr-1">Hosts: </p>
          <p>{mic?.host_mics[0]?.first_host}</p>
          <p>{hostLoop}</p>
        </div>
        <div className="flex flex-row">
          <p className="pr-1">Notes: </p>
          <p>{mic?.signup_instructions.instructions}</p>
        </div>
        {/* <div>
        <h1>Reviews: </h1>
      </div> */}
      </Container>
    </div>
  );
};

export default MicPage;

export type MicPageProps = {
  mics?: any;
};
