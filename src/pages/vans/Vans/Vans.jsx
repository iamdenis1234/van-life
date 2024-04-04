import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { FilterAndSortSection } from "./FilterAndSortSection.jsx";
import { Pagination } from "./Pagination.jsx";
import { VanElements } from "./VanElements.jsx";

export { Vans };

function Vans() {
  console.log("Render Vans");
  const { vansDataPromise } = useLoaderData();

  return (
    <Container>
      <Typography variant="h1">Explore our van options</Typography>
      <Suspense fallback={<Typography>Loading vans...</Typography>}>
        <FilterAndSortSection />
        <Await resolve={vansDataPromise}>
          <VanElements />
        </Await>
        <Await resolve={vansDataPromise}>
          <Pagination />
        </Await>
      </Suspense>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(4),
}));
