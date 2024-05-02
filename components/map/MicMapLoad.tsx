'use client';

import { TbMicrophoneOff } from 'react-icons/tb';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import InfoMarker from './InfoMarker';
import changeTime from '@/lib/utils/changeTime';

const MicMapLoad = ({ mics }: MicMapLoad) => {
  const { isLoaded } = useJsApiLoader({
    id: `${process.env.NEXT_PUBLIC_MAP_ID}`,
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  });

  const position = { lat: 40.7447, lng: -73.936 };

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

  const micPins = mics?.mics?.map((mic: any) => (
    <div key={mic?.id} className="flex shadow-md">
      <InfoMarker
        latitude={mic?.mic_address.latitude}
        longitude={mic?.mic_address.longitude}
        name={mic?.name}
        venue={mic.mic_address.venue}
        day={mic?.day}
        time={changeTime(mic?.start_time)}
        cost={mic?.cost_id === 1 ? 'Free' : mic?.mic_cost.cost_amount}
        key={mic?.id}
      />
    </div>
  ));

  return isLoaded ? (
    <div className="flex w-[100vw] top-auto  h-[65vh] lg:fixed lg:top-0 lg:right-0 lg:w-[50vw] lg:h-[95vh] pb-16 lg:pb-0">
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
        {micPins}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MicMapLoad;

export type MicMapLoad = {
  mics: any;
};
