import {
  createNewUserInDb,
  isNewUser,
  logInWithEmailAndPassword as logInWithEmailAndPasswordApi,
  logInWithGoogle,
} from "../../api/api.js";
import { protectedRedirect } from "../../utils/protectedRedirect.js";

export { action };

async function action({ request }) {
  const formData = await request.formData();

  let userCred;
  try {
    userCred = await logIn(formData);
  } catch (error) {
    return error;
  }

  if (isNewUser(userCred)) {
    await createNewUserInDb(userCred.user.uid);
  }

  return createRedirect(request);
}

async function logIn(formData) {
  const provider = formData.get("provider");

  let userCred;
  if (provider === "emailAndPassword") {
    userCred = await logInWithEmailAndPassword(formData);
  } else {
    userCred = await logInWithGoogle();
  }
  return userCred;
}

function createRedirect(request) {
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/user";
  return protectedRedirect(pathname);
}

async function logInWithEmailAndPassword(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  return await logInWithEmailAndPasswordApi(email, password);
}
