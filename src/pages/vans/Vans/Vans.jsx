import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { FilterAndSortSection } from "./FilterAndSortSection.jsx";
import { vansQuery } from "./loader.js";
import { Pagination } from "./Pagination.jsx";
import { VanElements } from "./VanElements.jsx";

export { Vans };

function Vans() {
  console.log("Render Vans");
  const [searchParams] = useSearchParams();
  const query = useQuery(vansQuery(searchParams));
  const { data: vansData, isPending } = query;

  console.log(query);

  return (
    <Container>
      <Typography variant="h1">Explore our van options</Typography>
      {isPending ? (
        <Typography>Loading vans...</Typography>
      ) : (
        <>
          <FilterAndSortSection />
          <VanElements vans={vansData.vans} />
          <Pagination totalPages={vansData.totalPages} />
        </>
      )}
    </Container>
  );
}

const Container = styled(CustomContainer)(section, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(4),
}));
