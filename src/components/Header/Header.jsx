import { GitHub, Menu as MenuIcon, Person } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBreakpointUp } from "../../hooks/useBreakpointUp.js";
import { CustomContainer } from "../CustomContainer.jsx";
import { Logo } from "../Logo.jsx";
import { MenuDrawer } from "./MenuDrawer.jsx";
import { NavItem } from "./NavItem.jsx";
import { NavList } from "./NavList.jsx";
import { Search } from "./Search/Search.jsx";
import { ToggleColorMode } from "./ToggleColorMode.jsx";

export { Header };

const customMdBreakpointInPx = 864;

function Header() {
  const mdUpBreakpointMatches = useBreakpointUp(customMdBreakpointInPx);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderAppBar position="sticky" elevation={0} isScrolled={isScrolled}>
      <CustomContainer>
        <HeaderToolbar component="nav" disableGutters>
          <StyledLogo component={Link} to="/" />
          <NavSearchContainer>
            <Tooltip title="Project repository">
              <IconButton
                component="a"
                href="https://github.com/iamdenis1234/van-life"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <ToggleColorMode />
            <Search />
            <NavItem to="/user">
              <Tooltip title="Your profile">
                <IconButton color="inherit">
                  <Person />
                </IconButton>
              </Tooltip>
            </NavItem>
            {mdUpBreakpointMatches ? (
              <StyledNavList />
            ) : (
              <>
                <HeaderMenuButton onClick={toggleMenu}>
                  <MenuIcon />
                </HeaderMenuButton>
                <MenuDrawer isOpen={isMenuOpen} onToggle={toggleMenu}>
                  <StyledNavList onClick={toggleMenu} />
                </MenuDrawer>
              </>
            )}
          </NavSearchContainer>
        </HeaderToolbar>
      </CustomContainer>
    </HeaderAppBar>
  );
}

const HeaderMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const HeaderAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})(({ isScrolled, theme }) => ({
  boxShadow: isScrolled && theme.customShadows.header,
  backdropFilter: theme.filters.blur,
  backgroundColor: theme.palette.background.transparent,
}));

const HeaderToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const StyledLogo = styled(Logo)({
  textDecoration: "none",
});

const StyledNavList = styled(NavList)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBlock: theme.spacing(7),
  rowGap: theme.spacing(3),

  [theme.breakpoints.up(customMdBreakpointInPx)]: {
    flexDirection: "row",
    paddingBlock: 0,
    marginLeft: theme.spacing(2),
    columnGap: theme.spacing(5),
  },
}));

const NavSearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: theme.spacing(3),
  alignItems: "center",
  "@media (max-width: 510px)": {
    columnGap: theme.spacing(0.5),
  },
}));
