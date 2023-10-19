import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export {
  getVans,
  getHostVans,
  loginUser,
  logInWithGoogle,
  onAuthStateChanged,
  isLoggedIn,
  logout,
};

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

async function getVans(id) {
  console.log("start getting vans");
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const { data } = await axios(url);
  console.log("end getting vans");
  return data.vans;
}

async function getHostVans(id) {
  console.log("start getting host vans");
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const { data } = await axios(url);
  console.log("end getting host vans");
  return data.vans;
}

async function loginUser(creds) {
  try {
    const { data } = await axios("/api/login", {
      method: "post",
      data: creds,
    });
    return data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}

async function logInWithGoogle() {
  console.log("logInWithGoogle");
  try {
    const userCred = await signInWithPopup(auth, googleAuthProvider);
  } catch (e) {
    throw new Error(`Couldn't log in to Google. Try again later`);
  }
}

function onAuthStateChanged(callback) {
  return onAuthStateChangedFirebase(auth, (user) => {
    console.log("onAuthStateChanged");
    callback(user);
  });
}

async function isLoggedIn() {
  await auth.authStateReady();
  return auth.currentUser !== null;
}

async function logout() {
  await signOut(auth);
}
