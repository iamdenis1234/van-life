import { styled } from "@mui/material";
import { useAsyncValue } from "react-router-dom";
import { EmptyFavorites } from "./EmptyFavorites.jsx";
import { VanCard } from "./VanCard.jsx";

export { VanElements };

function VanElements() {
  console.log("render host VanElements");
  const vans = useAsyncValue();

  if (!vans.length) {
    return <EmptyFavorites />;
  }

  const vansElements = vans.map((van) => <VanCard key={van.id} van={van} />);

  return <Container>{vansElements}</Container>;
}

const Container = styled("div")(({ theme }) => ({
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, min(300px, 100%))",
  gridAutoRows: 90,
}));
