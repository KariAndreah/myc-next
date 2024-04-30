import { useQuery } from '@tanstack/react-query';
import { getIndividualMics } from '../api/getIndividualMics';

export const useIndividualMics = (params?: object) => {
  console.log('Individual Mics Works');

  return useQuery({
    queryKey: ['mics', params],
    enabled: false,
    retry: false,
    queryFn: () => getIndividualMics(params),
  });
};
