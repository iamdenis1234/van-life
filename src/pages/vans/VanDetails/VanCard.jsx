import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { useAsyncValue } from "react-router-dom";
import { useBreakpointUp } from "../../../hooks/useBreakpoint.js";
import { VanType } from "../VanType.jsx";
import { FavoriteToggle } from "./FavoriteToggle.jsx";

export { VanCard };

// TODO: add image gallery via https://github.com/xiaolin/react-image-gallery

function VanCard({ className }) {
  console.log("Render VanCard");

  const smBreakpointMatches = useBreakpointUp("sm");
  const van = useAsyncValue();

  return (
    <Card elevation={0} className={className}>
      <CardMedia component="img" src={van.imageUrl} />
      <CardHeader
        title={
          <Typography variant="h2" component="h1">
            {van.name}
          </Typography>
        }
        subheader={<VanType type={van.type} />}
        action={van.favorite !== undefined && <FavoriteToggle van={van} />}
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
