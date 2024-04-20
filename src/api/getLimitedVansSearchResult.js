import { algoliaDefault } from "./api.js";
import { getParsedVan } from "./utils.js";

export { getLimitedVansSearchResult };

const MAX_VANS_IN_SEARCH = 4;

async function getLimitedVansSearchResult(search) {
  let searchResponse = await algoliaDefault.search(search, {
    attributesToHighlight: ["name", "price"],
    hitsPerPage: MAX_VANS_IN_SEARCH,
  });

  return { vans: getVans(searchResponse), totalHits: searchResponse.nbHits };
}

function getVans(searchResponse) {
  return searchResponse.hits.map((vanHit) => getParsedVan(vanHit));
}
