import { FormGroup, styled } from "@mui/material";
import { Form } from "react-router-dom";
import { Filter } from "./Filter.jsx";
import { SortOrder } from "./SortOrder.jsx";

export { FilterAndSortSection };

function FilterAndSortSection() {
  return (
    <FiltersContainer>
      <StyledForm>
        <StyledFormGroup>
          <Filter type="simple" />
          <Filter type="rugged" />
          <Filter type="luxury" />
        </StyledFormGroup>
        <SortOrder />
      </StyledForm>
    </FiltersContainer>
  );
}

const FiltersContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledForm = styled(Form)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledFormGroup = styled(FormGroup)({
  flexDirection: "row",
});
