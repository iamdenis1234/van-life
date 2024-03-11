import { styled } from "@mui/material";
import { ClearFilter } from "./ClearFilter.jsx";
import { Filter } from "./Filter.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { FilterSection };

// TODO: probably need to do filtering via firestore with richer options
function FilterSection() {
  const [currentTypeFilter] = useCurrentTypeFilter();

  return (
    <FiltersContainer>
      <Filter type="simple" />
      <Filter type="rugged" />
      <Filter type="luxury" />
      {currentTypeFilter && <StyledClearFilter />}
    </FiltersContainer>
  );
}

const FiltersContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  columnGap: theme.spacing(3),
}));

const StyledClearFilter = styled(ClearFilter)({
  marginLeft: "auto",
});
