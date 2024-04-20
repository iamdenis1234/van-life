import { getUserFavoriteVans } from "../../../api/getUserFavoriteVans.js";

export { loader, favoriteVansQuery };

function loader(queryClient) {
  return () => {
    queryClient.ensureQueryData(favoriteVansQuery());
    return null;
  };
}

function favoriteVansQuery() {
  return { queryKey: ["favorites"], queryFn: getUserFavoriteVans };
}
