import { Checkbox, FormControlLabel, styled, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useCustomSubmit } from "../../../hooks/useCustomSubmit.js";
import { deletePageFromSearchParams } from "./deletePageFromSearchParams.js";
import { useOptimisticSearchParams } from "./useOptimisticSearchParams.js";

export { Filter };

function Filter({ type }) {
  const [searchParams] = useSearchParams();
  const submit = useCustomSubmit();
  const selectedTypes = useSelectedTypes();

  function isChecked() {
    return selectedTypes.includes(type);
  }

  // Although we could use declarative form submission with these Checkboxes
  // because they are native browser Checkboxes, we use imperative submission
  // to be consistent with non-native Select used for ordering
  function handleChange(event) {
    const newSearchParams = new URLSearchParams(searchParams);
    const { name, value, checked } = event.target;
    if (checked) {
      newSearchParams.append(name, value);
    } else {
      newSearchParams.delete(name, value);
    }
    submit(deletePageFromSearchParams(newSearchParams));
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          color={type}
          name="type"
          value={type}
          checked={isChecked()}
          onChange={handleChange}
        />
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
  const searchParams = useOptimisticSearchParams();
  return searchParams.getAll("type");
}
