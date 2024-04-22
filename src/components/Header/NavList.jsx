import { List, ListItem, ListItemButton, styled } from "@mui/material";
import { NavItem } from "./NavItem.jsx";

export { NavList };

function NavList({ onClick, className }) {
  return (
    <List className={className}>
      <NavItem to="/" onClick={onClick}>
        <StyledListItem>
          <StyledListItemButton>Home</StyledListItemButton>
        </StyledListItem>
      </NavItem>
      <NavItem to="/about" onClick={onClick}>
        <StyledListItem>
          <StyledListItemButton>About</StyledListItemButton>
        </StyledListItem>
      </NavItem>
      <NavItem to="/vans" onClick={onClick}>
        <StyledListItem>
          <StyledListItemButton>Vans</StyledListItemButton>
        </StyledListItem>
      </NavItem>
    </List>
  );
}

const StyledListItemButton = styled(ListItemButton)({
  justifyContent: "center",
});

const StyledListItem = styled(ListItem)({
  justifyContent: "center",
  padding: 0,
});
