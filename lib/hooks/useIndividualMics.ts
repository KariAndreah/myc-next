import { useQuery } from '@tanstack/react-query';
import { getIndividualMics } from '../api/getIndividualMics';

export const useIndividualMics = (params?: object) =>
  // console.log('useMicsHook Works')
  useQuery({
    queryKey: ['mics'],
    enabled: false,
    retry: false,
    queryFn: () => getIndividualMics(params),
  });
