import { getDocs, query, where } from "firebase/firestore";
import { getUserFavoriteIds, vansCollectionRef } from "./api.js";

export { getUserFavoriteVans };

async function getUserFavoriteVans() {
  console.log("start getting favorite vans");
  const userFavoriteIds = await getUserFavoriteIds();
  let favoriteVans = [];
  if (userFavoriteIds.length) {
    favoriteVans = await getUserFavoriteVansByIds(userFavoriteIds);
  }
  console.log("end getting favorite vans");
  return favoriteVans;
}

async function getUserFavoriteVansByIds(ids) {
  const q = query(vansCollectionRef, where("id", "in", ids));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((van) => van.data());
}
