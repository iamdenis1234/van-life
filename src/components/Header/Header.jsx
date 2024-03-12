import { Menu as MenuIcon } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Box,
  IconButton,
  Link as MuiLink,
  styled,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "../../api.js";
import { CustomContainer } from "../CustomContainer.jsx";
import { Menu } from "./Menu.jsx";

export { Header };

function Header() {
  console.log("Render Header");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    return onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // TODO: maybe refactor isScrolled and elevation props
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
          <Box>
            <HeaderMenuButton onClick={toggleMenu}>
              <MenuIcon />
            </HeaderMenuButton>
            <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
          </Box>
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
  boxShadow: isScrolled && "0 2px 16px hsla(0, 0%, 0%, 0.1)",
  backdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.8),
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
