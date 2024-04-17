import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { Highlight } from "../../../components/Highlight.jsx";
import { useIsLoggedIn } from "../../../context/IsLoggedInContext.js";
import { FavoriteToggle } from "../VanDetails/FavoriteToggle.jsx";
import { VanType } from "../VanType.jsx";

export { VanCard };

function VanCard({ van }) {
  const isLoggedIn = useIsLoggedIn();
  const [searchParams] = useSearchParams();
  const name = <Highlight>{van.highlightedReactElements.name}</Highlight>;
  const price = <Highlight>{van.highlightedReactElements.price}</Highlight>;

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
  height: 300,
});
