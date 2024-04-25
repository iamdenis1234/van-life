import { algoliaDefault, getUserFavoriteIds } from "./api.js";

export { getUserFavoriteVans };

async function getUserFavoriteVans() {
  const userFavoriteIds = await getUserFavoriteIds();
  let favoriteVans = [];
  if (userFavoriteIds.length) {
    favoriteVans = await getUserFavoriteVansByIds(userFavoriteIds);
  }
  return favoriteVans;
}

async function getUserFavoriteVansByIds(ids) {
  const filters = getIdsFilters(ids);
  const result = await algoliaDefault.search("", {
    filters,
    attributesToHighlight: [],
  });
  return result.hits;
}

function getIdsFilters(ids) {
  const filters = ids.map((id) => `id:${id}`);
  return filters.join(" OR ");
}
