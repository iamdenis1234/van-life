import { useMediaQuery, useTheme } from "@mui/material";

export { useBreakpointUp, useBreakpointDown };

function useBreakpointUp(key) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(key));
}

function useBreakpointDown(key) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(key));
}
