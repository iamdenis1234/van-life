import { redirect } from "react-router-dom";
import { isLoggedIn } from "../../api.js";

export { loader };

async function loader() {
  console.log("start Login loader");
  if (await isLoggedIn()) {
    const response = redirect("/host");
    // for compatibility with miragejs
    // without this line it won't redirect
    response.body = null;
    console.log("end Login loader");
    return response;
  }
  return null;
}
