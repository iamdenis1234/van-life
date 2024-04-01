import { createContext, useContext } from "react";

export const isLoggedInContext = createContext(false);

export function useIsLoggedIn() {
  return useContext(isLoggedInContext);
}
