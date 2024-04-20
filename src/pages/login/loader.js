import { redirect } from "react-router-dom";
import { isLoggedIn } from "../../api/api.js";

export { loader };

async function loader() {
  if (await isLoggedIn()) {
    return redirect("/user");
  }
  return null;
}
