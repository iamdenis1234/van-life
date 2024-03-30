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
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { CustomError } from "../utils/CustomError.js";

export {
  logInWithEmailAndPassword,
  logInWithGoogle,
  onAuthStateChanged,
  isLoggedIn,
  logout,
  isNewUser,
  createNewUserInDb,
  getUserFavoriteIds,
  db,
  auth,
  vansCollectionRef,
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

async function getUserFavoriteIds() {
  const userRef = doc(db, "users", auth.currentUser.uid);
  const userDocSnapshot = await getDoc(userRef);
  const user = userDocSnapshot.data();
  return user.favorites;
}

async function addToFavorites(id) {
  const userRef = doc(db, "users", auth.currentUser.uid);
  await updateDoc(userRef, { favorites: arrayUnion(id) });
}

async function removeFromFavorites(id) {
  const userRef = doc(db, "users", auth.currentUser.uid);
  await updateDoc(userRef, { favorites: arrayRemove(id) });
}

async function logInWithEmailAndPassword(email, password) {
  console.log("start login with email and password");
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("end login with email and password");
    return userCred;
  } catch (e) {
    console.log(e);
    throw new CustomError("No user with those credentials found!");
  }
}

async function logInWithGoogle() {
  console.log("start login with Google");
  try {
    const userCred = await signInWithPopup(auth, googleAuthProvider);
    console.log("end login with Google");
    return userCred;
  } catch (e) {
    throw new CustomError(`Couldn't log in to Google. Try again later`);
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

async function createNewUserInDb(id) {
  console.log("start creating new user in firestore");
  const newUserRef = doc(db, "users", id);
  await setDoc(newUserRef, { favorites: [] });
  console.log("end creating new user in firestore");
}
