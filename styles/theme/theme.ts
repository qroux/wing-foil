import { createTheme, ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';

interface Palette {
  primary: {
    main: string;
  };
  secondary: {
    main: string;
  };
  error: {
    main: string;
  };
  text: {
    primary: string;
  };
}

const lightPalette: Palette = {
  primary: {
    main: '#556cd6',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: red.A400,
  },
  text: {
    primary: '#000b5c',
  },
};

const darkPalette: Palette = {
  primary: {
    main: '#556cd6',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: red.A400,
  },
  text: {
    primary: '#d7dbfc',
  },
};

// Create a theme instance.
const theme = (dark: boolean): ThemeOptions => {
  const palette = dark ? darkPalette : lightPalette;

  return createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: {
        main: palette.primary.main,
      },
      secondary: {
        main: palette.secondary.main,
      },
      error: {
        main: red.A400,
      },
      text: {
        primary: palette.text.primary,
      },
    },
    typography: {
      fontFamily: ['Urbanist', 'Sans-serif'].join(','),
    },
  });
};

export default theme;
