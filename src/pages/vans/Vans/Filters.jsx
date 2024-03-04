import { styled } from "@mui/material";
import { FilterButton } from "./FilterButton.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { Filters };

function Filters() {
  const [currentTypeFilter] = useCurrentTypeFilter();

  return (
    <FiltersContainer>
      <FilterButton type="simple">simple</FilterButton>
      <FilterButton type="rugged">rugged</FilterButton>
      <FilterButton type="luxury">luxury</FilterButton>
      {currentTypeFilter && (
        <ClearFilterButton color="inherit" variant="text">
          clear
        </ClearFilterButton>
      )}
    </FiltersContainer>
  );
}

const FiltersContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  columnGap: theme.spacing(3),
}));

const ClearFilterButton = styled(FilterButton)({
  marginLeft: "auto",
});
