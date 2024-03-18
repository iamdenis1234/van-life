import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../components/CustomButton.jsx";
import { CustomContainer } from "../components/CustomContainer.jsx";
import { section } from "../mixins.js";

export { Home };

function Home() {
  console.log("Render Home");

  return (
    <HomeSection>
      <CustomContainer>
        <Typography variant="h1">
          You got the travel plans, we got the travel vans.
        </Typography>
        <Description>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </Description>
        <HomeButton component={Link} size="large" to="/vans">
          Explore Vans
        </HomeButton>
      </CustomContainer>
      <Img />
    </HomeSection>
  );
}

const HomeSection = styled("section")(section, {});

const Description = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const HomeButton = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(5),
  paddingInline: theme.spacing(4),
  paddingBlock: theme.spacing(1.5),
}));

const Img = styled("div")({
  height: 350,
  width: 420,
  boxShadow: "0 0 28px 29px white inset",
  backgroundImage: "url(/assets/images/modest-explorer.jpg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  // TODO: maybe need absolute position
  position: "relative",
  top: -105,
  left: 54,
  zIndex: -1,
});
