import React from 'react';
import theme from '../styles/theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const myTheme = theme(true);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
