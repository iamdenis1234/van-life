import { styled } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";
import { Footer } from "../../components/Footer.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { isLoggedInContext } from "../../context/IsLoggedInContext.js";

export { Root };

function Root() {
  console.log("Render Root");

  const isLoggedIn = useLoaderData();

  return (
    <isLoggedInContext.Provider value={isLoggedIn}>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </isLoggedInContext.Provider>
  );
}

// TODO: remove overflow: hidden and fix Home img overflow in a different way,
//  so that other content could be visible when overflowed
const Main = styled("main")({
  overflow: "hidden",
});
