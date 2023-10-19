import { redirect } from "react-router-dom";
import { isLoggedIn, loginUser, logInWithGoogle } from "../../api.js";

export { action };

async function action({ request }) {
  console.log("start Login action");

  if (!(await isLoggedIn())) {
    try {
      await logIn(request);
    } catch (e) {
      console.log("error in Login action");
      console.log(e);
      return e;
    }
  }

  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  const response = redirect(pathname);
  // for compatibility with miragejs
  // without this line it won't redirect
  response.body = null;
  console.log("end Login action");
  return response;
}

async function logIn(request) {
  const formData = await request.formData();
  const provider = formData.get("provider");

  if (provider === "emailAndPassword") {
    await logInWithEmailAndPassword(formData);
  } else if (provider === "google") {
    await logInWithGoogle();
  }
}

async function logInWithEmailAndPassword(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await loginUser({ email, password });
  console.log(user);
}
