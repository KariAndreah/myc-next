'use client';

import qs from 'query-string';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQuery = (): [URLSearchParams, SetQuery, ClearQuery, GetQuery, SetPagination] => {
  const pathname = usePathname();
  const router = useRouter();
  const query = useSearchParams();
  let params = new URLSearchParams(query);

  const getQuery: GetQuery = (q = {}) => {
    let update = {};

    // Getting day param
    if (params?.has('day')) {
      update = { ...update, day: params?.get('day') };
    }

    // Getting borough param
    if (params?.has('borough')) {
      update = { ...update, borough: params?.get('borough') };
    }

    // Getting page number param
    let pageNumber;
    // Condition to get page number if present
    if (params?.get('pageNo')) {
      pageNumber = Number(params?.get('pageNo')) - 1;
      update = { ...update, pageNo: pageNumber };
    } else {
      pageNumber = 0;
      update = { ...update, pageNo: pageNumber };
    }

    // Getting if free param
    let checkFree;
    if (params?.get('free') === 'true') {
      checkFree = 1;
      update = { ...update, cost: checkFree };
    }

    console.log('RESPONSE FROM GETQUERY', update);

    return { ...update, ...q };
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setQuery: SetQuery = (q, append = false) => {
    if (!q) {
      return null;
    }

    const currentParams = qs.parse(params.toString());

    console.log('CURRENT PARAMS IN SET QUERY', currentParams);
    const update = { ...currentParams, ...q };

    params = new URLSearchParams(update);

    console.log('SET QUERY IS WORKING, HERE ARE THE PARAMS BEING PUSHED', params.toString());

    // eslint-disable-next-line no-sequences
    return (
      router.push(`${pathname}?${params.toString()}`),
      {
        shallow: true,
        scroll: true,
      }
    );
  };

  const setPagination: SetPagination = (q) => {
    if (!q) {
      console.log('working with null big dog');
      return null;
    }
    console.log('Working backwards bigdog', q.toString());
    return (
      router.push(`${pathname}?${q}`),
      {
        shallow: true,
        scroll: true,
      }
    );
  };

  const clearQuery: ClearQuery = (q) => {
    const currentParams = qs.parse(params.toString());
    if (!q || !currentParams) {
      return null;
    }
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in q) {
      delete currentParams[key];
    }

    params = new URLSearchParams(currentParams as Record<string, string>);
    return (
      router.push(`${pathname}${params.toString()}`),
      {
        scroll: true,
      }
    );
  };
  return [params, setQuery, clearQuery, getQuery, setPagination];
};

export type Params = {
  [index: string]: any;
  // Search query param - borough
  borough?: string;
  // Search query param - day
  day?: string;
  // Search query param - starttime
  startTime?: string;
  // Search query param - cost
  free?: string;
  // Current results page
  pageNo?: number;
  // Sort Filter
  sort?: string;
};

export type SetQuery = (query?: Record<string, any>, clear?: boolean, append?: boolean) => void;

export type SetPagination = (
  query?: Record<string, any>,
  clear?: boolean,
  append?: boolean
) => void;

export type ClearQuery = (query?: Record<string, any>, clearAll?: boolean) => void;

export type GetQuery = (query?: Record<string, any>) => any;
