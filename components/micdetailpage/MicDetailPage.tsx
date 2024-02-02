'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicMap from '../map/MicMap';
import MicPage from '../mic/MicPage';

export function MicDetailPage() {
  const { mics } = useContext(MicDetailContext);
  const router = useRouter();

  console.log('return in details', mics);

  console.log(' this is what Im looking at', mics);
  return (
    <PageLayout className="h-[full]">
      <div className="flex flex-row py-16 ">
        <Button onClick={() => router.back()}>Go Back to search</Button>
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
