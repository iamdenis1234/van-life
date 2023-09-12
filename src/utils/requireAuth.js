import { redirect } from "react-router-dom";

export { requireAuth };

async function requireAuth(request) {
  console.log("requireAuth");
  // TODO: fix open redirect vulnerability
  // Great example of how this could be exploited
  // https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/
  // "Anatomy of an Attack" section
  const pathname = new URL(request.url).pathname;

  // faking authentication
  const isLoggedIn = localStorage.getItem("loggedin");
  if (!isLoggedIn) {
    const response = redirect(`/login?redirectTo=${pathname}#loginfirst`);
    // for compatibility with miragejs
    // without this line it won't redirect
    response.body = null;
    // throw instead of return, so we can write await requireAuth() in loaders
    // without a condition
    throw response;
  }
}
