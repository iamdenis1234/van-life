import { styled } from "@mui/material";

export { Footer };

function Footer() {
  console.log("Render Footer");

  return <StyledFooter>&#169; 2022 #VANLIFE</StyledFooter>;
}

const StyledFooter = styled("footer")(({ theme }) => ({
  marginBlock: theme.spacing(6, 4),
}));
