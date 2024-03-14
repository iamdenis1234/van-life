import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { VanElements } from "./VanElements.jsx";

export { Vans };

function Vans() {
  console.log("Render host Vans");

  const { vansPromise } = useLoaderData();

  return (
    <section>
      <Title variant="h1">Your favorite vans</Title>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vansPromise}>{renderVanElements}</Await>
      </Suspense>
    </section>
  );
}

function renderVanElements(vans) {
  return <VanElements vans={vans} />;
}

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 26,
  marginBottom: theme.spacing(2),
}));
