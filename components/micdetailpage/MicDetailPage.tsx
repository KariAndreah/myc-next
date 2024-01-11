'use client';

import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicPage from '../mic/MicPage';
import MicMap from '../map/MicMap';

export function MicDetailPage() {
  return (
    <MicDetailContextProvider>
      <PageLayout>
        <div className="flex flex-row justify-around py-16">
          <MicPage />
          <MicMap />
        </div>
      </PageLayout>
    </MicDetailContextProvider>
  );
}
