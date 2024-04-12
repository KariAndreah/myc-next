import { MicDetailPage } from '@/components/micdetailpage/MicDetailPage';
import { MicDetailContextProvider } from '@/lib/context/MicDetailContext';

export default function Page() {
  return (
    <MicDetailContextProvider>
      <MicDetailPage />
    </MicDetailContextProvider>
  );
}
