import { styled } from "@mui/material";
import { Form, Outlet } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { Link } from "./Link.jsx";

export { User };

function User() {
  console.log("Render User");

  return (
    <CustomContainer>
      <Navigation>
        <LinkContainer>
          <Link to="." end>
            Profile
          </Link>
          <Link to="favorites">Favorites</Link>
        </LinkContainer>
        <Form method="post" action="logout">
          <CustomButton type="submit" variant="text" color="inherit">
            Logout
          </CustomButton>
        </Form>
      </Navigation>
      <Outlet />
    </CustomContainer>
  );
}

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
