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
import { Host } from "./pages/host/Host/Host.jsx";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          element={<Login />}
          action={loginAction}
          loader={loginLoader}
        />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route
          path="vans/:id"
          element={<VanDetails />}
          loader={vanDetailsLoader}
        />
        <Route path="host" element={<Host />}>
          <Route errorElement={<Error />}>
            <Route index element={<Dashboard />} loader={dashboardLoader} />
            <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
            <Route
              path="logout"
              action={logoutAction}
              loader={createRedirectTo("/")}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>,
  ),
);

function App() {
  console.log("Render App");

  return <RouterProvider router={router} />;
}

// TODO: maybe need to make a scroll up button

// TODO: We recommend naming props from the component’s own point of view rather than the context in which it is being used.
//  https://legacy.reactjs.org/docs/components-and-props.html#:~:text=We%20recommend%20naming%20props%20from%20the%20component%E2%80%99s%20own%20point%20of%20view%20rather%20than%20the%20context%20in%20which%20it%20is%20being%20used.

// TODO: maybe remove some 'container' kind of components and apply
//  their styles to direct children

// TODO: consider renaming some "Container" kind of components to something
//  more meaningful

// TODO: maybe make all styled components follow bem external geometry and positioning rules
//  https://en.bem.info/methodology/css/#external-geometry-and-positioning

// TODO: do not expose type of the component in its name, instead of
//  FilterChip/ClearFilterButton use Filter/ClearFilter, etc.

// TODO: maybe show 404 page instead of redirecting to login page in cases where
//  an unauthenticated user tries to access private pages for security reasons
