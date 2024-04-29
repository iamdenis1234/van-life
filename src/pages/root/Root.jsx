import { styled } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";
import { Footer } from "../../components/Footer.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { IsLoggedInContext } from "../../context/IsLoggedInContext.js";
import { section } from "../../styles/mixins.js";

export { Root };

function Root() {
  const isLoggedIn = useLoaderData();

  return (
    <IsLoggedInContext.Provider value={isLoggedIn}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </IsLoggedInContext.Provider>
  );
}

const Main = styled("main")(section, {});
