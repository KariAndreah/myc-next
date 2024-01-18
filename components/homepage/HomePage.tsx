'use client';

import SearchCard from '../searchcard/SearchCard';
import { Title } from '../title/Title';
import PageLayout from '../pagelayout/PageLayout';

export function HomePage() {
  return (
    <PageLayout className="h-[100%]">
      <div className="flex flex-col items-center justify-center py-36 h-full ">
        <Title />
        <SearchCard />
      </div>
    </PageLayout>
  );
}
