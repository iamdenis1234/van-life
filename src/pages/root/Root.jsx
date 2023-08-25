import { Outlet } from "react-router-dom";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";

export { Root };

function Root() {
  console.log("Render Root");

  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
