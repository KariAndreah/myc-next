'use client';

import { useContext } from 'react';
import { Map, APIProvider, Marker } from '@vis.gl/react-google-maps';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

const MicMap = () => {
  const position = { lat: 40.77, lng: -73.97 };
  const { mics } = useContext(MicDetailContext);

  console.log('Hi Kari from maps', mics);

  const micPins = mics?.map((mic: any) => (
    //  positionB = {lat:`${mic?.address.latitude}`, lng:`${mic?.address.longitude}` }

    <div key={mics?.id} className="flex shadow-md">
      <Marker
        position={{
          lat: parseInt(`${mic?.address.latitude}`, 10),
          lng: parseInt(`${mic?.address.longitude}`, 10),
        }}
      />
    </div>
  ));

  return (
    <div className="min-w-[calc(100vw-680px-32px)] w-[calc(100vw-680px-32px)] block mr-0 h-[calc(100vh - 195px)]">
      <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
        <div style={{ height: '60vh', width: '70vh', position: 'relative' }}>
          <Map zoom={8} center={position}>
            {micPins}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default MicMap;
