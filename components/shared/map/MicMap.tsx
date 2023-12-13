'use client';

import { Map, APIProvider } from '@vis.gl/react-google-maps';

const MicMap = () => {
  const position = { lat: 40.77, lng: -73.97 };

  return (
    <APIProvider apiKey={`${process.env.REACT_APP_API_KEY}`}>
      <div style={{ height: '50vh', width: '50vw' }}>
        <Map zoom={13} center={position} />
      </div>
    </APIProvider>
  );
};

export default MicMap;
