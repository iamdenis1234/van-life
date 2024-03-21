import { Alert, styled } from "@mui/material";
import { CustomContainer } from "../components/CustomContainer.jsx";
import { section } from "../mixins.js";

export { About };

// TODO: maybe redo about page with the description of the project or delete
//  this page altogether
function About() {
  console.log("Render About");

  /*
    return (
      <div className="about-page-container">
        <img src="/assets/images/about-hero.png" className="about-hero-image" />
        <div className="about-page-content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-page-cta">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    );
  */
  return (
    <Container>
      <Alert severity="info">Page Under Development</Alert>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, {});
