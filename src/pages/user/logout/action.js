import { redirect } from "react-router-dom";
import { logout } from "../../../api/api.js";

export { action };

async function action() {
  await logout();
  return redirect("/");
}
