import React, { useContext, useEffect } from 'react';

import type { AppProps } from 'next/app';
import Layout from './_layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import { Provider as AppProvider } from '../src/context/AppContext';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component
            {...pageProps}
            location={router.pathname}
            key={router.pathname}
          />
        </AnimatePresence>
      </Layout>
    </AppProvider>
  );
}
export default MyApp;
