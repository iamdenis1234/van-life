import { Checkbox, FormControlLabel, styled, Typography } from "@mui/material";
import { useLocation, useNavigation } from "react-router-dom";

export { Filter };

function Filter({ type }) {
  const selectedTypes = useSelectedTypes();

  function isChecked() {
    return selectedTypes.includes(type);
  }

  return (
    <FormControlLabel
      control={
        <Checkbox color={type} name="type" value={type} checked={isChecked()} />
      }
      label={<StyledLabel color={type}>{type}</StyledLabel>}
    />
  );
}

const StyledLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
  color: theme.palette[color].main,
}));

function useSelectedTypes() {
  const { location } = useNavigation();
  const currentLocation = useLocation();
  // Optimistic UI
  const searchParams = new URLSearchParams(
    location ? location.search : currentLocation.search,
  );
  return searchParams.getAll("type");
}
