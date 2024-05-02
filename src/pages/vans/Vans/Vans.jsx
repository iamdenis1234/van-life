import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { CustomProgress } from "../../../components/CustomProgress/CustomProgress.jsx";
import { vansQuery } from "./loader.js";
import { NoVansFound } from "./NoVansFound.jsx";
import { VansContent } from "./VansContent.jsx";

export { Vans };

function Vans() {
  const [searchParams] = useSearchParams();
  const { data: vansData, isPending } = useQuery(vansQuery(searchParams));
  const titleRef = useRef(null);

  function scrollToTitle() {
    titleRef.current.scrollIntoView({ block: "nearest" });
  }

  function renderContent() {
    if (isPending) {
      return <CustomProgress />;
    }

    if (vansData.vans.length) {
      return <VansContent vansData={vansData} onPageChange={scrollToTitle} />;
    }

    return <NoVansFound />;
  }

  return (
    <Container>
      <Typography ref={titleRef} variant="h1">
        Explore our van options
      </Typography>
      {renderContent()}
    </Container>
  );
}

const Container = styled(CustomContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(4),
}));
