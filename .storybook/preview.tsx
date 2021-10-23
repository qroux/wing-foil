import React from 'react';
import theme from '../styles/theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useDarkMode } from 'storybook-dark-mode';

const darkTheme = theme(true);
const lightTheme = theme(false);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    dark: { darkTheme },
    light: { lightTheme },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
