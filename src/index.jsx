import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./base.css";
import "./index.css";
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

const fontSizes = {
  h1: 38,
  h2: 26,
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
  typography: {
    fontSize: 14,
    h1: {
      fontSize: fontSizes.h1,
      fontWeight: 500,
    },
    h2: {
      fontSize: fontSizes.h2,
      fontWeight: 400,
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
