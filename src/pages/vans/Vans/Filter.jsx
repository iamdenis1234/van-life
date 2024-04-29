import { Checkbox, FormControlLabel, styled, Typography } from "@mui/material";
import { useSearchParams, useSubmit } from "react-router-dom";
import { deletePageFromSearchParams } from "./deletePageFromSearchParams.js";

export { Filter };

function Filter({ type }) {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const selectedTypes = searchParams.getAll("type");
  const name = type.name;
  const count = type.count;

  function isChecked() {
    return selectedTypes.includes(name);
  }

  function handleChange(event) {
    const newSearchParams = new URLSearchParams(searchParams);
    const { name, value, checked } = event.target;
    checked
      ? newSearchParams.append(name, value)
      : newSearchParams.delete(name, value);
    newSearchParams.sort();
    submit(deletePageFromSearchParams(newSearchParams));
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          color={name}
          name="type"
          value={name}
          checked={isChecked()}
          onChange={handleChange}
        />
      }
      label={
        <StyledLabel color={name}>
          {name} ({count})
        </StyledLabel>
      }
    />
  );
}

const StyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
