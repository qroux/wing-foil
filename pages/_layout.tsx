import React, { ReactNode, useContext, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';
import Navbar from '../src/components/layout/Navbar';
import Banner from '../src/components/layout/Banner';
import Footer from '../src/components/layout/Footer';

import * as gtag from '../lib/gtag';
import { Context as AppContext } from '../src/context/AppContext';
import CookieConsent from 'react-cookie-consent';

function Layout({ children }: { children: ReactNode }) {
  const LightTheme = theme(false);

  const {
    // @ts-ignore
    state: { lang },
    // @ts-ignore
    toggleLang,
  } = useContext(AppContext);

  useEffect(() => {
    if (navigator.language.split('-')[0] !== 'fr') toggleLang();
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <div
        style={{
          minHeight: '100.1vh',
        }}>
        <Navbar />
        <Banner />
        {children}
        <Footer />
        <CookieConsent
          cookieName='TRACKER_CONSENT'
          enableDeclineButton
          location='bottom'
          buttonText='I Agree'
          buttonStyle={{
            backgroundColor: 'green',
            color: 'white',
          }}
          declineButtonText='I Refuse Being Tracked'
          declineButtonStyle={{
            backgroundColor: 'red',
          }}
          onAccept={() => gtag.consentGranted()}
          style={{ background: '#2B373B' }}
          expires={150}>
          This website uses cookies for no particular reason
        </CookieConsent>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
