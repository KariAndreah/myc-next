'use client';

import { useContext } from 'react';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicPage from '../mic/MicPage';
import MicIndividualMap2 from '../map/MicIndividualMap2';
import { BackButton } from '../buttons/BackButton';

export function MicDetailPage2() {
  const { mics } = useContext(MicDetailContext);

  console.log('Mic Detail Page, Mic Detail Context:', mics);

  return (
    <PageLayout className="h-[100%]">
      <div className="flex flex-col py-16 px-3 gap-3">
        <BackButton />
        <MicPage />
      </div>
      <MicIndividualMap2 mics={mics} />
    </PageLayout>
  );
}
