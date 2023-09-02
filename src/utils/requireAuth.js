import { redirect } from "react-router-dom";

export { requireAuth };

async function requireAuth() {
  console.log("requireAuth");

  // faking authentication
  const isLoggedIn = false;
  if (!isLoggedIn) {
    const response = redirect("/login");
    // for compatibility with miragejs
    // without this line it won't redirect
    response.body = null;
    // throw instead of return, so we can write await requireAuth()
    // without a condition
    throw response;
  }
}
