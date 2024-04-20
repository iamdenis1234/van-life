import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { BackToLink } from "./BackToLink.jsx";
import { vanQuery } from "./loader.js";
import { VanCard } from "./VanCard.jsx";

export { VanDetails };

function VanDetails() {
  const params = useParams();

  const { data: van, isPending } = useQuery(vanQuery(params.id));

  return (
    <Container>
      <BackToLink />
      {isPending ? (
        <Typography>Loading...</Typography>
      ) : (
        <StyledVanCard van={van} />
      )}
    </Container>
  );
}

const Container = styled(CustomContainer)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const StyledVanCard = styled(VanCard)({
  maxWidth: 600,
  marginInline: "auto",
});
