import { getDocs, query, where } from "firebase/firestore";
import { CustomError } from "../utils/CustomError.js";
import { getUserFavoriteIds, isLoggedIn, vansCollectionRef } from "./api.js";

export { getVan };

async function getVan(id) {
  console.log("start getting van by id");
  const van = await getVanFromDB(id);
  if (await isLoggedIn()) {
    van.favorite = await isIdInFavorites(van.id);
  }
  console.log("end getting van by id");
  return van;
}

async function getVanFromDB(id) {
  const q = query(vansCollectionRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    throw new CustomError(`Van not found`, {
      detailMessage: `Van with id "${id}" not found`,
    });
  }
  return querySnapshot.docs[0].data();
}

async function isIdInFavorites(id) {
  const favoriteIds = await getUserFavoriteIds();
  return favoriteIds.includes(id);
}
