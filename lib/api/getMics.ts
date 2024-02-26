import qs from 'query-string';
import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getMics: MicSearch = async (params) => {
  // if(checked){
  //     params.concat(`/findByAllFree?day=${day}&borough=${borough}&startTime=${startTime}&endTime=${endTime}`)
  // }
  // if(day=== 'Monday'){

  // Date-time 0000-00-00T15:00:00
  if (!params) {
    throw new Error('Missing required search params');
  }

  console.log('These params are passing to getMics Hook', params);

  let micsSearch = '';

  if (params?.cost) {
    console.log('Free Search');

    const search = qs.stringify(params, {
      encode: true,
      skipNull: true,
    });

    micsSearch = `/freeBoroughDayTime?${search}`;

    console.log('This is the Free getMics search: ', search);
  } else {
    console.log('Non Free Search');
  }

  try {
    const search = qs.stringify(params!, {
      encode: true,
      skipNull: true,
    });
    micsSearch = `/boroughDayTime?${search}`;

    const localTest = `http://localhost:9999/mics${micsSearch}`;
    // const localTest = `${process.env.NEXT_PUBLIC_API}/mics${micsSearch}`;
    // console.log('Response from mic search in Get Mics', micsSearch);
    console.log('getMics Request Results', await request(localTest));
    return await request(localTest);
  } catch (err) {
    throw Error('No mic found');
  }
};

export type MicSearch = (params?: {
  borough?: string[];
  day?: string;
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  cost?: string;
}) => Promise<MicResponse | undefined | void>;
