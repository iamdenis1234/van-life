import { createContext, useContext } from "react";

export const IsLoggedInContext = createContext(false);

export function useIsLoggedIn() {
  return useContext(IsLoggedInContext);
}
