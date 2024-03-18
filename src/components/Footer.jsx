import { styled, Typography } from "@mui/material";

export { Footer };

function Footer() {
  console.log("Render Footer");

  // TODO: add a link to the github project with a github icon
  return (
    <StyledFooter>
      <Typography>&#169; 2024 #VANLIFE</Typography>
    </StyledFooter>
  );
}

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.text.white,
  paddingBlock: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
  marginTop: "auto",
}));
