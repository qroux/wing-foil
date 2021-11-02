import React from 'react';

import type { AppProps } from 'next/app';
import Layout from './_layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import { Provider as AppProvider } from '../src/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
