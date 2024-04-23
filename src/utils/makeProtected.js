import { isLoggedIn } from "../api/api.js";
import { protectedRedirect } from "./protectedRedirect.js";

export { makeProtected };

function makeProtected(callback = null) {
  return async (obj) => {
    await requireAuth(obj.request);
    // in case for protected routes without explicit loaders
    return callback ? await callback(obj) : null;
  };
}

async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;

  if (!(await isLoggedIn())) {
    // throw instead of return, so we can write await requireAuth() in loaders
    // without a condition
    throw protectedRedirect(`/login?redirectTo=${pathname}#loginfirst`);
  }
}
