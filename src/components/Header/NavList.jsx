import { List, ListItem, ListItemButton, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export { NavList };

// TODO: consider moving it to Header as a variable
function NavList({ onClick, className }) {
  return (
    <List className={className}>
      <ListItem>
        <MenuListItemButton onClick={onClick} to="/" component={NavLink}>
          Home
        </MenuListItemButton>
      </ListItem>
      <ListItem>
        <MenuListItemButton onClick={onClick} to="/host" component={NavLink}>
          Host
        </MenuListItemButton>
      </ListItem>
      <ListItem>
        <MenuListItemButton onClick={onClick} to="/about" component={NavLink}>
          About
        </MenuListItemButton>
      </ListItem>
      <ListItem>
        <MenuListItemButton onClick={onClick} to="/vans" component={NavLink}>
          Vans
        </MenuListItemButton>
      </ListItem>
    </List>
  );
}

const MenuListItemButton = styled(ListItemButton)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  justifyContent: "center",

  // 'active' class is added automatically to a router NavLink component
  // when it is active
  "&:hover, &.active": {
    color: theme.palette.primary.dark,
  },
}));
