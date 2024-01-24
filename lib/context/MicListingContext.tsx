'use client';

import { createContext, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import { useMics } from '../hooks/useMics';
import { ClearQuery, GetQuery, SetPagination, SetQuery, useQuery } from '../hooks/useQuery';

export const MicListingContext = createContext<MicListingContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
  setPagination: () => null,
});

export const MicListingContextProvider = ({ children }: MicListingContextProps) => {
  const [params, setQuery, clearQuery, getQuery, setPagination] = useQuery();

  const search = getQuery();

  console.log('SEARCH CATEGORIES I AM PASSING', search);

  const { data, isLoading, refetch } = useMics(search);

  useEffect(() => {
    refetch();
    // You can now use the current URL
    // ...
  }, [search]);

  // console.log(useMics(search).data);

  console.log('MIC LISTING RESPONSE ', data, isLoading);

  // Commented this out but data is reloading and not working
  // if (!isLoading && !data?.mics) {
  //   return <h1>Loading :P</h1>;
  // }

  return (
    <MicListingContext.Provider
      value={{ mics: data, refetch, getQuery, clearQuery, setPagination, setQuery, params }}
    >
      {children}
    </MicListingContext.Provider>
  );
};

type MicListingContextState = {
  // clearQuery: ClearQuery;
  mics?: any;
  refetch?: any;
  // setQuery: SetQuery;
  // getQuery: GetQuery;
  params?: any;
  pageNo?: number;
  endPage?: number;
  totalMics?: number;
  clearQuery?: ClearQuery;
  getQuery?: GetQuery;
  setQuery?: SetQuery;
  setPagination?: SetPagination;
};

type MicListingContextProps = {
  children: React.ReactNode;
};
