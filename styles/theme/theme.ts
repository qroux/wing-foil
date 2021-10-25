import {
  createTheme,
  PaletteColorOptions,
  PaletteOptions,
  SimplePaletteColorOptions,
  Theme,
} from '@mui/material/styles';
import { green, orange, red, yellow } from '@mui/material/colors';

// Palette from foil.png
// https://coolors.co/30b7ce-dadde7-2b3b3f-91c263

interface MyPalette {
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
    secondary: string;
  };
  background: {
    paper: string;
    default: string;
  };
}

const lightPalette: MyPalette = {
  primary: {
    main: '#30b7ce',
  },
  secondary: {
    // vert
    // main: '#91C263',
    // main: '#a0f252',
    // orange
    main: '#fc2d2d',
  },
  error: {
    main: red.A400,
  },
  text: {
    primary: '#2B3B3F',
    secondary: '#F3F4F7',
  },
  background: {
    default: '#DADDE7',
    paper: '#DADDE7',
  },
};

const darkPalette: MyPalette = {
  primary: {
    main: '#000000',
  },
  secondary: {
    main: green.A400,
  },
  error: {
    main: red.A400,
  },
  text: {
    primary: '#d7dbfc',
    secondary: '#ff0004',
  },
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
};

// Create a theme instance.
const theme = (dark: boolean): Theme => {
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
        secondary: palette.text.secondary,
      },
      background: {
        default: palette.background.default,
        paper: palette.background.paper,
      },
    },
    typography: {
      fontFamily: 'Urbanist',
    },
  });
};

export default theme;
