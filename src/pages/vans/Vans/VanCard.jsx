import {
  alpha,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { useIsLoggedIn } from "../../../context/IsLoggedInContext.js";
import { FavoriteToggle } from "../VanDetails/FavoriteToggle.jsx";
import { VanType } from "../VanType.jsx";

export { VanCard };

function VanCard({ van }) {
  const isLoggedIn = useIsLoggedIn();
  const [searchParams] = useSearchParams();
  const name = <Highlight>{van.highlightReactComponents.name}</Highlight>;
  const price = <Highlight>{van.highlightReactComponents.price}</Highlight>;

  return (
    <Card>
      <StyledLink
        to={van.id}
        state={{
          // Can't use searchParams without toString() in google chrome:
          //  URLSearchParams could not be cloned.
          // Seems like it only accepts primitive values
          searchParams: searchParams.toString(),
        }}
      >
        <StyledCardMedia component="img" src={van.imageUrl} />
      </StyledLink>
      <CardHeader
        title={name}
        subheader={<>${price}/day</>}
        action={isLoggedIn && <FavoriteToggle van={van} />}
      />
      <CardContent>
        <VanType type={van.type} size="small" />
      </CardContent>
    </Card>
  );
}

const StyledLink = styled(Link)({
  display: "block",
  textDecoration: "none",
});

const StyledCardMedia = styled(CardMedia)({
  height: 295,
});

const Highlight = styled("span")(({ theme }) => ({
  "& > em": {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
    fontStyle: "normal",
  },
}));
