'use client';

import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicMap from '../map/MicMap';
import MicPage from '../mic/MicPage';

export function MicDetailPage() {
  return (
    <MicDetailContextProvider>
      <PageLayout className="h-[full]">
        <div className="flex flex-row py-16 ">
          <div className="flex-1 justify-center items-center">
            <MicPage />
          </div>
          <MicMap />
        </div>
      </PageLayout>
    </MicDetailContextProvider>
  );
}
