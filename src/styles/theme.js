import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/dancing-script/700.css";
import { alpha, createTheme as createThemeMui } from "@mui/material";
import { getCustomColor } from "../utils/getCustomColor.js";

export { lightTheme, darkTheme };

const colorsLight = {
  primary: "hsl(25, 100%, 61%)",
  vanTypes: {
    simple: "hsl(12, 46%, 49%)",
    rugged: "hsl(176, 69%, 22%)",
    luxury: "hsl(0, 0%, 9%)",
  },
};

const colorsDark = {
  ...colorsLight,
  // Mui website
  background: "rgba(15,18,20,1)",
  // GitHub
  // background: "rgba(13,17,23,1)",
  vanTypes: {
    luxury: "hsl(0, 0%, 89%)",
  },
  // Mui website
  // text: "rgb(246, 247, 248)",
  // Mine
  text: "hsl(207,35%,94%)",
};

const lightTheme = createTheme("light");
const darkTheme = createTheme("dark");

function getDesignTokens(mode) {
  return {
    palette: {
      mode: mode,
      primary: {
        main: colorsLight.primary,
      },
      background: {
        ...(mode === "dark" && {
          default: colorsDark.background,
          paper: colorsDark.background,
        }),
      },
      text: {
        ...(mode === "dark" && {
          primary: colorsDark.text,
          secondary: alpha(colorsDark.text, 0.7),
          icon: alpha(colorsDark.text, 0.5),
          disabled: alpha(colorsDark.text, 0.5),
        }),
      },
      ...(mode === "dark" && { divider: alpha(colorsDark.text, 0.12) }),
      logo: {
        main: "hsl(25, 100%, 43%)",
      },
      simple: getCustomColor(colorsLight.vanTypes.simple),
      rugged: getCustomColor(colorsLight.vanTypes.rugged),
      luxury:
        mode === "dark"
          ? getCustomColor(colorsDark.vanTypes.luxury)
          : getCustomColor(colorsLight.vanTypes.luxury),
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
      fontFamily: "Poppins, sans-serif",
      fontWeightBold: 600,

      logo: {
        fontFamily: "'Dancing Script', cursive",
        fontWeight: 700,
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
  };
}

function createTheme(mode) {
  let theme = createThemeMui(getDesignTokens(mode));

  theme = createThemeMui(theme, {
    palette: {
      primaryDark: getCustomColor(theme.palette.primary.dark),
      inverse: getCustomColor(theme.palette.text.primary),
      background: {
        transparent: alpha(theme.palette.background.default, 0.8),
      },
      action: {
        active: theme.palette.text.primary,
        ...(mode === "dark" && {
          active: colorsDark.text,
          disabled: alpha(colorsDark.text, 0.3),
          disabledBackground: alpha(colorsDark.text, 0.12),
          focus: alpha(colorsDark.text, 0.12),
          hover: alpha(colorsDark.text, 0.08),
          selected: alpha(colorsDark.text, 0.16),
        }),
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

  return theme;
}
