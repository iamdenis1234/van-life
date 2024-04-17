import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { vansQuery } from "./loader.js";
import { NoVansFound } from "./NoVansFound.jsx";
import { VansContent } from "./VansContent.jsx";

export { Vans };

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

const Container = styled(CustomContainer)(section, ({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(4),
}));
