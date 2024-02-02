'use client';

import { useSearchParams } from 'next/navigation';

export const handleSearch = ({ terms }: handleSearchTypes) => {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  if (terms?.day) {
    params.set('day', terms?.day);
  } else {
    params.delete('day');
  }

  // This is to set the array of boroughs into the terms
  if (terms?.borough) {
    terms.borough.map((s) => params.set('borough', s));
  } else {
    params.delete('borough');
  }

  // Setting up free or not
  if (terms?.cost) {
    if (terms?.cost === true) {
      params.set('cost', '1');
    }
  } else {
    params.delete('cost');
  }
  if (terms?.page) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    params.set('page', (terms?.page).toString());
  } else {
    params.delete('page');
  }

  console.log('Trying to create a search Function', params);
};

export type handleSearchTypes = {
  terms?: {
    borough?: string[];
    day?: string;
    startTime?: string;
    endTime?: string;
    page?: number;
    pageSize?: number;
    sortBy?: string;
    cost?: boolean;
  };
};
