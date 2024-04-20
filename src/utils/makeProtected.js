import { redirect } from "react-router-dom";
import { isLoggedIn } from "../api/api.js";

export { makeProtected };

function makeProtected(callback = null) {
  return async (obj) => {
    await requireAuth(obj.request);
    // in case for protected routes without explicit loaders
    return callback ? await callback(obj) : null;
  };
}

async function requireAuth(request) {
  // TODO: fix open redirect vulnerability
  // Great example of how this could be exploited
  // https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/
  // "Anatomy of an Attack" section
  const pathname = new URL(request.url).pathname;

  if (!(await isLoggedIn())) {
    // TODO: consider deleting this comment
    // throw instead of return, so we can write await requireAuth() in loaders
    // without a condition
    // TODO: consider using URL/URLSearchParams instead
    throw redirect(`/login?redirectTo=${pathname}#loginfirst`);
  }
}
