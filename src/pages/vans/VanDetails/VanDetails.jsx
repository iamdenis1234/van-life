import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { BackToLink } from "./BackToLink.jsx";
import { VanCard } from "./VanCard.jsx";

export { VanDetails };

// TODO: maybe need to rename VanDetails folder and this components to be more
//  consistent with the corresponding route
function VanDetails() {
  console.log("Render VanDetails");

  const { vanPromise } = useLoaderData();

  return (
    <Container>
      <BackToLink />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Await resolve={vanPromise}>{renderVanCard}</Await>
      </Suspense>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, ({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

// When editing VanCard, HMR does not work without this function wrapper
function renderVanCard(van) {
  return <VanCard van={van} />;
}
