import "/server.js";
import "normalize.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Error } from "./components/Error.jsx";
import "./index.css";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { Dashboard } from "./pages/host/Dashboard/Dashboard.jsx";
import { loader as dashboardLoader } from "./pages/host/Dashboard/loader.js";
import { Host } from "./pages/host/Host.jsx";
import { Income } from "./pages/host/Income/Income.jsx";
import { loader as incomeLoader } from "./pages/host/Income/loader.js";
import { action as logoutAction } from "./pages/host/logout/action.js";
import { loader as reviewsLoader } from "./pages/host/Reviews/loader.js";
import { Reviews } from "./pages/host/Reviews/Reviews.jsx";
import { loader as hostVanLoader } from "./pages/host/Van/loader.js";
import { Van as HostVan } from "./pages/host/Van/Van.jsx";
import { VanDetails as HostVanDetails } from "./pages/host/Van/VanDetails.jsx";
import { VanPhotos as HostVanPhotos } from "./pages/host/Van/VanPhotos.jsx";
import { VanPricing as HostVanPricing } from "./pages/host/Van/VanPricing.jsx";
import { loader as hostVansLoader } from "./pages/host/Vans/loader.js";
import { Vans as HostVans } from "./pages/host/Vans/Vans.jsx";
import { action as loginAction } from "./pages/login/action.js";
import { loader as loginLoader } from "./pages/login/loader.js";
import { Login } from "./pages/login/Login.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Root } from "./pages/Root.jsx";
import { loader as vanDetailsLoader } from "./pages/vans/VanDetails/loader.js";
import { VanDetails } from "./pages/vans/VanDetails/VanDetails.jsx";
import { loader as vansLoader } from "./pages/vans/Vans/loader.js";
import { Vans } from "./pages/vans/Vans/Vans.jsx";
import { createRedirectTo } from "./utils/createRedirectTo.js";

export { App };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        errorElement={<Error />}
        loader={vanDetailsLoader}
      />
      <Route path="host" element={<Host />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVan />}
          errorElement={<Error />}
          loader={hostVanLoader}
        >
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route
          path="logout"
          action={logoutAction}
          loader={createRedirectTo("/")}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  console.log("Render App");

  return <RouterProvider router={router} />;
}
