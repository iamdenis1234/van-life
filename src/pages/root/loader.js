import { isLoggedIn } from "../../api/api.js";

export { loader };

async function loader() {
  return await isLoggedIn();
}
