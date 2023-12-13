'use client';

import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';

export function MicListingPage() {
  return (
    <PageLayout>
      <div className="flex-row">
        <MicCard mics={undefined} />
        <MicMap />
      </div>
    </PageLayout>
  );
}
