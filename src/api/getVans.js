import { getDocs, orderBy, query, where } from "firebase/firestore";
import { getUserFavoriteIds, isLoggedIn, vansCollectionRef } from "./api.js";

export { getVans };

async function getVans(params) {
  if (await isLoggedIn()) {
    return await getVansWithFavorite(params);
  }
  return await getVansFromDB(params);
}

async function getVansWithFavorite(params) {
  const [vans, favoriteIds] = await Promise.all([
    getVansFromDB(params),
    getUserFavoriteIds(),
  ]);
  for (const van of vans) {
    van.favorite = favoriteIds.includes(van.id);
  }
  return vans;
}

async function getVansFromDB({ types, order }) {
  let q = query(vansCollectionRef);
  q = getNewQueryWithTypes(q, types);
  q = getNewQueryWithOrder(q, order);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((van) => van.data());
}

function getNewQueryWithTypes(previousQuery, types) {
  return types.length
    ? query(previousQuery, where("type", "in", types))
    : previousQuery;
}

function getNewQueryWithOrder(previousQuery, order) {
  const priceOrder = getPriceOrder(order);
  return priceOrder === "default"
    ? previousQuery
    : query(previousQuery, orderBy("price", priceOrder));
}

function getPriceOrder(order) {
  return order === "lowPriceFirst"
    ? "asc"
    : order === "highPriceFirst"
      ? "desc"
      : "default";
}
