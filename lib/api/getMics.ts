import qs from 'query-string';
import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getMics: MicSearch = async (params) => {
  // if(checked){
  //     params.concat(`/findByAllFree?day=${day}&borough=${borough}&startTime=${startTime}&endTime=${endTime}`)
  // }
  // if(day=== 'Monday'){

  // Date-time 0000-00-00T15:00:00

  console.log('These params are passing to getMics Hook', params);

  let micsSearch = '';

  if (params?.cost) {
    console.log('Free Search');

    const search = qs.stringify(params, {
      encode: true,
      skipNull: true,
    });

    micsSearch = `/findByBoroughsDayFree?${search}&pageSize=10&sortBy=id`;

    console.log('This is the Free getMics search: ', search);
  } else {
    console.log('Non Free Search');

    const search = qs.stringify(params!, {
      encode: true,
      skipNull: true,
    });

    micsSearch = `/findByBoroughsDay?${search}&pageSize=10&sortBy=id`;

    console.log('This is all cost getMics Search: ', search);
  }

  // }
  // eslint-disable-next-line no-useless-catch
  try {
    // const localTest = `http://localhost:8080/mics${micsSearch}`;
    const localTest = `https://open-myc-api-b3fdf5fc5994.herokuapp.com/mics${micsSearch}`;
    console.log('Response from mic search in Get Mics', micsSearch);
    const response = await request(localTest);
    console.log('Full path name of Request', localTest);
    return response;
  } catch (err: any) {
    throw err;
  }
};

export type MicSearch = (params?: {
  borough?: string[];
  day?: string;
  startTime?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  cost?: string;
}) => Promise<MicResponse | undefined | void>;
