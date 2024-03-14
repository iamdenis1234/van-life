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
  flex: 1,
});

const StyledCardHeader = styled(CardHeader)({
  "& .MuiCardHeader-title": {
    fontSize: 20,
  },
  flex: 2,
});
