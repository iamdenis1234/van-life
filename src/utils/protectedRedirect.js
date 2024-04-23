import { redirect } from "react-router-dom";

export { protectedRedirect };

// Great example of how Open Redirect could be exploited
// https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/
// "Anatomy of an Attack" section
function protectedRedirect(url) {
  // specifying double slash or origin for redirect() makes react-router
  // redirect to external origins, which creates Open Redirect vulnerability.
  // We fix it here
  return redirect(preserveSingleSlashes("/" + url));
}

function preserveSingleSlashes(str) {
  return str.replace(/\/+/g, "/");
}
