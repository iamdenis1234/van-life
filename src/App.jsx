import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import "./index.css";

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
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
