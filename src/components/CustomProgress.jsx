import Ellipsis from "/public/assets/images/Ellipsis-1s-200px.svg?react";
import { styled, SvgIcon } from "@mui/material";

export { CustomProgress };

function CustomProgress({ size = 60 }) {
  return (
    <Container sx={{ fontSize: size }} role="progressbar">
      <SvgIcon component={Ellipsis} inheritViewBox fontSize="inherit" />
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
