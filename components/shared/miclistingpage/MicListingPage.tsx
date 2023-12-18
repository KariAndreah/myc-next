'use client';

import { MicListingContextProvider } from '@/lib/context/MicListingContext';
import MicMap from '../map/MicMap';
import MicCard from '../mic/MicCard';
import PageLayout from '../pagelayout/PageLayout';

export function MicListingPage() {
  return (
    <MicListingContextProvider>
      <PageLayout>
        <div className="flex-row">
          <MicCard />
          <MicMap />
        </div>
      </PageLayout>
    </MicListingContextProvider>
  );
}
