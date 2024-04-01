import { getDocs, query, where } from "firebase/firestore";
import { getUserFavoriteIds, isLoggedIn, vansCollectionRef } from "./api.js";

export { getVans };

async function getVans(types) {
  console.log("start getting vans");
  if (await isLoggedIn()) {
    return await getVansWithFavorite(types);
  }
  console.log("end getting vans");
  return await getVansFromDB(types);
}

async function getVansWithFavorite(types) {
  const [vans, favoriteIds] = await Promise.all([
    getVansFromDB(types),
    getUserFavoriteIds(),
  ]);
  for (const van of vans) {
    van.favorite = favoriteIds.includes(van.id);
  }
  return vans;
}

async function getVansFromDB(types) {
  const q =
    types.length !== 0
      ? query(vansCollectionRef, where("type", "in", types))
      : query(vansCollectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((van) => van.data());
}
