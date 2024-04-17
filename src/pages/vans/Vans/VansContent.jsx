import { styled, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Filters } from "./Filters.jsx";
import { Pagination } from "./Pagination.jsx";
import { SortOrder } from "./SortOrder.jsx";
import { VanElements } from "./VanElements.jsx";

export { VansContent };

function VansContent({ vansData }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <>
      {search && (
        <StyledTypography>
          Search results for «{search}». Found{" "}
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
