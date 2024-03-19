import { styled, Typography } from "@mui/material";

export { Footer };

function Footer() {
  console.log("Render Footer");

  // TODO: add a link to the github project with a github icon
  return (
    <StyledFooter>
      <Content>
        <Typography>&#169; 2024 #VANLIFE</Typography>
      </Content>
    </StyledFooter>
  );
}

const StyledFooter = styled("footer")({
  marginTop: "auto",
});

const Content = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.text.white,
  marginTop: theme.spacing(6),
  paddingBlock: theme.spacing(3),
  display: "flex",
  justifyContent: "center",
}));
