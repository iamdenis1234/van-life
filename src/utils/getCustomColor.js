import { darken, getContrastRatio, lighten } from "@mui/material";

export { getCustomColor };

function getCustomColor(main) {
  return {
    main: main,
    light: lighten(main, 0.2),
    dark: darken(main, 0.3),
    contrastText: getContrastRatio(main, "#fff") > 4.5 ? "#fff" : "#111",
  };
}
