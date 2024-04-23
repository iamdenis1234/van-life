import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { CustomProgress } from "../../../components/CustomProgress.jsx";
import { vansQuery } from "./loader.js";
import { NoVansFound } from "./NoVansFound.jsx";
import { VansContent } from "./VansContent.jsx";

export { Vans };

function Vans() {
  const [searchParams] = useSearchParams();
  const query = useQuery(vansQuery(searchParams));
  const { data: vansData, isPending } = query;

  function renderContent() {
    if (isPending) {
      return <CustomProgress title="loading vans" />;
    }

    if (vansData.vans.length) {
      return <VansContent vansData={vansData} />;
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

const Container = styled(CustomContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(4),
}));
