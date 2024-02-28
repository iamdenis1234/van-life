import { Container as MuiContainer, styled } from "@mui/material";

export { CustomContainer };

function CustomContainer(props) {
  return <Container maxWidth="lg" {...props} />;
}

const Container = styled(MuiContainer)(({ theme }) => ({
  paddingInline: theme.spacing(3),
}));
