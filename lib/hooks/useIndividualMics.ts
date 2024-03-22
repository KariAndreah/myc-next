import { useQuery } from '@tanstack/react-query';
import { getIndividualMics } from '../api/getIndividualMics';

export const useIndividualMics = (params?: object) => {
  console.log('Individual Mics Works');
  console.log('This is an error', getIndividualMics(params));

  return useQuery({
    queryKey: ['mics', params],
    // enabled: false,
    // retry: false,
    queryFn: () => getIndividualMics(params),
  });
};
