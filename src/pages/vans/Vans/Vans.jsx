import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { FilterAndSortSection } from "./FilterAndSortSection.jsx";
import { VanElements } from "./VanElements.jsx";

export { Vans };

// TODO: fix the delay for changing the selected button filter, so that it
//  doesn't depend on the time the filter is applied

function Vans() {
  console.log("Render Vans");
  const { vansPromise } = useLoaderData();

  return (
    <Container>
      <Typography variant="h1">Explore our van options</Typography>
      <Suspense fallback={<Typography>Loading vans...</Typography>}>
        <FilterAndSortSection />
        <Await resolve={vansPromise}>
          <VanElements />
        </Await>
      </Suspense>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, {});
