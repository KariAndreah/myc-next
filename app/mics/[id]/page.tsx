import { Suspense } from 'react';
import { MicDetailPage2 } from '@/components/micdetailpage/MicDetailPage';
import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';

// Unsucessful Static for Digital Ocean Static
// export function generateStaticParams() {
//   const totalMics = Array.from(Array(1000).keys());
//   const openMic = totalMics.map((mic: any) => ({
//     id: mic.toString(),
//   }));

//   return openMic;
// }

export default function Page() {
  return (
    <Suspense>
      <MicDetailContextProvider>
        <MicDetailPage2 />
      </MicDetailContextProvider>
    </Suspense>
  );
}
