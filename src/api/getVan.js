import { getDocs, query, where } from "firebase/firestore";
import { CustomError } from "../utils/CustomError.js";
import { getUserFavoriteIds, isLoggedIn, vansCollectionRef } from "./api.js";

export { getVan };

async function getVan(id) {
  console.log("start getting van by id");
  if (await isLoggedIn()) {
    const van = await getVanWithFavorite(id);
    console.log("end getting van by id");
    return van;
  }
  console.log("end getting van by id");
  return await getVanFromDB(id);
}

async function getVanWithFavorite(id) {
  const [van, favorite] = await Promise.all([
    getVanFromDB(id),
    isIdInFavorites(id),
  ]);
  van.favorite = favorite;
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
