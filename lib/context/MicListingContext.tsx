'use client';

import { createContext, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import { useMics } from '../hooks/useMics';
import { ClearQuery, GetQuery, SetQuery, useQuery } from '../hooks/useQuery';

export const MicListingContext = createContext<MicListingContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
});

export const MicListingContextProvider = ({ children }: MicListingContextProps) => {
  const [params, setQuery, clearQuery, getQuery] = useQuery();
  // const params = new URLSearchParams();

  // Get selected objects
  // const params = new URLSearchParams(window.location.href);
  // const params = useSearchParams();

  let pageNumber;
  // Condition to get page number if present
  if (params?.get('pageNo')) {
    pageNumber = Number(params?.get('pageNo')) - 1;
  } else {
    pageNumber = 0;
  }

  console.log('this page is getting passed to micListingContext', pageNumber);

  console.log('This is the current pageNo in URL in Mic Listing', params?.get('pageNo'));

  let checkFree;

  if (params?.get('free') === 'true') {
    checkFree = 1;
  }

  const search = {
    day: params?.get('day'),
    borough: params?.get('borough'),
    startTime: params?.get('startTime'),
    cost: checkFree,
    pageNo: pageNumber,
  };

  // const kari = setQuery(search);
  // console.log('kari', kari);

  console.log('Search categoriea option I am passing for the call', search);

  console.log('THESE ARE THE PARAMS I AM LOOKING FOR');

  const { data, isLoading, refetch } = useMics(search);

  useEffect(() => {
    // refetch();
    // You can now use the current URL
    // ...
  }, [search]);

  // console.log(useMics(search).data);

  console.log('Response here in MicListingContext: ', data, isLoading);

  // Commented this out but data is reloading and not working
  // if (!isLoading && !data?.mics) {
  //   return <h1>Not found *yet kARI :P</h1>;
  // }

  return (
    <MicListingContext.Provider
      value={{ mics: data, refetch, getQuery, clearQuery, setQuery, params }}
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
};

type MicListingContextProps = {
  children: React.ReactNode;
};
