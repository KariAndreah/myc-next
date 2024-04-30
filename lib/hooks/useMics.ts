import { useQuery } from '@tanstack/react-query';
import { getMics } from '../api/getMics';

export const useMics = (params?: object) => {
  console.log('useMicsHook Works ----', params);
  console.log('useMics.ts Request results');

  return useQuery({
    queryKey: ['mics', params],
    enabled: false,
    retry: false,
    queryFn: () => getMics(params),
  });
};
