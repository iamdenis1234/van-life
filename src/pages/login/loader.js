import { isLoggedIn } from "../../api/api.js";
import { protectedRedirect } from "../../utils/protectedRedirect.js";

export { loader };

async function loader() {
  if (await isLoggedIn()) {
    return protectedRedirect("/user");
  }
  return null;
}
