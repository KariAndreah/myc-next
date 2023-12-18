import { useQuery } from '@tanstack/react-query';
import { getIndividualMics } from '../api/getIndividualMics';

export const useIndividualMics = (params?: object) =>
  // console.log('useMicsHook Works')
  useQuery({
    queryKey: ['mics'],
    queryFn: () => getIndividualMics(params),
  });
