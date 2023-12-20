'use client';

import { createContext } from 'react';
import { usePathname } from 'next/navigation';
import { ClearQuery, GetQuery, SetQuery } from '../hooks/useQuery';
import { useIndividualMics } from '../hooks/useIndividualMics';

export const MicDetailContext = createContext<MicDetailContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
});

export const MicDetailContextProvider = ({ children }: MicDetailContextProps) => {
  // const [params, setQuery, clearQuery, getQuery] = useQuery();
  // const params = new URLSearchParams();

  // Get selected objects
  // const params = new URLSearchParams();
  const params = usePathname();

  const search = {
    id: params?.substring(6),
  };

  // const kari = setQuery(search);
  // console.log('kari', kari);

  console.log('finding search categaories', search);

  const { data, isLoading } = useIndividualMics(search);

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
