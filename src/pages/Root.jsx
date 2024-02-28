import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";

export { Root };

function Root() {
  console.log("Render Root");

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

const Main = styled("main")({
  overflow: "hidden",
});
