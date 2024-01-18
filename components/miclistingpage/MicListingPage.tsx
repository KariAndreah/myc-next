'use client';

import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';
import MicPagination from '../pagination/Pagination';

export function MicListingPage() {
  return (
    <PageLayout className="h-[full]">
      <div className="flex flex-col pb-32 px-3 justify-start">
        <div className="flex flex-row justify-start pb-5 gap-3">
          <div className="flex-1 pt-16 min-h-[800px]">
            <a href="/">
              <h1 className="underline hover:text-blue-800">Go Back to search</h1>
            </a>
            <MicCard />
            <div className="flex pt-12 justify-center">
              <MicPagination />
            </div>
          </div>
          <MicMap />
        </div>
      </div>
    </PageLayout>
  );
}
