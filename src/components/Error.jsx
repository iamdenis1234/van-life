import { ArrowBack } from "@mui/icons-material";
import { Alert, styled } from "@mui/material";
import {
  Link,
  useAsyncError,
  useLocation,
  useRouteError,
} from "react-router-dom";
import { isCustomError } from "../utils/CustomError.js";
import { CustomButton } from "./CustomButton.jsx";

export { Error };

function Error() {
  console.log("Render Error");
  console.log(useLocation());

  const error = useError();
  console.log(error);
  console.log("detail message: " + error.data?.detailMessage);

  const backHome = (
    <CustomButton
      component={Link}
      startIcon={<ArrowBack />}
      to="/"
      variant="text"
      color="inherit"
    >
      home
    </CustomButton>
  );

  if (isCustomError(error)) {
    return (
      <StyledAlert severity="info" action={backHome}>
        {error.message}
      </StyledAlert>
    );
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
