import { redirect } from "react-router-dom";
import { isLoggedIn } from "../../api/api.js";

export { loader };

async function loader() {
  console.log("start Login loader");
  if (await isLoggedIn()) {
    const response = redirect("/host");
    console.log("end Login loader");
    return response;
  }
  return null;
}
