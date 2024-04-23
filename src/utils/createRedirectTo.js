import { protectedRedirect } from "./protectedRedirect.js";

export { createRedirectTo };

function createRedirectTo(path) {
  return () => {
    return protectedRedirect(path);
  };
}
