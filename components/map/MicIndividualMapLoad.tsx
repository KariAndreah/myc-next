'use client';

import { TbMicrophoneOff } from 'react-icons/tb';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Loader } from '@mantine/core';
import changeTime from '@/lib/utils/changeTime';
import InfoMarker from './InfoMarker';

const MicIndividualMapLoad = ({ mics }: MicIndividualMapLoadType) => {
  const { isLoaded } = useJsApiLoader({
    id: `${process.env.NEXT_PUBLIC_MAP_ID}`,
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  });

  const micLat = Number(mics?.mic?.mic_address.latitude);
  const micLong = Number(mics?.mic?.mic_address.longitude);
  const position = { lat: micLat, lng: micLong };

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  if (mics?.totalMics === 0) {
    return (
      <div className="p-32">
        <TbMicrophoneOff size={32} />
        <h1>No mics Found</h1>
      </div>
    );
  }

  if (!mics) {
    return (
      <div className="flex justify-center">
        <Loader color="blue" />
      </div>
    );
  }

  if (mics?.mic === null) {
    return <></>;
  }

  return isLoaded ? (
    <div className="flex w-[100vw] top-auto  h-[65vh] lg:fixed lg:top-0 lg:right-0 lg:w-[50vw] lg:h-[95vh] pb-16 lg:pb-0">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
        <InfoMarker
          latitude={mics.mic?.mic_address.latitude}
          longitude={mics.mic?.mic_address.longitude}
          name={mics.mic?.name}
          venue={mics?.mic.mic_address.venue}
          day={mics.mic?.day}
          time={changeTime(mics.mic?.start_time)}
          cost={mics.mic?.cost_id === 1 ? 'Free' : mics.mic?.mic_cost.cost_amount}
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MicIndividualMapLoad;

export type MicIndividualMapLoadType = {
  mics: any;
};
