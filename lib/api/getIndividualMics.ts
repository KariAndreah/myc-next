import qs from 'query-string';
import { MicResponse } from '../../models/mic';
import { request } from '../utils/request';

export const getIndividualMics: IndividualMicSearch = async (params) => {
  console.log('The params are in the getMics hook', params);

  if (!params) {
    throw new Error('Missing required search params');
  }

  console.log('These params are passing to getMics Hook', params);

  try {
    let micsSearch = `${params?.id}`;

    const search = qs.stringify(params!, {
      encode: true,
      skipNull: true,
    });
    micsSearch = `${params?.id}`;
    console.log('This is all cost getMics Search: ', search);
    const localTest = `http://localhost:9999/mic?id=${micsSearch}`;
    // const localTest = `${process.env.NEXT_PUBLIC_API}/mics${micsSearch}`;
    // console.log('Response from mic search in Get Mics', micsSearch);

    return await request(localTest);
  } catch (err) {
    throw Error('No individual mic found');
  }
};

export type IndividualMicSearch = (params?: {
  id?: string;
}) => Promise<MicResponse | undefined | void>;
