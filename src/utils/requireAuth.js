import { redirect } from "react-router-dom";
import { isLoggedIn } from "../api.js";

export { requireAuth };

async function requireAuth(request) {
  console.log("requireAuth");
  // TODO: fix open redirect vulnerability
  // Great example of how this could be exploited
  // https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/
  // "Anatomy of an Attack" section
  const pathname = new URL(request.url).pathname;

  if (!(await isLoggedIn())) {
    // throw instead of return, so we can write await requireAuth() in loaders
    // without a condition
    throw redirect(`/login?redirectTo=${pathname}#loginfirst`);
  }
}
