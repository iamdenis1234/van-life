import { styled } from "@mui/material";
import { Form, Outlet } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { Link } from "./Link.jsx";

export { User };

function User() {
  console.log("Render User");

  return (
    <Container>
      <Navigation>
        <LinkContainer>
          <Link to="." end>
            Dashboard
          </Link>
          <Link to="favorites">Favorites</Link>
        </LinkContainer>
        {/*TODO: maybe use fetcher.Form instead*/}
        <Form method="post" action="logout" replace>
          <CustomButton type="submit" variant="text" color="inherit">
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
