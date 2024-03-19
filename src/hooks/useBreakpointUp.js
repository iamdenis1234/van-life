import { useMediaQuery, useTheme } from "@mui/material";

export { useBreakpointUp };

function useBreakpointUp(key) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(key));
}
