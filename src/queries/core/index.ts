import { QueryClient } from '@tanstack/react-query';

function queryErrorHandler(error: unknown): void {
  console.error(error);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
      cacheTime: 1000 * 60 * 8,
      suspense: true,
      retry: 0,
      onError: (err) => queryErrorHandler(err),
    },
    mutations: {
      onError: (err) => queryErrorHandler(err),
    },
  },
});

export default queryClient;
