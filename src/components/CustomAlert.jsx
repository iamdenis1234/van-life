import { Alert, AlertTitle, Link as MuiLink, styled } from "@mui/material";
import { Link } from "react-router-dom";

export { CustomInfoAlert };

function CustomInfoAlert({ title, linkTo, linkText }) {
  return (
    <Alert severity="info">
      <AlertTitle>{title}</AlertTitle>
      <StyledLink component={Link} to={linkTo} color="inherit" variant="h5">
        {linkText}
      </StyledLink>
    </Alert>
  );
}

const StyledLink = styled(MuiLink)(({ theme }) => ({
  display: "block",
  marginTop: theme.spacing(2),
}));
