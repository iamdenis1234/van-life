import { redirect } from "react-router-dom";

export { createRedirectTo };

function createRedirectTo(path) {
  return () => {
    console.log("start redirectTo: " + path);
    const response = redirect(path);
    // for compatibility with miragejs
    // without this line it won't redirect
    response.body = null;
    console.log("end redirectTo: " + path);
    return response;
  };
}
