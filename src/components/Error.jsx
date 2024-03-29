import { Alert, styled } from "@mui/material";
import { Link, useAsyncError, useRouteError } from "react-router-dom";
import { isCustomError } from "../utils/CustomError.js";
import { CustomButton } from "./CustomButton.jsx";

export { Error };

function Error() {
  console.log("Render Error");

  const error = useError();
  console.log(error);
  console.log("detail message: " + error.data.detailMessage);

  if (isCustomError(error)) {
    return <Alert severity="info">{error.message}</Alert>;
  }

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

function useError() {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  return routeError ? routeError : asyncError;
}
