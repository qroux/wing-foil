import React, { ReactNode, useContext, useEffect } from 'react';
// import Navbar from './Navbar';
// import { Context as AppContext } from '../globalState/context/AppContext';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';
import Navbar from '../src/components/layout/Navbar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme(false)}>
      <CssBaseline />
      <div
        style={{
          minHeight: '100vh',
        }}>
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Layout;
