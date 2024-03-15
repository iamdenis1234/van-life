import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { VanType } from "../VanType.jsx";

export { VanCard };

// TODO: add image gallery via https://github.com/xiaolin/react-image-gallery

function VanCard({ van }) {
  console.log("Render Van");

  return (
    <Card>
      <CardMedia component="img" src={van.imageUrl} />
      <HeaderContainer>
        <StyledCardHeader
          title={
            <Typography variant="h2" component="h1">
              {van.name}
            </Typography>
          }
        />
        <VanType type={van.type} />
      </HeaderContainer>
      <CardContent>
        <Price variant="h4" component="h2">{`$${van.price}/day`}</Price>
        <Typography variant="body2">{van.description}</Typography>
      </CardContent>
    </Card>
  );
}

const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

const Price = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledCardHeader = styled(CardHeader)({
  padding: 0,
});
