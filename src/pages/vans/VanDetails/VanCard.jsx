import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { useIsLoggedIn } from "../../../context/IsLoggedInContext.js";
import { useBreakpointUp } from "../../../hooks/useBreakpointUp.js";
import { VanType } from "../VanType.jsx";
import { FavoriteToggle } from "./FavoriteToggle.jsx";

export { VanCard };

function VanCard({ className, van }) {
  const isLoggedIn = useIsLoggedIn();
  const smBreakpointMatches = useBreakpointUp("sm");

  return (
    <Card elevation={0} className={className}>
      <StyledCardMedia component="img" src={van.imageUrl} alt={van.name} />
      <CardHeader
        title={
          <Typography variant="h2" component="h1">
            {van.name}
          </Typography>
        }
        subheader={<StyledVanType type={van.type} />}
        action={isLoggedIn && <FavoriteToggle van={van} />}
      />
      <CardContent>
        <Price variant="h4" component="h2">{`$${van.price}/day`}</Price>
        <Typography variant={smBreakpointMatches ? "body1" : "body2"}>
          {van.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const Price = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledVanType = styled(VanType)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 350,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    height: 500,
  },
  [theme.breakpoints.up("md")]: {
    height: 600,
  },
  marginInline: "auto",
}));
