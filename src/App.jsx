import "/server.js";
import "normalize.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { Dashboard } from "./pages/host/Dashboard.jsx";
import { Host } from "./pages/host/Host.jsx";
import { Income } from "./pages/host/Income.jsx";
import { Reviews } from "./pages/host/Reviews.jsx";
import { Van as HostVan } from "./pages/host/Van.jsx";
import { VanDetails as HostVanDetails } from "./pages/host/VanDetails.jsx";
import { VanPhotos as HostVanPhotos } from "./pages/host/VanPhotos.jsx";
import { VanPricing as HostVanPricing } from "./pages/host/VanPricing.jsx";
import { Vans as HostVans } from "./pages/host/Vans.jsx";
import { Root } from "./pages/root/Root.jsx";
import { VanDetails } from "./pages/vans/VanDetails.jsx";
import { Vans } from "./pages/vans/Vans.jsx";

export { App };

function App() {
  console.log("Render App");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVan />}>
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
