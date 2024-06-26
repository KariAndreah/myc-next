import qs from 'query-string';
import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';
// import { micsResults } from '@/mocks/PrismaMicsMock';

export const getMics: any = async (params: any) => {
  // if(checked){
  //     params.concat(`/findByAllFree?day=${day}&borough=${borough}&startTime=${startTime}&endTime=${endTime}`)
  // }
  // if(day=== 'Monday'){

  // Date-time 0000-00-00T15:00:00
  if (!params) {
    throw new Error('Missing required search params');
  }

  // console.log('These params are passing to getMics Hook', params);

  let micsSearch: any = '';

  if (params?.free) {
    const free = '&free=true';

    micsSearch.concat(`${free}`);

    // console.log('This is the Free getMics search: ', free);
  } else {
    // console.log('Non Free Search');
  }

  try {
    const search = qs.stringify(params!, {
      encode: true,
      skipNull: true,
    });
    micsSearch = `?${search}`;
    // console.log('micsSearch ----->', micsSearch);
    // console.log('this is what I am missing kari', process.env.NEXT_PUBLIC_API_URL);

    const localTest = `${process.env.NEXT_PUBLIC_API_URL}micTimes${micsSearch}`;
    // console.log('this is the request url Kari ', localTest);
    // const localTest = `${process.env.NEXT_PUBLIC_API}/mics${micsSearch}`;
    // console.log('Response from mic search in Get Mics', micsSearch);
    // console.log('getMics Request Results', await request(localTest));
    return await request(localTest);
    // return micsResults;
  } catch (err) {
    throw Error('No mic found');
  }
};

export type MicSearch = (params?: {
  borough?: string[];
  day?: string;
  // startTime?: string;
  // endTime?: string;
  offset?: number;
  limit?: number;
  sortBy?: string;
  cost?: string;
}) => Promise<MicResponse | undefined | void>;
