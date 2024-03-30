import { defer } from "react-router-dom";
import { getUserFavoriteVans } from "../../../api/getUserFavoriteVans.js";

export { loader };

async function loader() {
  console.log("start Host Vans loader");
  const vansPromise = getUserFavoriteVans();
  console.log("end Host Vans loader");

  return defer({ vansPromise });
}
