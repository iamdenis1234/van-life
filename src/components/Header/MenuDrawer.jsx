import { Close } from "@mui/icons-material";
import { css, Drawer, IconButton, styled } from "@mui/material";

export { MenuDrawer };

// TODO: maybe remove background images altogether
function MenuDrawer({ isOpen, onToggle, children }) {
  return (
    <StyledDrawer
      anchor="top"
      open={isOpen}
      onClose={onToggle}
      disableScrollLock={true}
    >
      <CloseButton onClick={onToggle}>
        <Close />
      </CloseButton>
      {children}
      <RoadSign src="/assets/images/road_sign1.gif" alt="road sign" />
      <BirdsOnTree
        src="/assets/images/birds_on_tree_without_sun.png"
        alt="birds on tree"
      />
    </StyledDrawer>
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

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    overflow: "hidden",
    backdropFilter: theme.filters.blur,
    backgroundColor: theme.palette.background.transparent,
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 12,
  right: 21,
  zIndex: 1,
  color: theme.palette.text.primary,
}));
