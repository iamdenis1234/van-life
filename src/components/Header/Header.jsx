import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Link as MuiLink,
  styled,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "../../api.js";
import { useBreakpointUp } from "../../hooks/useBreakpoint.js";
import { CustomContainer } from "../CustomContainer.jsx";
import { MenuDrawer } from "./MenuDrawer.jsx";
import { NavList } from "./NavList.jsx";

export { Header };

function Header() {
  console.log("Render Header");

  const lgUpBreakpointMatches = useBreakpointUp("lg");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // TODO: maybe need to replace useEffect with loader/defer
  useEffect(() => {
    return onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderAppBar
      position="sticky"
      elevation={0}
      color="background"
      isScrolled={isScrolled}
    >
      <CustomContainer>
        <HeaderToolbar component="nav" disableGutters>
          <Logo component={Link} to="/" color="inherit" underline="none">
            <img src="/assets/images/logo-primary-color-cut.png" alt="" />
            VanLife
          </Logo>
          {lgUpBreakpointMatches ? (
            <StyledNavList />
          ) : (
            <>
              <HeaderMenuButton onClick={toggleMenu}>
                <MenuIcon />
              </HeaderMenuButton>
              <MenuDrawer isOpen={isMenuOpen} onToggle={toggleMenu}>
                <StyledNavList onToggle={toggleMenu} />
              </MenuDrawer>
            </>
          )}
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

const Logo = styled(MuiLink)({
  display: "flex",
  gap: "4px",

  "& img": {
    width: 20,
  },
});

const StyledNavList = styled(NavList)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBlock: theme.spacing(7),
  gap: theme.spacing(1),

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    paddingBlock: 0,
    "& .MuiListItem-root:last-child": {
      paddingRight: 0,
    },
  },
}));
