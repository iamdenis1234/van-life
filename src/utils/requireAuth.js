import { redirect } from "react-router-dom";

export { requireAuth };

async function requireAuth() {
  console.log("requireAuth");

  // faking authentication
  const isLoggedIn = localStorage.getItem("loggedin");
  if (!isLoggedIn) {
    const response = redirect("/login#loginfirst");
    // for compatibility with miragejs
    // without this line it won't redirect
    response.body = null;
    // throw instead of return, so we can write await requireAuth() in loaders
    // without a condition
    throw response;
  }
}
