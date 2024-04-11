import {
  algoliaDefault,
  algoliaPriceAsc,
  algoliaPriceDesc,
  getUserFavoriteIds,
  isLoggedIn,
} from "./api.js";

export { getVansData };

const VANS_PER_PAGE = 6;
const ALGOLIA_FIRST_PAGE = 0;
const USER_FIRST_PAGE = 1;
const ALGOLIA_PAGE_OFFSET = -1;

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

async function getVansDataFromDB({ types, order, page }) {
  const algoliaIndex = getAlgoliaIndex(order);
  const searchOptions = getSearchOptions({ types, page });
  const searchResponse = await algoliaIndex.search("", searchOptions);
  console.log(searchResponse);
  return {
    vans: searchResponse.hits,
    totalPages: getTotalPages(searchResponse),
  };
}

function getAlgoliaIndex(order) {
  return order === "lowPriceFirst"
    ? algoliaPriceAsc
    : order === "highPriceFirst"
      ? algoliaPriceDesc
      : algoliaDefault;
}

function getSearchOptions({ types, page }) {
  const validPage = getValidPage(page);
  const filters = getFilters(types);
  return { page: validPage, hitsPerPage: VANS_PER_PAGE, filters };
}

function getValidPage(page) {
  const userPage = Number.parseInt(page) || USER_FIRST_PAGE;
  const algoliaPage = userPage + ALGOLIA_PAGE_OFFSET;
  return isInRange(algoliaPage) ? algoliaPage : ALGOLIA_FIRST_PAGE;
}

function isInRange(page) {
  return page >= ALGOLIA_FIRST_PAGE;
}

function getFilters(types) {
  if (types.length === 0) {
    return "";
  }
  const typeFilters = types.map((type) => `type:${type}`);
  return typeFilters.join(" OR ");
}

function getTotalPages(searchResponse) {
  return searchResponse.hits.length ? searchResponse.nbPages : 0;
}
