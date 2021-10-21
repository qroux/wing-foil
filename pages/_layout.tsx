import { ReactNode, useContext, useEffect } from 'react';
// import Navbar from './Navbar';
// import { Context as AppContext } from '../globalState/context/AppContext';
// import { darkTheme } from '../../styles/theme/theme';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';

function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '5px solid red',
        }}>
        {/* <Navbar /> */}
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Layout;
