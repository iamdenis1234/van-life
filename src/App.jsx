import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Error } from "./components/Error.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { action as loginAction } from "./pages/login/action.js";
import { loader as loginLoader } from "./pages/login/loader.js";
import { Login } from "./pages/login/Login.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { loader as rootLoader } from "./pages/root/loader.js";
import { Root } from "./pages/root/Root.jsx";
import { action as favoritesAction } from "./pages/user/Favorites/action.js";
import { Favorites } from "./pages/user/Favorites/Favorites.jsx";
import { loader as favoritesLoader } from "./pages/user/Favorites/loader.js";
import { action as logoutAction } from "./pages/user/logout/action.js";
import { loader as profileLoader } from "./pages/user/Profile/loader.js";
import { Profile } from "./pages/user/Profile/Profile.jsx";
import { User } from "./pages/user/User/User.jsx";
import { action as vanDetailsAction } from "./pages/vans/VanDetails/action.js";
import { loader as vanDetailsLoader } from "./pages/vans/VanDetails/loader.js";
import { VanDetails } from "./pages/vans/VanDetails/VanDetails.jsx";
import { loader as vansLoader } from "./pages/vans/Vans/loader.js";
import { Vans } from "./pages/vans/Vans/Vans.jsx";
import { createRedirectTo } from "./utils/createRedirectTo.js";
import { makeProtected } from "./utils/makeProtected.js";

export { App };

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // We use new built-in router error handling, which catches errors itself
      throwOnError: true,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<Error />}
      loader={rootLoader}
    >
      <Route errorElement={<Error />}>
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
          loader={vansLoader(queryClient)}
          shouldRevalidate={() => false}
        />
        <Route
          path="vans/:id"
          element={<VanDetails />}
          loader={vanDetailsLoader(queryClient)}
          action={makeProtected(vanDetailsAction(queryClient))}
        />
        <Route path="user" element={<User />}>
          <Route errorElement={<Error />}>
            <Route
              index
              element={<Profile />}
              loader={makeProtected(profileLoader(queryClient))}
              shouldRevalidate={() => false}
            />
            <Route
              path="favorites"
              element={<Favorites />}
              loader={makeProtected(favoritesLoader(queryClient))}
              action={makeProtected(favoritesAction(queryClient))}
              shouldRevalidate={() => false}
            />
            <Route
              path="logout"
              action={makeProtected(logoutAction)}
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
