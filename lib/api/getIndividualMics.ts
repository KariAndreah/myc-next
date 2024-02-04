import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getIndividualMics: IndividualMicSearch = async (params) => {
  console.log('The params are in the getMics hook', params);

  const micsSearch = `${params?.id}`;

  console.log('whattt', micsSearch);

  // }
  // eslint-disable-next-line no-useless-catch
  try {
    const allMics = `${process.env.NEXT_PUBLIC_API}/mic/${micsSearch}`;
    console.log('this is what is passing', allMics);

    const response = await request(allMics);
    return response;
  } catch (err: any) {
    console.log('THERE IS AN ERROR', err);
    throw err;
  }
};

export type IndividualMicSearch = (params?: {
  id?: string;
}) => Promise<MicResponse | undefined | void>;
