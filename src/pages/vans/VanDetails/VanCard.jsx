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
        <StyledCardHeader title={van.name} subheader={`$${van.price}/day`} />
        <VanType type={van.type} />
      </HeaderContainer>
      <CardContent>
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

const StyledCardHeader = styled(CardHeader)({
  padding: 0,
});
