import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getMics: MicSearch = async (params) => {
    // if(checked){
    //     params.concat(`/findByAllFree?day=${day}&borough=${borough}&startTime=${startTime}&endTime=${endTime}`)
    // }
    // if(day=== 'Monday'){

    // Date-time 0000-00-00T15:00:00

    const micsSearch = '';

    if (params?.day || params?.borough) {
      micsSearch.concat(`/findByAll?day=${params?.day}&borough=${params?.borough}&pageNo=0&pageSize=10&sortBy=id`);
    }
    // }
    // eslint-disable-next-line no-useless-catch
    try {
        const allMics = `https://open-myc-api-b3fdf5fc5994.herokuapp.com/mics${micsSearch}`;
        const response = await request(allMics);
        return response.json();
    } catch (err: any) {
        throw err;
    }
  };

  export type MicSearch = (params?: {
    day?: string;
    borough?: string;
    startTime?: string;
    endTime? : string;
    pageNo?: number;
    pageSize?: number;
    sortBy?: string;
    free?: string;
  }) => Promise<MicResponse | undefined | void>;
