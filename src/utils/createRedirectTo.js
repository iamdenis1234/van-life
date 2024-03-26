import { redirect } from "react-router-dom";

export { createRedirectTo };

function createRedirectTo(path) {
  return () => {
    console.log("start redirectTo: " + path);
    const response = redirect(path);
    console.log("end redirectTo: " + path);
    return response;
  };
}
