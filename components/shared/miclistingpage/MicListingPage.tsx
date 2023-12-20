'use client';

import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';

export function MicListingPage() {
  return (
    <PageLayout>
      <div className="flex flex-row gap-3 py-32 px-3 items-center justify-center">
        <MicCard />
        <MicMap />
      </div>
    </PageLayout>
  );
}
