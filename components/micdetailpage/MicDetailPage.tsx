'use client';

import { useContext } from 'react';
import { MicDetailContext } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicPage from '../mic/MicPage';
import MicIndividualMapLoad from '../map/MicIndividualMapLoad';

export function MicDetailPage2() {
  const { mics } = useContext(MicDetailContext);

  return (
    <PageLayout hasBackButton>
      <MicPage />
      <MicIndividualMapLoad mics={mics} />
    </PageLayout>
  );
}
