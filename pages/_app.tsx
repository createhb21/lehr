import { ReactElement, useEffect, useState } from 'react';
import { NextComponentType } from 'next/types';
import { useRouter } from 'next/router';
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global, ThemeProvider } from '@emotion/react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { queryClient } from '@/queries';
import { globalStyles, theme } from '@/styles';

NProgress.configure({ minimum: 0.1, showSpinner: false, easing: 'linear' });

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const router = useRouter();

  const [client] = useState(queryClient);
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router.events]);

  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
