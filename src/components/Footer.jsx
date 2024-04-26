import { styled, Typography } from "@mui/material";

export { Footer };

function Footer() {
  return (
    <StyledFooter>
      <Content>
        <StyledTypography>&#169; 2024 #VANLIFE</StyledTypography>
      </Content>
    </StyledFooter>
  );
}

const StyledFooter = styled("footer")({
  marginTop: "auto",
});

const Content = styled("div")(({ theme }) => {
  const isLightMode = theme.palette.mode === "light";
  return {
    backgroundColor: isLightMode
      ? theme.palette.text.primary
      : theme.palette.background.default,
    color: isLightMode
      ? theme.palette.background.default
      : theme.palette.text.primary,
    marginTop: theme.spacing(6),
    paddingBlock: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    borderTop: `1px solid ${theme.palette.divider}`,
  };
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));
