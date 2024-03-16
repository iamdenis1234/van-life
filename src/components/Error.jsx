import { Alert, styled } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { section } from "../mixins.js";
import { CustomButton } from "./CustomButton.jsx";
import { CustomContainer } from "./CustomContainer.jsx";

export { Error };

function Error() {
  console.log("Render Error");

  const error = useRouteError();
  console.log(error);

  return (
    <Container>
      <Alert
        severity="error"
        action={
          <CustomButton
            variant="text"
            color="inherit"
            component={Link}
            to="."
            reloadDocument
          >
            refresh page
          </CustomButton>
        }
      >
        Oops! unexpected error occurred
      </Alert>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, {});
