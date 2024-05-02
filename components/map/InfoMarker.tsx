import React, { useState } from 'react';
import { MarkerF, InfoWindow } from '@react-google-maps/api';
import capitalizeDay from '@/lib/utils/capitalizeDay';

const InfoMarker = ({ latitude, longitude, name, day, time, venue, cost }: InfoMarkerProps) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);

  return (
    <MarkerF
      onClick={() => setInfowindowOpen(true)}
      position={{
        lat: parseFloat(`${latitude}`),
        lng: parseFloat(`${longitude}`),
      }}
      title={name}
    >
      {infowindowOpen && (
        <InfoWindow onCloseClick={() => setInfowindowOpen(false)}>
          <div>
            <p className="font-semibold">{name}</p>
            <p>{venue}</p>
            <div className="flex flex-row">
              <p className=" pr-1">{capitalizeDay(day)}</p>
              <p className="pr-1">{time}</p>
            </div>
            <p className="font-bold "> {cost}</p>
          </div>
        </InfoWindow>
      )}
    </MarkerF>
  );
};

export default InfoMarker;

export type InfoMarkerProps = {
  latitude: number;
  longitude: number;
  name: any;
  day: any;
  time: any;
  venue: any;
  cost: any;
};
