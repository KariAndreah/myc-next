'use client';

import { useContext } from 'react';
import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';
import MicPagination from '../pagination/Pagination';
import { MicListingContext } from '@/lib/context/MicListingContext';

export function MicListingPage() {
  const { mics, params } = useContext(MicListingContext);

  console.log('these are the Params', params.toString());
  return (
    <PageLayout className="h-[full]" hasFilter hasMobileFilter>
      <div className="flex flex-col pb-32 px-3 justify-start">
        <div className="flex flex-row justify-start pb-5 mt-32">
          <div className="flex-1 pt-16 min-h-[800px]">
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
