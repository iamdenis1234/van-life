import { initializeApp } from "firebase/app";
import {
  deleteUser as deleteUserFirebase,
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged as onAuthStateChangedFirebase,
  reauthenticateWithPopup,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export {
  getVans,
  getVanById,
  getUserFavoriteVans,
  logInWithEmailAndPassword,
  logInWithGoogle,
  onAuthStateChanged,
  isLoggedIn,
  logout,
  isNewUser,
  createNewUserInDb,
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
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const vansCollectionRef = collection(db, "vans");

async function getUserFavoriteVans() {
  // TODO: sort elements by added time via timestamp
  console.log("start getting favorite vans");
  const userFavoriteIds = await getUserFavoriteIds();
  let favoriteVans = [];
  // TODO: maybe throw when ids is empty as in getVanById and handle it
  //  with errorElement on Await
  if (userFavoriteIds.length) {
    favoriteVans = await getUserFavoriteVansByIds(userFavoriteIds);
  }
  console.log("end getting favorite vans");
  return favoriteVans;
}

async function getUserFavoriteIds() {
  const userRef = doc(db, "users", auth.currentUser.uid);
  const userDocSnapshot = await getDoc(userRef);
  const user = userDocSnapshot.data();
  return user.favorites;
}

async function getUserFavoriteVansByIds(ids) {
  const q = query(vansCollectionRef, where("id", "in", ids));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((van) => van.data());
}

async function getVanById(id) {
  console.log("start getting van by id");
  const q = query(vansCollectionRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    const error = new Error(`Van with id '${id}' not found`);
    console.log(error);
    throw error;
  }
  console.log("end getting van by id");
  return querySnapshot.docs[0].data();
}

async function getVans() {
  console.log("start getting vans");
  const querySnapshot = await getDocs(vansCollectionRef);
  console.log("end getting vans");
  return querySnapshot.docs.map((van) => van.data());
}

async function logInWithEmailAndPassword(email, password) {
  console.log("start login with email and password");
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("end login with email and password");
    return userCred;
  } catch (e) {
    console.log(e);
    throw new Error("No user with those credentials found!");
  }
}

async function logInWithGoogle() {
  console.log("start login with Google");
  try {
    const userCred = await signInWithPopup(auth, googleAuthProvider);
    console.log("end login with Google");
    return userCred;
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
  console.log("start logout");
  await signOut(auth);
  console.log("end logout");
}

// TODO: remove it or implement delete feature
async function deleteCurrentUser() {
  await reauthenticateWithPopup(auth.currentUser, googleAuthProvider);
  await deleteUserFirebase(auth.currentUser);
  console.log("User has been successfully deleted!");
}

function isNewUser(userCred) {
  return getAdditionalUserInfo(userCred).isNewUser;
}

async function createNewUserInDb(user) {
  console.log("start creating new user in firestore");
  const newUserRef = doc(db, "users", user.uid);
  await setDoc(newUserRef, { favorites: [] });
  console.log("end creating new user in firestore");
}
