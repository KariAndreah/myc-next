'use client';

import { useContext } from 'react';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicPage from '../mic/MicPage';
import MicIndividualMap2 from '../map/MicIndividualMap';

export function MicDetailPage2() {
  const { mics } = useContext(MicDetailContext);

  console.log('Mic Detail Page, Mic Detail Context:', mics);

  return (
    <PageLayout className="h-[100%]">
      <MicPage />
      <MicIndividualMap2 mics={mics} />
    </PageLayout>
  );
}
