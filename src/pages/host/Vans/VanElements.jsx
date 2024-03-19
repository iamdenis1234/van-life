import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { VanCard } from "./VanCard.jsx";

export { VanElements };

function VanElements({ vans }) {
  console.log("render host VanElements");

  const vansElements = vans.map((van) => (
    <StyledLink to={`/vans/${van.id}`} key={van.id}>
      <VanCard van={van} />
    </StyledLink>
  ));

  return <Container>{vansElements}</Container>;
}

const Container = styled("div")(({ theme }) => ({
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, min(300px, 100%))",
}));

const StyledLink = styled(Link)({
  textDecoration: "none",
});
