import { useQuery } from '@tanstack/react-query';
import { getMics } from '../api/getMics';

export const useMics = (params?: object) =>
  // console.log('useMicsHook Works')
  useQuery({
    queryKey: ['mics'],
    enabled: true,
    retry: false,
    queryFn: () => getMics(params),
  });
