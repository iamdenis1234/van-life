import { redirect } from "react-router-dom";
import { loginUser } from "../../api.js";

export { action };

async function action({ request }) {
  console.log("start Login action");
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const user = await loginUser({ email, password });
    console.log(user);
  } catch (e) {
    console.log(e);
    return new Error(e.response.data.message);
  }

  localStorage.setItem("loggedin", true);
  const response = redirect("/host");
  // for compatibility with miragejs
  // without this line it won't redirect
  response.body = null;
  console.log("end Login action");
  return response;
}
