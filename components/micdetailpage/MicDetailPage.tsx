'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { TbArrowLeft } from 'react-icons/tb';
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
    <PageLayout className="h-[100%]">
      <div className="flex flex-row py-16 justify-start gap-10">
        <div className="flex-1 px-10">
          <Button onClick={() => router.back()} leftSection={<TbArrowLeft size={20} />}>
            Go Back to search
          </Button>
          <div className="pt-10">
            <MicPage />
          </div>
        </div>
        <div className="hidden flex-1 lg:flex">
          <MicMap mics={mics} />
        </div>
      </div>
    </PageLayout>
  );
}
