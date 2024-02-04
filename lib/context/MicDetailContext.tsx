'use client';

import { createContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ClearQuery, GetQuery, SetQuery, useQuery } from '../hooks/useQuery';
import { useIndividualMics } from '../hooks/useIndividualMics';

export const MicDetailContext = createContext<MicDetailContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
});

export const MicDetailContextProvider = ({ children }: MicDetailContextProps) => {
  const [params, getQuery] = useQuery();
  // const params = new URLSearchParams();

  // Get selected objects
  // const params = new URLSearchParams();
  const params2 = usePathname();
  console.log('PARAMS', params);

  console.log('these are params2', params2.split('/')[2]);

  const searchDetails = getQuery();
  const search = {
    id: params2.split('/')[2],
  };

  // const kari = setQuery(search);
  // console.log('kari', kari);

  console.log('Find the mics detail - - - - - - - - - -', searchDetails);

  const { data, isLoading, refetch } = useIndividualMics(search);

  useEffect(() => {
    refetch();
    // You can now use the current URL
    // ...
  }, [search]);

  console.log('Response', data, isLoading);

  // if (!isLoading && !data?.mics) {
  //   return <h1>Not found *yet kARI :P</h1>;
  // }

  return <MicDetailContext.Provider value={{ mics: data }}>{children}</MicDetailContext.Provider>;
};

type MicDetailContextState = {
  // clearQuery: ClearQuery;
  mics?: any;
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

type MicDetailContextProps = {
  children: React.ReactNode;
};
