import { styled } from "@mui/material";
import { Form, Outlet } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { Link } from "./Link.jsx";

export { Host };

function Host() {
  console.log("Render Host");

  return (
    <Container>
      <Navigation>
        <LinkContainer>
          <Link to="." end>
            Dashboard
          </Link>
          <Link to="vans">Vans</Link>
        </LinkContainer>
        <Form method="post" action="logout" replace>
          <CustomButton variant="text" color="inherit">
            Logout
          </CustomButton>
        </Form>
      </Navigation>
      <Outlet />
    </Container>
  );
}

const Container = styled(CustomContainer)(section, {});

const LinkContainer = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: theme.spacing(2),
}));

const Navigation = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));
