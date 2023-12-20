import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getIndividualMics: IndividualMicSearch = async (params) => {
  console.log('The params are in the getMics hook', params);

  const micsSearch = `/${params?.id}`;

  console.log('whattt', micsSearch);

  // }
  // eslint-disable-next-line no-useless-catch
  try {
    const allMics = `https://open-myc-api-b3fdf5fc5994.herokuapp.com/mics${micsSearch}`;
    console.log('this is what is passing', allMics);

    const response = await request(allMics);
    return response;
  } catch (err: any) {
    throw err;
  }
};

export type IndividualMicSearch = (params?: {
  id?: string;
}) => Promise<MicResponse | undefined | void>;
