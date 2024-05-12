import { MicDetailPage2 } from '@/components/micdetailpage/MicDetailPage';
import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Page() {
  return (
    <MicDetailContextProvider>
      <MicDetailPage2 />
    </MicDetailContextProvider>
  );
}
