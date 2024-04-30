'use client';

import { Map, APIProvider } from '@vis.gl/react-google-maps';
// import { useState } from 'react';
import { TbMicrophoneOff } from 'react-icons/tb';
import MarkerWithInfowindow from './MarkerWithInfoWindow';
import changeTime from '@/lib/utils/changeTime';
// const micTag = document.createElement('div');

const MicIndividualMap = ({ mics }: MicIndividualMapType) => {
  // const [infowindowShown, setInfowindowShown] = useState(false);

  // const toggleInfoWindow = () => setInfowindowShown((previousState) => !previousState);
  // const closeInfoWindow = () => setInfowindowShown(false);

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

  //   const position = { lat: 40.7447, lng: -73.936 };

  const micLat = Number(mics.mic?.mic_address.latitude);
  const micLong = Number(mics.mic?.mic_address.longitude);
  const positionB = { lat: micLat, lng: micLong };

  //   const micPins = mics?.mics?.map((mic: any) => {
  //     //  positionB = {lat:`${mic?.address.latitude}`, lng:`${mic?.address.longitude}` }

  //     // micTag.textContent = mic?.name;

  //     // micTag.innerHTML = `<div>${mic?.name}</div> `;

  //     console.log('mic map working');

  //     return (
  //       <div key={mic?.id} className="flex shadow-md">
  //         {/* <AdvancedMarker
  //           // className="hover: scale-150 "
  //           position={{
  //             lat: parseFloat(`${mic?.latitude}`),
  //             lng: parseFloat(`${mic?.longitude}`),
  //           }}
  //           // onMouseOver={{}}
  //           title={`${mic?.name}`}
  //           onClick={toggleInfoWindow}
  //         >
  //           <Pin />
  //           {infowindowShown && <InfoWindow onCloseClick={closeInfoWindow}>{mic?.name}</InfoWindow>}
  //         </AdvancedMarker> */}
  //         <MarkerWithInfowindow
  //           latitude={mic?.mic_address.latitude}
  //           longitude={mic?.mic_address.longitude}
  //           name={mic?.name}
  //           day={mic?.day}
  //           time={changeTime(mic?.start_time)}
  //         />
  //       </div>
  //     );
  //   });

  return (
    // <div className="min-w-[calc(100vw-680px-32px)] w-[calc(100vw-680px-32px)] block mr-0 h-[calc(100vh - 195px)]">
    <APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <div className="flex w-auto top-auto right-auto h-auto lg:fixed lg:top-0 lg:right-0 lg:w-[50vw] lg:h-[95vh]">
        <Map zoom={12} center={positionB} mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}>
          <div key={mics.mic?.id} className="flex shadow-md">
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

export default MicIndividualMap;

export type MicIndividualMapType = {
  mics: any;
};
