import { Clear } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Link, useFetcher } from "react-router-dom";

export { VanCard };

function VanCard({ van }) {
  const fetcher = useFetcher();
  const deleting = fetcher.data === "deleted" || fetcher.state !== "idle";

  // Optimistic UI
  if (deleting) {
    return null;
  }

  return (
    <StyledCard>
      <fetcher.Form method="post">
        <Tooltip title="Remove from Favorites">
          <StyledIconButton type="submit">
            <StyledClear />
          </StyledIconButton>
        </Tooltip>
        <input type="text" name="id" value={van.id} hidden readOnly />
      </fetcher.Form>
      <StyledLink to={`/vans/${van.id}`}>
        <StyledCardMedia component="img" src={van.imageUrl} />
        <CardHeader title={van.name} subheader={`$${van.price}/day`} />
      </StyledLink>
    </StyledCard>
  );
}

const StyledCard = styled(Card)({
  position: "relative",
});

const StyledIconButton = styled(IconButton)({
  position: "absolute",
  right: 0,
});

const StyledClear = styled(Clear)({
  fontSize: 22,
});

const StyledLink = styled(Link)({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  height: "100%",
});

const StyledCardMedia = styled(CardMedia)({
  width: 90,
  height: 90,
});
