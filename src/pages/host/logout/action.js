import { redirect } from "react-router-dom";
import { logout } from "../../../api.js";

export { action };

async function action({ request }) {
  console.log("start logout action");
  await logout();
  const response = redirect("/");
  // for compatibility with miragejs
  // without this line it won't redirect
  response.body = null;
  console.log("end logout action");
  return response;
}
