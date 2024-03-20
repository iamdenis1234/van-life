import { Close } from "@mui/icons-material";
import {
  alpha,
  css,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export { Menu };

function Menu({ isOpen, onToggle }) {
  return (
    <MenuDrawer
      anchor="top"
      open={isOpen}
      onClose={onToggle}
      disableScrollLock={true}
    >
      <CloseButton onClick={onToggle}>
        <Close fontSize="small" />
      </CloseButton>
      <MenuList>
        <ListItem>
          <MenuListItemButton onClick={onToggle} to="/" component={NavLink}>
            Home
          </MenuListItemButton>
        </ListItem>
        <ListItem>
          <MenuListItemButton onClick={onToggle} to="/host" component={NavLink}>
            Host
          </MenuListItemButton>
        </ListItem>
        <ListItem>
          <MenuListItemButton
            onClick={onToggle}
            to="/about"
            component={NavLink}
          >
            About
          </MenuListItemButton>
        </ListItem>
        <ListItem>
          <MenuListItemButton onClick={onToggle} to="/vans" component={NavLink}>
            Vans
          </MenuListItemButton>
        </ListItem>
      </MenuList>
      <RoadSign src="/assets/images/road_sign1.gif" alt="road sign" />
      <BirdsOnTree
        src="/assets/images/birds_on_tree_without_sun.png"
        alt="birds on tree"
      />
    </MenuDrawer>
  );
}

const decorImg = css({
  position: "absolute",
  zIndex: -1,
});

const BirdsOnTree = styled("img")(decorImg, {
  width: 100,
});

const RoadSign = styled("img")(decorImg, {
  width: 102,
  bottom: -6,
  right: 5,
});

const MenuDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    overflow: "hidden",
    backdropFilter: "blur(6px)",
    backgroundColor: alpha(theme.palette.background.default, 0.8),
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "hsla(0,0%,0%,0.2)",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 12,
  right: 21,
  zIndex: 1,
  color: theme.palette.text.primary,
}));

const MenuList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& .MuiListItemButton-root": { justifyContent: "center" },
  paddingBlock: theme.spacing(7),
  gap: theme.spacing(1),
}));

const MenuListItemButton = styled(ListItemButton)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,

  // 'active' class is added automatically to a router NavLink component
  // when it is active
  "&:hover, &.active": {
    color: theme.palette.primary.dark,
  },
}));
