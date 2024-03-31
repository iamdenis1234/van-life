import { getDocs } from "firebase/firestore";
import { getUserFavoriteIds, isLoggedIn, vansCollectionRef } from "./api.js";

export { getVans };

async function getVans() {
  console.log("start getting vans");
  if (await isLoggedIn()) {
    return await getVansWithFavorite();
  }
  console.log("end getting vans");
  return await getVansFromDB();
}

async function getVansWithFavorite() {
  const [vans, favoriteIds] = await Promise.all([
    getVansFromDB(),
    getUserFavoriteIds(),
  ]);
  for (const van of vans) {
    van.favorite = favoriteIds.includes(van.id);
  }
  return vans;
}

async function getVansFromDB() {
  const querySnapshot = await getDocs(vansCollectionRef);
  return querySnapshot.docs.map((van) => van.data());
}
