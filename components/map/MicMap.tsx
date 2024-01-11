'use client';

import { useContext } from 'react';
import { Map, APIProvider, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MicListingContext } from '@/lib/context/MicListingContext';

const MicMap = () => {
  const position = { lat: 40.73, lng: -74.0 };
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
    <div>
      <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
        <div className="w-[50vw] h-[60vh]">
          <Map zoom={15} center={position} mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}>
            {micPins}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default MicMap;
