import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { getCustomColor } from "./utils/getCustomColor.js";

const colors = {
  // body: "hsl(33, 100%, 96%)",
  body: "hsl(0, 0%, 100%)",
  first: "hsl(25, 100%, 61%)",
  // TODO: consider using commented first color instead
  // first: "hsl(14,70%,61%)",
  textWhite: "hsl(0,0%,100%)",
  vanTypes: {
    // the default one
    // simple: "#e17654",
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
    simple: getCustomColor(colors.vanTypes.simple),
    rugged: getCustomColor(colors.vanTypes.rugged),
    luxury: getCustomColor(colors.vanTypes.luxury),
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
});

theme = createTheme(theme, {
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

console.log(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
