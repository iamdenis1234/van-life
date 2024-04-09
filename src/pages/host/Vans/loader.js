import { defer } from "react-router-dom";
import { getUserFavoriteVans } from "../../../api/getUserFavoriteVans.js";

export { loader, favoriteVansQuery };

function loader(queryClient) {
  return () => {
    console.log("start Host Vans loader");
    const vansPromise = queryClient.ensureQueryData(favoriteVansQuery());
    console.log("end Host Vans loader");
    return defer({ vansPromise });
  };
}

function favoriteVansQuery() {
  return { queryKey: ["favorites"], queryFn: getUserFavoriteVans };
}
