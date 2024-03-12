import "/server.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Error } from "./components/Error.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { Dashboard } from "./pages/host/Dashboard/Dashboard.jsx";
import { loader as dashboardLoader } from "./pages/host/Dashboard/loader.js";
import { Host } from "./pages/host/Host.jsx";
import { action as logoutAction } from "./pages/host/logout/action.js";
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

// TODO: consider deleting commented routes at all
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
        {/*<Route path="income" element={<Income />} loader={incomeLoader} />*/}
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />
        {/*<Route
          path="vans/:id"
          element={<HostVan />}
          errorElement={<Error />}
          loader={hostVanLoader}
        >
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>*/}
        {/*<Route path="reviews" element={<Reviews />} loader={reviewsLoader} />*/}
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

// TODO: maybe make all styled components follow bem external geometry and positioning rules
//  https://en.bem.info/methodology/css/#external-geometry-and-positioning

// TODO: do not expose type of the component in its name, instead of
//  FilterChip/ClearFilterButton use Filter/ClearFilter, etc.

// TODO: maybe show 404 page instead of redirecting to login page in cases where
//  an unauthenticated user tries to access private pages for security reasons
