'use client';

import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';
import MicPagination from '../pagination/Pagination';

export function MicListingPage() {
  return (
    <PageLayout>
      <div className="flex flex-col py-32 px-3 items-center justify-center">
        <div className="flex flex-row pb-5 justify-around">
          <MicCard />
          <MicMap />
        </div>
        <MicPagination />
      </div>
    </PageLayout>
  );
}
