'use client';

import { createContext } from 'react';
import { useMics } from '../hooks/useMics';
// import { ClearQuery, GetQuery, SetQuery, useQuery } from "../hooks/useQuery";
import { Mic } from '../../models/mic';

export const MicListingContext = createContext<MicListingContextState>({
  currentPage: 0,
  endPage: 0,
  params: new URLSearchParams(),
  mics: undefined,
  totalMics: 0,
  // clearQuery: () => null,
  // getQuery: () => null,
  // setQuery: () => null,
});

export const MicListingContextProvider = ({ children }: MicListingContextProps) => {
  // const [params, setQuery, clearQuery, getQuery] = useQuery();

  // Get selected objects
  const params = new URLSearchParams();

  const search = {
    day: params?.get('day'),
    borough: params?.get('borough'),
    startTime: params?.get('startTime'),
  };

  const { data, isLoading } = useMics(search);

  if (!isLoading && !data?.mics) {
    return <h1>Not found *yet kARI :P</h1>;
  }

  return (
    <MicListingContext.Provider value={{ mics: data?.mics, params }}>
      {children}
    </MicListingContext.Provider>
  );
};

type MicListingContextState = {
  // clearQuery: ClearQuery;
  mics?: Mic[];
  // setQuery: SetQuery;
  // getQuery: GetQuery;
  params: URLSearchParams;
  currentPage?: number;
  endPage?: number;
  totalMics?: number;
};

type MicListingContextProps = {
  children: React.ReactNode;
};
