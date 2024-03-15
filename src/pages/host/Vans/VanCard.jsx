import { Card, CardHeader, CardMedia, styled } from "@mui/material";

export { VanCard };

function VanCard({ van }) {
  return (
    <StyledCard>
      <StyledCardMedia component="img" src={van.imageUrl} />
      <StyledCardHeader title={van.name} subheader={`$${van.price}/day`} />
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  display: "flex",
});

const StyledCardMedia = styled(CardMedia)({
  // To override mui's default width: 100%. There's inconsistency between
  // firefox and chrome with mui's value.
  // Either minWidth or width is suitable
  minWidth: 0,
  flex: 1,
});

const StyledCardHeader = styled(CardHeader)({
  flex: 2,
});
