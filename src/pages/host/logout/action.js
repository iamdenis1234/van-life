import { redirect } from "react-router-dom";
import { logout } from "../../../api.js";

export { action };

async function action() {
  console.log("start logout action");
  await logout();
  const response = redirect("/");
  console.log("end logout action");
  return response;
}
