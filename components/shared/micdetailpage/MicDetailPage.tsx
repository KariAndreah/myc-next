'use client';

import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';
import PageLayout from '../pagelayout/PageLayout';
import MicPage from '../mic/MicPage';

export function MicDetailPage() {
  return (
    <MicDetailContextProvider>
      <PageLayout>
        <div className="flex-row">
          <MicPage />
        </div>
      </PageLayout>
    </MicDetailContextProvider>
  );
}
