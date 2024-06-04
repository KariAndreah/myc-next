import { useContext } from 'react';
import { MicDetailContext } from '@/lib/context/MicDetailContext';

const MicHosts = () => {
  const { mics } = useContext(MicDetailContext);

  const { mic } = mics;

  const hostLoop = mics?.mic?.host_mics.map((x: any, index: any) => (
    <p key={index}>{x.mic_host.first_host}</p>
  ));
  const emailLoop = mics?.mic?.host_mics.map((x: any, index: any) => (
    <p key={index}>{x.mic_host.email}</p>
  ));
  const instagramLoop = mics?.mic?.host_mics.map((x: any, index: any) => (
    <p key={index}>{x.mic_host.instagram}</p>
  ));

  return (
    <div>
      <div className="flex flex-row px-4 pt-3 text-base">
        <p className="pr-1 font-bold">Hosts: </p>
        <p>{mic?.host_mics[0]?.first_host}</p>
        <div>{hostLoop}</div>
      </div>
      {mics.mic.host_mics[0].mic_host.email && (
        <div className="flex flex-row text-xs px-6">
          <p className="pr-1 font-bold">Email: </p>
          <div>{emailLoop}</div>
        </div>
      )}
      {mics.mic.host_mics[0].mic_host.instagram && (
        <div className="flex flex-row text-xs px-6">
          <p className="pr-1 font-bold">Instagram: </p>
          <div>{instagramLoop}</div>
        </div>
      )}
    </div>
  );
};

export default MicHosts;
