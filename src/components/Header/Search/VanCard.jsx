import { Card, CardHeader, CardMedia, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { VanType } from "../../../pages/vans/VanType.jsx";
import { Highlight } from "../../Highlight.jsx";

export { VanCard };

function VanCard({ van, onClick }) {
  const name = <Highlight>{van.highlightedReactElements.name}</Highlight>;
  const price = <Highlight>{van.highlightedReactElements.price}</Highlight>;

  return (
    <StyledCard component={Link} to={`/vans/${van.id}`} onClick={onClick}>
      <StyledCardMedia component="img" src={van.imageUrl} />
      <StyledCardHeader
        title={name}
        subheader={<>${price}/day</>}
        action={<VanType type={van.type} size="small" />}
      />
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  display: "flex",
  textDecoration: "none",
});

const StyledCardMedia = styled(CardMedia)({
  width: 120,
  height: 120,
});

const StyledCardHeader = styled(CardHeader)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});
