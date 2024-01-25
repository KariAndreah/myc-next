'use client';

import { useContext } from 'react';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicMap from '../map/MicMap';
import MicPage from '../mic/MicPage';

export function MicDetailPage() {
  const { mics } = useContext(MicDetailContext);

  console.log(' this is what Im looking at', mics);
  return (
    <PageLayout className="h-[full]">
      <div className="flex flex-row py-16 ">
        <a href="/">
          <h1 className="underline hover:text-blue-800">Go Back to search</h1>
        </a>
        <div className="flex flex-1 justify-center items-center">
          <MicPage />
        </div>
        <div className="flex-1">
          <MicMap mics={mics} />
        </div>
      </div>
    </PageLayout>
  );
}
