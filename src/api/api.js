import algoliasearch from "algoliasearch/lite";
import { initializeApp } from "firebase/app";
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
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
  isLoggedIn,
  logout,
  isNewUser,
  createNewUserInDb,
  getUserFavoriteIds,
  addToFavorites,
  removeFromFavorites,
  db,
  auth,
  vansCollectionRef,
  algoliaDefault,
  algoliaClient,
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

const algoliaClient = algoliasearch(
  env.VITE_ALGOLIA_APP_ID,
  env.VITE_ALGOLIA_API_KEY,
);

const algoliaDefault = algoliaClient.initIndex("vans");

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
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e);
    throw new CustomError("No user with those credentials found!");
  }
}

async function logInWithGoogle() {
  try {
    return await signInWithPopup(auth, googleAuthProvider);
  } catch (e) {
    throw new CustomError(`Couldn't log in to Google. Try again later`);
  }
}

async function isLoggedIn() {
  await auth.authStateReady();
  return auth.currentUser !== null;
}

async function logout() {
  await signOut(auth);
}

function isNewUser(userCred) {
  return getAdditionalUserInfo(userCred).isNewUser;
}

async function createNewUserInDb(id) {
  const newUserRef = doc(db, "users", id);
  await setDoc(newUserRef, { favorites: [] });
}
