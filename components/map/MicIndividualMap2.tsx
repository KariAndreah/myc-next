'use client';

import { Map, APIProvider } from '@vis.gl/react-google-maps';
import { TbMicrophoneOff } from 'react-icons/tb';
import MarkerWithInfowindow from './MarkerWithInfoWindow';
import changeTime from '@/lib/utils/changeTime';

const MicIndividualMap2 = ({ mics }: MicIndividualMap2Type) => {
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
      <div className="p-32">
        <TbMicrophoneOff size={32} />
        <h1>No mics Found</h1>
      </div>
    );
  }

  const micLat = Number(mics.mic?.mic_address.latitude);
  const micLong = Number(mics.mic?.mic_address.longitude);
  const positionB = { lat: micLat, lng: micLong };

  return (
    <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <div className="flex w-[100vw] h-[50vh] lg:fixed lg:top-0 lg:right-0 lg:w-[50vw] lg:h-[95vh] pb-16 lg:pb-4 bottom-0">
        <Map zoom={12} center={positionB} mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}>
          <div key={mics.mic?.id} className="flex shadow-md">
            <MarkerWithInfowindow
              latitude={mics.mic?.mic_address.latitude}
              longitude={mics.mic?.mic_address.longitude}
              name={mics.mic?.name}
              day={mics.mic?.day}
              time={changeTime(mics.mic?.start_time)}
            />
          </div>
        </Map>
      </div>
    </APIProvider>
  );
};

export default MicIndividualMap2;

export type MicIndividualMap2Type = {
  mics: any;
};
