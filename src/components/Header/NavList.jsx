import { List, ListItem, ListItemButton, styled } from "@mui/material";
import { NavItem } from "./NavItem.jsx";

export { NavList };

function NavList({ onClick, className }) {
  return (
    <List className={className}>
      <StyledListItem>
        <NavItem to="/" onClick={onClick}>
          <StyledListItemButton>Home</StyledListItemButton>
        </NavItem>
      </StyledListItem>
      <StyledListItem>
        <NavItem to="/about" onClick={onClick}>
          <StyledListItemButton>About</StyledListItemButton>
        </NavItem>
      </StyledListItem>
      <StyledListItem>
        <NavItem to="/vans" onClick={onClick}>
          <StyledListItemButton>Vans</StyledListItemButton>
        </NavItem>
      </StyledListItem>
    </List>
  );
}

const StyledListItemButton = styled(ListItemButton)({
  justifyContent: "center",
});

const StyledListItem = styled(ListItem)({
  justifyContent: "center",
});
