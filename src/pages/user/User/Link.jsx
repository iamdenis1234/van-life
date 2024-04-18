import { Link as MuiLink, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export { Link };

function Link(props) {
  return <StyledLink variant="h6" component={NavLink} {...props} />;
}

const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "&:hover, &.active": {
    color: theme.palette.primary.dark,
    textDecoration: "underline",
  },
}));
