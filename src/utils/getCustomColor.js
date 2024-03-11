import { alpha, getContrastRatio } from "@mui/material";

export { getCustomColor };

function getCustomColor(main) {
  return {
    main: main,
    light: alpha(main, 0.5),
    dark: alpha(main, 0.9),
    contrastText: getContrastRatio(main, "#fff") > 4.5 ? "#fff" : "#111",
  };
}
