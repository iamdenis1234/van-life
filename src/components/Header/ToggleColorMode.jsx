import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useColorMode } from "../../context/ColorModeContext.js";

export { ToggleColorMode };

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isCurrentModeLight = colorMode === "light";

  return (
    <Tooltip
      title={
        isCurrentModeLight ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      <IconButton onClick={toggleColorMode}>
        {isCurrentModeLight ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
}
