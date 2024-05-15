'use client';

import { createContext, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
import { TbMicrophoneOff } from 'react-icons/tb';
import { useMics } from '../hooks/useMics';
import { ClearQuery, GetQuery, SetPagination, SetQuery, useQuery } from '../hooks/useQuery';
// import PageLayout from '@/components/pagelayout/PageLayout';

export const MicListingContext = createContext<MicListingContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
  setPagination: () => null,
  isLoading: false,
});

export const MicListingContextProvider = ({ children }: MicListingContextProps) => {
  const [params, setQuery, clearQuery, getQuery, setPagination] = useQuery();

  const search = getQuery();

  console.log('SEARCH CATEGORIES I AM PASSING in Mic Listing Context Provider to useMics', search);

  const { data, isLoading, refetch, error, isError } = useMics(search);

  console.log('This is data from Mic Listing Context: ', data);

  // Commented this out but data is reloading and not working
  if (!isLoading && !data?.mics) {
    <div className="p-32 flex flex-col">
      <h1>404 ... </h1>
      <TbMicrophoneOff size={32} />
      <p>No Mics Found</p>
    </div>;
  }

  if (error) {
    <div className="p-32 flex flex-col">
      <h1>404 ... </h1>
      <TbMicrophoneOff size={32} />
      <p>No Mics Found</p>
    </div>;
  }

  useEffect(() => {
    refetch();
    // You can now use the current URL
    // ...
  }, [search]);

  // console.log(useMics(search).data);

  console.log('MIC LISTING RESPONSE ', data, isLoading);

  // if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching mics</div>;

  return (
    <MicListingContext.Provider
      value={{
        mics: data,
        refetch,
        getQuery,
        clearQuery,
        setPagination,
        setQuery,
        params,
        error,
        isLoading,
      }}
    >
      {children}
    </MicListingContext.Provider>
  );
};

type MicListingContextState = {
  // clearQuery: ClearQuery;
  mics?: any;
  refetch?: any;
  error?: any;
  isLoading: any;
  // setQuery: SetQuery;
  // getQuery: GetQuery;
  params?: any;
  page?: number;
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
