'use client';

import SearchCard from '../searchcard/SearchCard';
import { Title } from '../title/Title';
import PageLayout from '../pagelayout/PageLayout';

export function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center py-18">
        <Title />
        <SearchCard
          borough={undefined}
          setBorough={undefined}
          day={undefined}
          setDay={undefined}
          checked={undefined}
          setChecked={undefined}
          startTime={undefined}
          setStartTime={undefined}
        />
      </div>
    </PageLayout>
  );
}
