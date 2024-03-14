import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { VanType } from "../VanType.jsx";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";

export { VanCard };

function VanCard({ van }) {
  const [searchParams] = useSearchParams();
  const [currentTypeFilter] = useCurrentTypeFilter();

  return (
    <Card>
      <StyledLink
        to={van.id}
        state={{
          // Can't use searchParams without toString() in google chrome:
          //  URLSearchParams could not be cloned.
          // Seems like it only accepts primitive values
          searchParams: searchParams.toString(),
          type: currentTypeFilter,
        }}
      >
        <CardMedia component="img" src={van.imageUrl} />
      </StyledLink>
      <CardHeader title={van.name} subheader={`$${van.price}/day`} />
      <CardContent>
        <VanType type={van.type} size="small" />
      </CardContent>
    </Card>
  );
}

const StyledLink = styled(Link)({
  textDecoration: "none",
});
