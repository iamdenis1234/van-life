import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../components/CustomButton.jsx";
import { CustomContainer } from "../components/CustomContainer.jsx";
import { section } from "../mixins.js";

export { NotFound };

function NotFound() {
  console.log("Render NotFound");

  return (
    <Container>
      <Title variant="h2" component="h1">
        Sorry, the page you were looking for was not found.
      </Title>
      <CustomButton fullWidth size="large" component={Link} to="/">
        Return to Home
      </CustomButton>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, {});

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));
