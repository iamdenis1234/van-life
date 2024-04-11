import { getUserFavoriteVans } from "../../../api/getUserFavoriteVans.js";

export { loader, favoriteVansQuery };

function loader(queryClient) {
  return () => {
    console.log("start Host Vans loader");
    queryClient.ensureQueryData(favoriteVansQuery());
    console.log("end Host Vans loader");
    return null;
  };
}

function favoriteVansQuery() {
  return { queryKey: ["favorites"], queryFn: getUserFavoriteVans };
}
