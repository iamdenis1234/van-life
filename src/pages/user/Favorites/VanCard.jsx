import { Clear } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  styled,
  Tooltip,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { Link, useFetcher } from "react-router-dom";

export { VanCard };

function VanCard({ van }) {
  const fetcher = useFetcher();
  // for optimistic UI
  const deleting = fetcher.state !== "idle";
  const [animationEnd, setAnimationEnd] = useState(false);

  if (animationEnd) {
    return null;
  }

  return (
    <Zoom
      in={!deleting}
      onExited={() => {
        setAnimationEnd(true);
      }}
      appear={false}
      timeout={300}
    >
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
          <StyledCardMedia component="img" src={van.imageUrl} alt={van.name} />
          <CardHeader title={van.name} subheader={`$${van.price}/day`} />
        </StyledLink>
      </StyledCard>
    </Zoom>
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
