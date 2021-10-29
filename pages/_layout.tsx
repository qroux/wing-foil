import React, { ReactNode, useContext, useEffect } from 'react';
// import Navbar from './Navbar';
// import { Context as AppContext } from '../globalState/context/AppContext';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';
import Navbar from '../src/components/layout/Navbar';
import Banner from '../src/components/layout/Banner';

function Layout({ children }: { children: ReactNode }) {
  const LightTheme = theme(false);

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
      </div>
    </ThemeProvider>
  );
}

export default Layout;
