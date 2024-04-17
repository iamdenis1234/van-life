import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export { NavItem };

function NavItem({ to, ...restProps }) {
  return <StyledNavLink to={to} {...restProps} />;
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textDecoration: "none",
  color: theme.palette.text.primary,

  // 'active' class is added automatically to a router NavLink component
  // when it is active
  "&:hover, &.active": {
    color: theme.palette.primary.dark,
  },
}));
