import { alpha, styled } from "@mui/material";

export { Highlight };

const Highlight = styled("span")(({ theme }) => ({
  em: {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
    fontStyle: "normal",
  },
}));
