import React from 'react';

import type { AppProps } from 'next/app';
import Layout from './_layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          location={router.pathname}
          key={router.pathname}
        />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
