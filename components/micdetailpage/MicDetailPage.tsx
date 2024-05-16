'use client';

import { useContext } from 'react';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicPage from '../mic/MicPage';
import MicIndividualMapLoad from '../map/MicIndividualMapLoad';

export function MicDetailPage2() {
  const { mics, isLoading } = useContext(MicDetailContext);

  console.log('Mic Detail Page, Mic Detail Context:', mics);

  return (
    <PageLayout className="h-[100%]" hasBackButton>
      <MicPage />
      <MicIndividualMapLoad mics={mics} isLoading={isLoading} />
    </PageLayout>
  );
}
