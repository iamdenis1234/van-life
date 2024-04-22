import { Close } from "@mui/icons-material";
import { Drawer, IconButton, styled } from "@mui/material";

export { MenuDrawer };

function MenuDrawer({ isOpen, onToggle, children }) {
  return (
    <StyledDrawer
      anchor="top"
      open={isOpen}
      onClose={onToggle}
      disableScrollLock={true}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
    >
      <CloseButton onClick={onToggle}>
        <Close />
      </CloseButton>
      {children}
      <RoadSign src="/assets/images/road_sign.webp" alt="road sign" />
      <BirdsOnTree src="/assets/images/birds.webp" alt="birds on tree" />
    </StyledDrawer>
  );
}

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

const DecorImg = styled("img")({
  position: "absolute",
  zIndex: -1,
});

const BirdsOnTree = styled(DecorImg)({
  width: 123,
  filter: "contrast(0.7)",
  top: 16,
});

const RoadSign = styled(DecorImg)({
  width: 121,
  bottom: -23,
  right: 5,
});
