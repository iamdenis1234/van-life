import { Alert } from "@mui/material";
import { Link, useAsyncError, useRouteError } from "react-router-dom";
import { isCustomError } from "../utils/CustomError.js";
import { CustomInfoAlert } from "./CustomAlert.jsx";
import { CustomButton } from "./CustomButton.jsx";
import { CustomContainer } from "./CustomContainer.jsx";

export { Error };

function Error() {
  const error = useError();
  console.log(error);
  console.log("detail message: " + error.data?.detailMessage);

  let displayedError;
  if (isCustomError(error)) {
    displayedError = (
      <CustomInfoAlert title={error.message} linkText="Back Home" linkTo="/" />
    );
  } else {
    displayedError = (
      <Alert
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
      </Alert>
    );
  }

  return <CustomContainer>{displayedError}</CustomContainer>;
}

function useError() {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  return routeError ? routeError : asyncError;
}
