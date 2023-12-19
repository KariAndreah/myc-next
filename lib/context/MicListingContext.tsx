'use client';

import { createContext } from 'react';
import { useSearchParams } from 'next/navigation';
import { useMics } from '../hooks/useMics';
import { Mic } from '../../models/mic';
import { ClearQuery, GetQuery, SetQuery } from '../hooks/useQuery';

export const MicListingContext = createContext<MicListingContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
});

export const MicListingContextProvider = ({ children }: MicListingContextProps) => {
  // const [params, setQuery, clearQuery, getQuery] = useQuery();
  // const params = new URLSearchParams();

  // Get selected objects
  // const params = new URLSearchParams();
  const params = useSearchParams();

  const search = {
    day: params?.get('day'),
    borough: params?.get('borough'),
    startTime: params?.get('startTime'),
    checked: params?.get('free'),
  };

  // const kari = setQuery(search);
  // console.log('kari', kari);

  console.log('finding search categaories', search);

  const { data, isLoading } = useMics(search);

  console.log(useMics(search).data);

  console.log('Response here', data, isLoading);

  // Commented this out but data is reloading and not working
  // if (!isLoading && !data?.mics) {
  //   return <h1>Not found *yet kARI :P</h1>;
  // }

  return (
    <MicListingContext.Provider value={{ mics: data?.mics }}>{children}</MicListingContext.Provider>
  );
};

type MicListingContextState = {
  // clearQuery: ClearQuery;
  mics?: Mic[];
  refetch?: any;
  // setQuery: SetQuery;
  // getQuery: GetQuery;
  params?: any;
  currentPage?: number;
  endPage?: number;
  totalMics?: number;
  clearQuery?: ClearQuery;
  getQuery?: GetQuery;
  setQuery?: SetQuery;
};

type MicListingContextProps = {
  children: React.ReactNode;
};
