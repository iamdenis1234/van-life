import { styled, Typography } from "@mui/material";
import { Filters } from "./Filters.jsx";
import { Pagination } from "./Pagination.jsx";
import { SortOrder } from "./SortOrder.jsx";
import { VanElements } from "./VanElements.jsx";

export { VansContent };

function VansContent({ vansData }) {
  return (
    <>
      {vansData.search && (
        <StyledTypography>
          Search results for «{vansData.search}». Found{" "}
          <HighlightTotal>{vansData.totalVans}</HighlightTotal> vans
        </StyledTypography>
      )}
      <FiltersAndSortContainer>
        <Filters types={vansData.types} />
        <SortOrder />
      </FiltersAndSortContainer>
      <VanElements vans={vansData.vans} />
      <Pagination totalPages={vansData.totalPages} />
    </>
  );
}

const FiltersAndSortContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledTypography = styled(Typography)({
  textAlign: "center",
});

const HighlightTotal = styled("span")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));
