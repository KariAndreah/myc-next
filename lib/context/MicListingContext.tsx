'use client';

import { createContext } from 'react';
import { useMics } from '../hooks/useMics';
import { Mic } from '../../models/mic';
import { ClearQuery, GetQuery, SetQuery, useQuery } from '../hooks/useQuery';

export const MicListingContext = createContext<MicListingContextState>({
  mics: undefined,
  params: new URLSearchParams(),
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
});

export const MicListingContextProvider = ({ children }: MicListingContextProps) => {
  const [params, setQuery, clearQuery, getQuery] = useQuery();
  // const params = new URLSearchParams();

  // Get selected objects
  // const params = new URLSearchParams();
  // const params = useSearchParams();

  console.log('what is this', new URLSearchParams());

  const manhattanBorough = 'Manhattan';
  const search = {
    day: params?.get('day') || manhattanBorough,
    borough: params?.get('borough'),
    startTime: params?.get('startTime'),
    checked: params?.get('free'),
  };

  console.log('what is getQuery?', getQuery(params));

  console.log('finding search categaories', search);

  const { data, isLoading } = useMics(search);

  console.log('tracing', data, isLoading);

  if (!isLoading && !data?.mics) {
    return <h1>Not found *yet kARI :P</h1>;
  }

  return (
    <MicListingContext.Provider
      value={{ mics: data?.mics, params, setQuery, getQuery, clearQuery }}
    >
      {children}
    </MicListingContext.Provider>
  );
};

type MicListingContextState = {
  // clearQuery: ClearQuery;
  mics?: Mic[];
  // setQuery: SetQuery;
  // getQuery: GetQuery;
  params: any;
  currentPage?: number;
  endPage?: number;
  totalMics?: number;
  clearQuery: ClearQuery;
  getQuery: GetQuery;
  setQuery: SetQuery;
};

type MicListingContextProps = {
  children: React.ReactNode;
};
