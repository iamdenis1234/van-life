import { alpha, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../components/CustomButton.jsx";
import { CustomContainer } from "../components/CustomContainer.jsx";

export { About };

function About() {
  console.log("Render About");

  return (
    <CustomContainer>
      <Img
        src="/assets/images/about.jpg"
        width="1150"
        height="400"
        alt="about"
      />
      <Content>
        <Typography variant="h1">
          Don’t squeeze in a sedan when you could relax in a van.
        </Typography>
        <div>
          <Typography>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </Typography>
          <Typography>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </Typography>
        </div>
        <ExploreContainer>
          <Typography variant="h3" component="p">
            Your destination is waiting.
          </Typography>
          <VanReadySubtitle variant="h3" component="p">
            Your van is ready.
          </VanReadySubtitle>
          <Button color="luxury" size="large" component={Link} to="/vans">
            Explore our vans
          </Button>
        </ExploreContainer>
      </Content>
    </CustomContainer>
  );
}

const Content = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(3),
}));

const Img = styled("img")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  objectFit: "cover",
}));

const ExploreContainer = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 0.8),
  padding: theme.spacing(2, 4),
  borderRadius: theme.shape.borderRadius,
}));

const VanReadySubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const Button = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));
