import "/server.js";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { VanDetails } from "./pages/VanDetails.jsx";
import { Vans } from "./pages/Vans.jsx";

export { App };

function App() {
  console.log("Render App");
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
