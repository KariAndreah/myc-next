'use client';

import { Suspense } from 'react';
import { MicListingPage2 } from '../../components/miclistingpage/MicListingPage2';
import { MicListingContextProvider } from '@/lib/context/MicListingContext';

export default function Page() {
  return (
    <Suspense>
      <MicListingContextProvider>
        <MicListingPage2 />
      </MicListingContextProvider>
    </Suspense>
  );
}
