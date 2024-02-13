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
    if (params?.get('day') === '') {
      update = { ...update, day: ['All'] };
    } else {
      update = { ...update, day: params?.get('day') };
    }

    // if (params?.has('day')) {
    //   update = { ...update, day: params?.get('day') };
    // } else {
    //   update = { ...update, day: '' };
    // }

    // Getting borough param
    if (params?.get('borough') === 'All') {
      update = {
        ...update,
        // borough: ['Manhattan', 'Queens', 'Staten-Island', 'Bronx', 'Brooklyn'],
        borough: ['All'],
      };
    } else if (params?.has('borough')) {
      update = { ...update, borough: params?.get('borough') };
    }

    // Getting time param
    if (params?.get('time') === '00:00:00') {
      update = {
        ...update,
        // borough: ['Manhattan', 'Queens', 'Staten-Island', 'Bronx', 'Brooklyn'],
        time: '00:00:00',
      };
    } else if (params?.has('time')) {
      update = { ...update, time: params?.get('time') };
    }

    // Getting page number param
    let pageNumber;
    // Condition to get page number if present
    if (params?.get('page')) {
      pageNumber = Number(params?.get('page'));
      update = { ...update, page: pageNumber };
    } else {
      pageNumber = 0;
      update = { ...update, page: pageNumber };
    }

    // Getting if free param
    let checkFree;
    if (params?.get('free') === 'true') {
      checkFree = 1;
      update = { ...update, cost: checkFree };
    }

    return { ...update, ...q };
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setQuery: SetQuery = (q, append = false) => {
    if (!q) {
      return null;
    }

    console.log('This is q in setQuery', q);

    const currentParams = qs.parse(params.toString());

    console.log('This is current params from ', currentParams);

    const update = { ...currentParams, ...q };

    params = new URLSearchParams(update);

    console.log('This is the setQuery', params);

    console.log(
      `/mics?day=${q.dayQuery}&borough=${q.boroughQuery}&time=${q.timeQuery}&free=${q.cost}&page=1`
    );

    // router.push(
    //   `/mics?day=${dayQuery}&borough=${boroughQuery}&time=${timeQuery}&free=${cost}&page=1`
    // );

    // eslint-disable-next-line no-sequences
    return (
      router.push(
        `/mics?day=${currentParams.dayQuery}&borough=${currentParams.boroughQuery}&time=${currentParams.timeQuery}&free=${currentParams.cost}&page=1`
      ),
      {
        shallow: true,
        scroll: true,
      }
    );
  };

  const setPagination: SetPagination = (q) => {
    if (!q) {
      return null;
    }
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
  page?: number;
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
