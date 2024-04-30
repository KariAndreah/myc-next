'use client';

import { useContext } from 'react';
import MicMap2 from '../map/MicMap2';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';
import { MicListingContext } from '@/lib/context/MicListingContext';
// import ChatPagination2 from '../pagination/ChatPagination2';

export function MicListingPage2() {
  const { mics, params } = useContext(MicListingContext);

  console.log('Params in the Mic Listing page:', params.toString());
  return (
    <PageLayout className="h-[full] pb-16" hasFilter hasMobileFilter>
      <MicCard />
      {/* <ChatPagination2 /> */}
      <MicMap2 mics={mics} />
    </PageLayout>
  );
}
