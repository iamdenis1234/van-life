import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { Error } from "../../../components/Error.jsx";
import { section } from "../../../mixins.js";
import { BackToLink } from "./BackToLink.jsx";
import { VanCard } from "./VanCard.jsx";

export { VanDetails };

function VanDetails() {
  console.log("Render VanDetails");

  const { vanPromise } = useLoaderData();

  return (
    <Container>
      <BackToLink />
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Await resolve={vanPromise} errorElement={<Error />}>
          <StyledVanCard />
        </Await>
      </Suspense>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, ({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const StyledVanCard = styled(VanCard)({
  maxWidth: 600,
  marginInline: "auto",
});
