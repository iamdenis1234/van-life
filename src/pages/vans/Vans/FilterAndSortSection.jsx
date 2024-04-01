import { FormGroup, styled } from "@mui/material";
import { Form, useSubmit } from "react-router-dom";
import { Filter } from "./Filter.jsx";

export { FilterAndSortSection };

function FilterAndSortSection() {
  const submit = useSubmit();

  return (
    <FiltersContainer>
      <Form
        onChange={(e) => {
          submit(e.currentTarget);
        }}
      >
        <StyledFormGroup>
          <Filter type="simple" />
          <Filter type="rugged" />
          <Filter type="luxury" />
        </StyledFormGroup>
      </Form>
    </FiltersContainer>
  );
}

const FiltersContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledFormGroup = styled(FormGroup)({
  flexDirection: "row",
});
