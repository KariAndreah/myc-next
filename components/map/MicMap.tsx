'use client';

import { Map, APIProvider } from '@vis.gl/react-google-maps';
// import { useState } from 'react';
import MarkerWithInfowindow from './MarkerWithInfoWindow';
// const micTag = document.createElement('div');

const MicMap = ({ mics }: MicMapType) => {
  // const [infowindowShown, setInfowindowShown] = useState(false);

  // const toggleInfoWindow = () => setInfowindowShown((previousState) => !previousState);
  // const closeInfoWindow = () => setInfowindowShown(false);

  function formatTime(timeString: { split: (arg0: string) => [any, any] }) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return `${hour % 12 || 12}:${minute}${hour < 12 ? 'AM' : 'PM'}`;
  }

  const position = { lat: 40.7447, lng: -73.936 };

  const micPins = mics?.mics?.map((mic: any) => {
    //  positionB = {lat:`${mic?.address.latitude}`, lng:`${mic?.address.longitude}` }

    // micTag.textContent = mic?.name;

    // micTag.innerHTML = `<div>${mic?.name}</div> `;

    console.log('mic map working');

    return (
      <div key={mic?.id} className="flex shadow-md">
        {/* <AdvancedMarker
          // className="hover: scale-150 "
          position={{
            lat: parseFloat(`${mic?.latitude}`),
            lng: parseFloat(`${mic?.longitude}`),
          }}
          // onMouseOver={{}}
          title={`${mic?.name}`}
          onClick={toggleInfoWindow}
        >
          <Pin />
          {infowindowShown && <InfoWindow onCloseClick={closeInfoWindow}>{mic?.name}</InfoWindow>}
        </AdvancedMarker> */}
        <MarkerWithInfowindow
          latitude={mic?.mic_address.latitude}
          longitude={mic?.mic_address.longitude}
          name={mic?.name}
          day={mic?.day}
          time={formatTime(mic?.start_time)}
        />
      </div>
    );
  });

  console.log('MIC PINS', micPins);

  return (
    // <div className="min-w-[calc(100vw-680px-32px)] w-[calc(100vw-680px-32px)] block mr-0 h-[calc(100vh - 195px)]">
    <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <div className="fixed top-0 right-0  w-[50vw] h-[95vh]">
        <Map zoom={12} center={position} mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}>
          {micPins}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MicMap;

export type MicMapType = {
  mics: any;
};
