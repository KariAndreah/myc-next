'use client';

import { createContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TbMicrophoneOff } from 'react-icons/tb';
import { ClearQuery, GetQuery, SetQuery, useQuery } from '../hooks/useQuery';
import { useIndividualMics } from '../hooks/useIndividualMics';

export const MicDetailContext = createContext<MicDetailContextState>({
  mics: undefined,
  clearQuery: () => null,
  getQuery: () => null,
  setQuery: () => null,
});

export const MicDetailContextProvider = ({ children }: MicDetailContextProps) => {
  const [params] = useQuery();
  // const params = new URLSearchParams();

  // Get selected objects
  // const params = new URLSearchParams();
  const params2 = usePathname();
  console.log('Params inside of Mic Detail Context:', params);

  // const searchDetails = getQuery();
  const search = {
    id: params2.split('/')[2],
  };

  // const kari = setQuery(search);
  // console.log('kari', kari);

  const { data, isLoading, refetch } = useIndividualMics(search);

  useEffect(() => {
    refetch();
    // You can now use the current URL
    // ...
  }, []);

  if (!isLoading && !data?.mics) {
    <div className="p-32 flex flex-col">
      <h1>404 ... </h1>
      <TbMicrophoneOff size={32} />
      <p>No Mics Found</p>
    </div>;
  }

  return (
    <MicDetailContext.Provider value={{ mics: data, refetch }}>
      {children}
    </MicDetailContext.Provider>
  );
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
