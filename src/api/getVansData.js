import { algoliaClient, getUserFavoriteIds, isLoggedIn } from "./api.js";
import { getParsedVan } from "./utils.js";

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

async function getVansDataFromDB(params) {
  const vansQuery = getVansQuery(params);
  const facetsQuery = getFacetsQuery(params.search);
  const {
    results: [vansResponse, facetsResponse],
  } = await algoliaClient.multipleQueries([vansQuery, facetsQuery]);
  console.log(vansResponse);
  console.log(facetsResponse);
  return {
    vans: getVans(vansResponse),
    types: getTypes(facetsResponse),
    totalPages: getTotalPages(vansResponse),
  };
}

function getVansQuery({ search, types, order, page }) {
  const indexName = getIndexName(order);
  const validSearch = getValidSearch(search);
  const filters = getFilters(types);
  const validPage = getValidPage(page);
  return {
    indexName,
    query: validSearch,
    filters,
    page: validPage,
    hitsPerPage: VANS_PER_PAGE,
    attributesToHighlight: ["name", "price"],
  };
}

function getFacetsQuery(search) {
  const validSearch = getValidSearch(search);
  return {
    indexName: "vans",
    query: validSearch,
    facets: ["type"],
    hitsPerPage: 0,
  };
}

function getVans(searchResponse) {
  return searchResponse.hits.map((vanHit) => getParsedVan(vanHit));
}

function getIndexName(order) {
  return order === "lowPriceFirst"
    ? "vans_price_asc"
    : order === "highPriceFirst"
      ? "vans_price_desc"
      : "vans";
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

function getValidSearch(search) {
  return search ?? "";
}

function getTotalPages(searchResponse) {
  return searchResponse.hits.length ? searchResponse.nbPages : 0;
}

function getTypes(searchResponse) {
  const typeFacets = searchResponse.facets.type ?? [];
  return Object.entries(typeFacets).map(([name, count]) => ({
    name,
    count,
  }));
}
