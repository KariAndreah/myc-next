'use client';

import { Map, APIProvider } from '@vis.gl/react-google-maps';
import { TbMicrophoneOff } from 'react-icons/tb';
import MarkerWithInfowindow from './MarkerWithInfoWindow';
import changeTime from '@/lib/utils/changeTime';

const MicMap2 = ({ mics }: MicMap2Type) => {
  const position = { lat: 40.7447, lng: -73.936 };

  if (mics?.totalMics === 0) {
    return (
      <div className="p-32">
        <TbMicrophoneOff size={32} />
        <h1>No mics Found</h1>
      </div>
    );
  }

  const micPins = mics?.mics?.map((mic: any) => {
    console.log('mic map working');

    return (
      <div key={mic?.id} className="flex shadow-md">
        <MarkerWithInfowindow
          latitude={mic?.mic_address.latitude}
          longitude={mic?.mic_address.longitude}
          name={mic?.name}
          day={mic?.day}
          time={changeTime(mic?.start_time)}
        />
      </div>
    );
  });

  return (
    <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <div className="flex w-[100vw] top-auto  h-[65vh] lg:fixed lg:top-0 lg:right-0 lg:w-[50vw] lg:h-[95vh]">
        <Map zoom={10} center={position} mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}>
          {micPins}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MicMap2;

export type MicMap2Type = {
  mics: any;
};
