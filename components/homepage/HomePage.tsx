'use client';

import SearchCard from '../searchcard/SearchCard';
import { Title } from '../title/Title';
import PageLayout from '../pagelayout/PageLayout';

export function HomePage() {
  return (
    <PageLayout className="">
      <div className="flex flex-col items-center justify-center min-h-[100vh] md:gap-6 gap-2 bg-black-white bg-cover shadow-box-shadow-background pb-32 pt-20 md:pt-0">
        <Title />
        <SearchCard />
      </div>
    </PageLayout>
  );
}
