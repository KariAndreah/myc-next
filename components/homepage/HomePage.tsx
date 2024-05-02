'use client';

import SearchCard from '../searchcard/SearchCard';
import { Title } from '../title/Title';
import PageLayout from '../pagelayout/PageLayout';

export function HomePage() {
  return (
    <PageLayout className="">
      <div className="flex flex-col items-center justify-center  h-[100vh] gap-6 bg-black-white bg-cover shadow-box-shadow-background">
        <Title />
        <SearchCard />
      </div>
    </PageLayout>
  );
}
