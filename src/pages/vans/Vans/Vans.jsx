import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { Filters } from "./Filters.jsx";
import { vansQuery } from "./loader.js";
import { NoVansFound } from "./NoVansFound.jsx";
import { Pagination } from "./Pagination.jsx";
import { SortOrder } from "./SortOrder.jsx";
import { VanElements } from "./VanElements.jsx";

export { Vans };

// TODO: maybe display total vans using algolia nbHist
function Vans() {
  console.log("Render Vans");
  const [searchParams] = useSearchParams();
  const query = useQuery(vansQuery(searchParams));
  const { data: vansData, isPending } = query;

  function renderContent() {
    if (isPending) {
      return <Typography>Loading vans...</Typography>;
    }

    if (vansData.vans.length) {
      return (
        <>
          <FiltersAndSortContainer>
            <Filters types={vansData.types} />
            <SortOrder />
          </FiltersAndSortContainer>
          <VanElements vans={vansData.vans} />
          <Pagination totalPages={vansData.totalPages} />
        </>
      );
    }

    return <NoVansFound />;
  }

  return (
    <Container>
      <Typography variant="h1">Explore our van options</Typography>
      {renderContent()}
    </Container>
  );
}

const Container = styled(CustomContainer)(section, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(4),
}));

const FiltersAndSortContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
