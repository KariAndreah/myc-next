'use client';

import { useContext } from 'react';
import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';
import MicPagination from '../pagination/Pagination';
import { MicListingContext } from '@/lib/context/MicListingContext';
import Filter from '../filter/Filter';

export function MicListingPage() {
  const { mics } = useContext(MicListingContext);

  return (
    <PageLayout className="h-[full]">
      <Filter />
      <div className="flex flex-col pb-32 px-3 justify-start">
        <div className="flex flex-row justify-start pb-5">
          <div className="flex-1 pt-16 min-h-[800px]">
            <a href="/">
              <h1 className="underline hover:text-blue-800">Go Back to search</h1>
            </a>
            <MicCard />
            <div className="flex pt-12 justify-center">
              <MicPagination />
            </div>
          </div>
          <div className="hidden flex-1 lg:flex">
            <MicMap mics={mics} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
