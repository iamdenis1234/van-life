import { getDocs, orderBy, query, where } from "firebase/firestore";
import { getUserFavoriteIds, isLoggedIn, vansCollectionRef } from "./api.js";

export { getVansData };

const VANS_PER_PAGE = 6;

async function getVansData(params) {
  if (await isLoggedIn()) {
    return await getVansDataWithFavorite(params);
  }
  return await getVansDataFromDB(params);
}

async function getVansDataWithFavorite(params) {
  const [vansData, favoriteIds] = await Promise.all([
    getVansDataFromDB(params),
    getUserFavoriteIds(),
  ]);
  for (const van of vansData.vans) {
    van.favorite = favoriteIds.includes(van.id);
  }
  return vansData;
}

// Because there's no way to make full-fledged pagination with firestore,
// we're simulating it with getVansByPage()
async function getVansDataFromDB({ types, order, page }) {
  const query = makeQuery({ types, order });
  const querySnapshot = await getDocs(query);
  const vans = querySnapshot.docs.map((van) => van.data());
  const vansByPage = getVansByPage(vans, page);
  return { vans: vansByPage, totalPages: getTotalPages(vans.length) };
}

function makeQuery({ types, order }) {
  let q = query(vansCollectionRef);
  q = getNewQueryWithTypes(q, types);
  q = getNewQueryWithOrder(q, order);
  return q;
}

function getNewQueryWithTypes(previousQuery, types) {
  return types.length
    ? query(previousQuery, where("type", "in", types))
    : previousQuery;
}

function getNewQueryWithOrder(previousQuery, order) {
  const priceOrder = getValidPriceOrder(order);
  return priceOrder === "default"
    ? previousQuery
    : query(previousQuery, orderBy("price", priceOrder));
}

function getValidPriceOrder(order) {
  return order === "lowPriceFirst"
    ? "asc"
    : order === "highPriceFirst"
      ? "desc"
      : "default";
}

function getVansByPage(vans, page) {
  page = getValidPage(page, vans.length);
  const startIndex = (page - 1) * VANS_PER_PAGE;
  const endIndex = startIndex + VANS_PER_PAGE;
  return vans.slice(startIndex, endIndex);
}

function getValidPage(page, vansCount) {
  page = Number.parseInt(page) || 1;
  return isInRange(page, vansCount) ? page : 1;
}

function isInRange(page, vansCount) {
  return page > 0 && page <= getTotalPages(vansCount);
}

function getTotalPages(vansCount) {
  return Math.ceil(vansCount / VANS_PER_PAGE);
}
