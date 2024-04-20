import { alpha, createTheme } from "@mui/material";
import { getCustomColor } from "./utils/getCustomColor.js";

export { theme };

const colors = {
  body: "hsl(0, 0%, 100%)",
  first: "hsl(25, 100%, 61%)",
  textWhite: "hsl(0,0%,100%)",
  vanTypes: {
    simple: "hsl(12,46%,49%)",
    rugged: "hsl(176,69%,22%)",
    luxury: "hsl(0,0%,9%)",
  },
};

let theme = createTheme({
  palette: {
    primary: {
      main: colors.first,
    },
    background: {
      default: colors.body,
      paper: colors.body,
    },
    text: {
      white: colors.textWhite,
    },
    logo: {
      main: "hsl(25, 100%, 43%)",
    },
    simple: getCustomColor(colors.vanTypes.simple),
    rugged: getCustomColor(colors.vanTypes.rugged),
    luxury: getCustomColor(colors.vanTypes.luxury),
  },
  customShadows: {
    header: "0 2px 16px hsla(0, 0%, 0%, 0.1)",
  },
  filters: {
    blur: "blur(6px)",
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    logo: {
      fontFamily: "'Dancing Script Variable', cursive",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "2rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1150,
      xl: 1536,
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "hsla(0,0%,0%,0.2)",
        },
        invisible: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  palette: {
    primaryDark: {
      main: theme.palette.primary.dark,
    },
    background: {
      transparent: alpha(theme.palette.background.default, 0.8),
    },
  },
  typography: {
    h1: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.125rem",
      },
      fontSize: "2.375rem",
      fontWeight: 500,
    },
    h2: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.5707rem",
      },
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.8219rem",
      },
      fontSize: "1.5625rem",
      fontWeight: 500,
    },
    h4: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.3118rem",
      },
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    h6: {
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.125rem",
      },
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
});
