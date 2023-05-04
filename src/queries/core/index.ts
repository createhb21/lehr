import { QueryClient } from '@tanstack/react-query';

function queryErrorHandler(error: unknown): void {
  console.error(error);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: (err) => queryErrorHandler(err),
    },
    mutations: {
      onError: (err) => queryErrorHandler(err),
    },
  },
});

export default queryClient;
