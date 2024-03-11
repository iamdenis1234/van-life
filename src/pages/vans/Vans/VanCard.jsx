import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { VanType } from "../VanType.jsx";

export { VanCard };

function VanCard({ van, LinkProps }) {
  return (
    <Card>
      <StyledLink {...LinkProps}>
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
