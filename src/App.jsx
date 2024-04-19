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
            <Route index element={<Profile />} loader={makeProtected()} />
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
  console.log("Render App");
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

// TODO: consider add ProtectedLayout and subscribe with onAuthStateChanged
//  to redirect in multiple tabs when the user has logged out

// TODO: consider this https://reactrouter.com/en/main/route/error-element#throwing-responses

// TODO: add index type in firestore to speed up search

// TODO: maybe need to make a scroll up button

// TODO: if the hook is used in one component only, move it to the file where the component is

// TODO: add the ability to delete the current user's account

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
