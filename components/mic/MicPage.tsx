'use client';

import { useContext } from 'react';
import { Container, Loader } from '@mantine/core';
import '@mantine/core/styles.css';
// import { TbMicrophoneOff } from 'react-icons/tb';
import { TbMicrophoneOff } from 'react-icons/tb';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import changeTime from '@/lib/utils/changeTime';
// import { BackButton } from '../buttons/BackButton';
import capitalizeDay from '@/lib/utils/capitalizeDay';
import NoMicFound from '../not-found/NoMicFound';

const MicPage = () => {
  const { mics, isLoading } = useContext(MicDetailContext);
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
      <div className="flex justify-center">
        <Loader color="blue" />
        <h1>...Loading</h1>
      </div>
    );
  }

  if (mics?.totalMics === 0) {
    return (
      <div className="flex p-32 justify-center">
        <TbMicrophoneOff size={32} />
        <h1>No mics Found</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader color="blue" />
        {/* <TbMicrophoneOff size={32} />
        <h1>No mics Found</h1> */}
      </div>
    );
  }

  if (mics.mic === null) {
    return (
      <div className="flex justify-center pt-36">
        <NoMicFound />
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

  // console.log('MicPage: Mic host is passing', mics?.mic.host_mics);

  // const hostLoop = mics?.mic.host_mics.map((x: any) => x.mic_host.first_host);

  const hostLoop = mics?.mic?.host_mics.map((x: any) => <p>{x.mic_host.first_host}</p>);

  console.log('MicPage: Are these the hosts?', hostLoop);

  return (
    <div className="flex flex-col gap-6 lg:w-[50%] w-auto py-32 min-w-[300px] bg-black-white bg-cover shadow-box-shadow-background lg:min-h-[100vh]  text-slate-700">
      {/* <div className="pl-6">
        <BackButton />
      </div> */}
      <Container fluid className="flex flex-col-reverse md:flex-row p-3 pb-6 bg-white ">
        <div className="flex flex-row md:flex-col pt-6 pl-0 lg:pl-2 pr-6 border-none md:border-[slate-500] md:border-solid border-r-2 text-base md:text-3xl ">
          <p className="pr-1 font-bold pl-4 md:pl-0">{capitalizeDay(mic?.day.toString())}</p>
          <p className="pr-1">{changeTime(mic?.start_time)}</p>
          <p className="font-semibold pt-6">{mic?.schedule}</p>
          <p className="font-semibold text-base md:text-xl">{mic?.mic_occurrence?.schedule}</p>
          <div className="flex flex-row text-green-700 text-base md:text-xl pl-3 md:pl-0 ">
            <p>Cost: </p>
            <p className="font-bold">{mic?.cost_id === 1 ? 'Free' : mic?.mic_cost.cost_amount}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col text-slate-700 text-4xl pt-5 px-4 ">
            <h1 className="font-bold">{mic?.name}</h1>
            <h5 className="text-base">{mic?.mic_address.venue}</h5>
            <h6 className="text-base">{mic?.neighborhood}</h6>
          </div>
          <div className="flex flex-row gap-1 text-blue-700 px-4 flex-wrap">
            <p>{mic?.mic_address.unit_number}</p>
            <p>{mic?.mic_address.street_name},</p>
            <p className="font-semibold">{capitalizeDay(mic.borough.toString())}</p>
          </div>

          <div className="flex flex-row px-4 pt-5 text-base">
            <p className="pr-1 font-bold">Hosts: </p>
            <p>{mic?.host_mics[0]?.first_host}</p>
            <p>{hostLoop}</p>
          </div>
          <div className="flex flex-col px-4 pt-2">
            <div className="flex">
              <p className="pr-1 font-bold">Signup: </p>
              <p>{mic?.signup_instructions.instructions}</p>
            </div>
            {mic?.email_address && (
              <div className="flex">
                <p>Email address:</p>
                <p>{mic?.email_address}</p>
              </div>
            )}
            {mic?.instagram && (
              <div className="flex">
                <p>Instagram:</p>
                <p>{mic?.instagram}</p>
              </div>
            )}
            {mic?.website && (
              <div className="flex text-base">
                <p className="font-bold pr-1">Website:</p>
                <p>
                  <a href={mic?.website}>{mic?.website}</a>
                </p>
              </div>
            )}
          </div>
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
