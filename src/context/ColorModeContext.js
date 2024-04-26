import { createContext, useContext } from "react";

export { ColorModeContext, useColorMode };

const ColorModeContext = createContext({});

function useColorMode() {
  return useContext(ColorModeContext);
}
