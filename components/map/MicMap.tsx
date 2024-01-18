'use client';

import { useContext } from 'react';
import { Map, APIProvider, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MicListingContext } from '@/lib/context/MicListingContext';

const MicMap = () => {
  const position = { lat: 40.7447, lng: -73.936 };
  const { mics } = useContext(MicListingContext);

  console.log('Hi Kari from maps', mics);

  const micPins = mics?.content.map((mic: any) => (
    //  positionB = {lat:`${mic?.address.latitude}`, lng:`${mic?.address.longitude}` }

    <div key={mic?.id} className="flex shadow-md">
      <AdvancedMarker
        position={{
          lat: parseFloat(`${mic?.address.latitude}`),
          lng: parseFloat(`${mic?.address.longitude}`),
        }}
        // onMouseOver={{}}
      >
        <Pin />
      </AdvancedMarker>
    </div>
  ));

  console.log('MIC PINS', micPins);

  return (
    // <div className="min-w-[calc(100vw-680px-32px)] w-[calc(100vw-680px-32px)] block mr-0 h-[calc(100vh - 195px)]">
    <div className="flex-1">
      <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
        <div className="fixed top-0 right-0  w-[50vw] h-[95vh]">
          <Map zoom={11} center={position} mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}>
            {micPins}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default MicMap;
