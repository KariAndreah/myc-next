import qs from 'query-string';
import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getMics: MicSearch = async (params) => {
  // if(checked){
  //     params.concat(`/findByAllFree?day=${day}&borough=${borough}&startTime=${startTime}&endTime=${endTime}`)
  // }
  // if(day=== 'Monday'){

  // Date-time 0000-00-00T15:00:00

  let micsSearch = '';

  console.log('------- The params are in the getMics hook', params?.cost);

  if (params) {
    console.log(params?.day, params?.borough);

    const search = qs.stringify(params, {
      encode: true,
      skipNull: true,
    });

    micsSearch = `/findByBoroughsDay?${search}&pageSize=10&sortBy=id`;

    console.log('whattt', search);
  }

  // }
  // eslint-disable-next-line no-useless-catch
  try {
    // const localTest = `http://localhost:8080/mics${micsSearch}`;
    const localTest = `https://open-myc-api-b3fdf5fc5994.herokuapp.com/mics${micsSearch}`;
    console.log('mic search should work', micsSearch);
    const response = await request(localTest);
    console.log('this is what is passing', localTest);
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
