import React, { useState } from 'react';
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const MarkerWithInfowindow = ({
  latitude,
  longitude,
  name,
  day,
  time,
}: MarkerWithInfowindowProps) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{
          lat: parseFloat(`${latitude}`),
          lng: parseFloat(`${longitude}`),
        }}
        title={name}
      />
      {infowindowOpen && (
        <InfoWindow anchor={marker} maxWidth={200} onCloseClick={() => setInfowindowOpen(false)}>
          <div>
            <p className="font-semibold">{name}</p>
            <p>{day}</p>
            <p>{time}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default MarkerWithInfowindow;

export type MarkerWithInfowindowProps = {
  latitude: number;
  longitude: number;
  name: any;
  day: any;
  time: any;
};
