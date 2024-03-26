import { Alert, styled } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { CustomButton } from "./CustomButton.jsx";

export { Error };

function Error() {
  console.log("Render Error");

  const error = useRouteError();
  console.log(error);

  return (
    <StyledAlert
      severity="error"
      action={
        <CustomButton
          variant="text"
          color="inherit"
          component={Link}
          reloadDocument
        >
          refresh page
        </CustomButton>
      }
    >
      Oops! unexpected error occurred
    </StyledAlert>
  );
}

const StyledAlert = styled(Alert)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  marginInline: "auto",
}));
