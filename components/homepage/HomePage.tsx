import SearchCard from '../searchcard/SearchCard';
import { Title } from '../title/Title';
import PageLayout from '../pagelayout/PageLayout';

export function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[100vh] md:gap-6 gap-2 pb-32 pt-14 md:pt-0">
        <Title />
        <SearchCard />
      </div>
    </PageLayout>
  );
}
