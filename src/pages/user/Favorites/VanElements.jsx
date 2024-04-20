import { styled } from "@mui/material";
import { VanCard } from "./VanCard.jsx";

export { VanElements };

function VanElements({ vans }) {
  const vansElements = vans.map((van) => <VanCard key={van.id} van={van} />);

  return <Container>{vansElements}</Container>;
}

const Container = styled("div")(({ theme }) => ({
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, min(300px, 100%))",
}));
