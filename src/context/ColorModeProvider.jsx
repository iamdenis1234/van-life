import { useCallback, useMemo, useState } from "react";
import { ColorModeContext } from "./ColorModeContext.js";

export { ColorModeProvider };

function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  const toggleColorMode = useCallback(() => {
    const newMode = colorMode === "light" ? "dark" : "light";
    localStorage.setItem("colorMode", newMode);
    setColorMode(newMode);
  }, [colorMode]);

  const contextValue = useMemo(
    () => ({
      colorMode,
      toggleColorMode,
    }),
    [colorMode, toggleColorMode],
  );

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
}

function getInitialColorMode() {
  if (localStorage.colorMode) {
    return localStorage.colorMode;
  }

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  return prefersDarkMode ? "dark" : "light";
}
