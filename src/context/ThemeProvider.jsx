import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../styles/theme.js";
import { useColorMode } from "./ColorModeContext.js";

export { ThemeProvider };

function ThemeProvider({ children }) {
  const { colorMode } = useColorMode();

  return (
    <MuiThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      {children}
    </MuiThemeProvider>
  );
}
