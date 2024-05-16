'use client';

import { useContext } from 'react';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';
import { MicListingContext } from '@/lib/context/MicListingContext';
import MicMapLoad from '../map/MicMapLoad';
// import ChatPagination2 from '../pagination/ChatPagination2';

export function MicListingPage2() {
  const { mics, params, isLoading } = useContext(MicListingContext);

  console.log('Params in the Mic Listing page:', params.toString());
  return (
    <PageLayout className="marker:pb-16" hasFilter hasMobileFilter>
      <MicCard />
      {/* <ChatPagination2 /> */}
      <MicMapLoad mics={mics} isLoading={isLoading} />
    </PageLayout>
  );
}
