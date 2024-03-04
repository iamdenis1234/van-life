import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";

export { VanCard };

const filterColors = {
  simple: "#e17654",
  rugged: "#115e59",
  luxury: "#161616",
};

function VanCard({ van, LinkProps }) {
  return (
    <Card>
      <StyledLink {...LinkProps}>
        <CardMedia component="img" src={van.imageUrl} />
      </StyledLink>
      <CardHeader title={van.name} subheader={`$${van.price}/day`} />
      <CardContent>
        <Type
          component="span"
          size="small"
          disableElevation
          disableRipple
          type={van.type}
        >
          {van.type}
        </Type>
      </CardContent>
    </Card>
  );
}

// TODO: maybe need to remove this kind of type at all or display it
//  in a different form without specific colors for each type
const Type = styled(CustomButton, {
  shouldForwardProp: (prop) => prop !== "type",
})(({ type }) => ({
  backgroundColor: filterColors[type],
  color: "white",
  cursor: "auto",
  "&:hover": {
    backgroundColor: filterColors[type],
  },
}));

const StyledLink = styled(Link)({
  textDecoration: "none",
});
