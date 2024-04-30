'use client';

import { MicDetailPage2 } from '@/components/micdetailpage/MicDetailPage2';
import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';

export default function Page() {
  return (
    <MicDetailContextProvider>
      <MicDetailPage2 />
    </MicDetailContextProvider>
  );
}
