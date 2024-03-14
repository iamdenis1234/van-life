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
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
  marginBottom: theme.spacing(1),
  width: 300,
}));

const StyledLink = styled(Link)({
  textDecoration: "none",
});
