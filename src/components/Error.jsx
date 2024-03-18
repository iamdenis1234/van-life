import { Alert } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { CustomButton } from "./CustomButton.jsx";

export { Error };

function Error() {
  console.log("Render Error");

  const error = useRouteError();
  console.log(error);

  return (
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
  );
}
