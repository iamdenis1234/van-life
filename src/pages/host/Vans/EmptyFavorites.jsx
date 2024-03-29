import { Alert, AlertTitle, Link as MuiLink, styled } from "@mui/material";
import { Link } from "react-router-dom";

export { EmptyFavorites };

function EmptyFavorites() {
  return (
    <Alert severity="info">
      <AlertTitle>List is empty</AlertTitle>
      <StyledLink component={Link} to="/vans" color="inherit" variant="h5">
        Find your Van
      </StyledLink>
    </Alert>
  );
}

const StyledLink = styled(MuiLink)(({ theme }) => ({
  display: "block",
  marginTop: theme.spacing(2),
}));
