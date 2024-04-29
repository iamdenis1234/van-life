import { CustomError } from "../utils/CustomError.js";
import { algoliaDefault, getUserFavoriteIds, isLoggedIn } from "./api.js";

export { getVan };

async function getVan(id) {
  if (await isLoggedIn()) {
    return await getVanWithFavorite(id);
  }
  return await getVanFromAlgolia(id);
}

async function getVanWithFavorite(id) {
  const [van, favorite] = await Promise.all([
    getVanFromAlgolia(id),
    isIdInFavorites(id),
  ]);
  van.favorite = favorite;
  return van;
}

async function getVanFromAlgolia(id) {
  const { hits } = await algoliaDefault.search("", {
    filters: `id:${id}`,
    attributesToHighlight: [],
  });

  if (!hits.length) {
    throw new CustomError(`Van not found`, {
      detailMessage: `Van with id "${id}" not found`,
    });
  }

  return hits[0];
}

async function isIdInFavorites(id) {
  const favoriteIds = await getUserFavoriteIds();
  return favoriteIds.includes(id);
}
