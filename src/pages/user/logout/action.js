import { logout } from "../../../api/api.js";
import { protectedRedirect } from "../../../utils/protectedRedirect.js";

export { action };

async function action() {
  await logout();
  return protectedRedirect("/");
}
