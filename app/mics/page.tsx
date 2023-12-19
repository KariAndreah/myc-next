import { MicListingPage } from '../../components/shared/miclistingpage/MicListingPage';
import { MicListingContextProvider } from '@/lib/context/MicListingContext';

export default function Page() {
  return (
    <MicListingContextProvider>
      <MicListingPage />
    </MicListingContextProvider>
  );
}
