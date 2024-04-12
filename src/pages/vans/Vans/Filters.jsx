import { FormGroup, styled } from "@mui/material";
import { Filter } from "./Filter.jsx";

export { Filters };

function Filters({ types }) {
  const filters = types.map((type) => (
    <Filter key={type.name} type={type.name} count={type.count} />
  ));

  return <StyledFormGroup>{filters}</StyledFormGroup>;
}

const StyledFormGroup = styled(FormGroup)({
  flexDirection: "row",
});
