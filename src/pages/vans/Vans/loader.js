import { defer } from "react-router-dom";
import { getVans } from "../../../api/getVans.js";

export { loader };

function loader({ request }) {
  console.log("start Vans loader");
  console.debug(request);
  const searchParams = new URL(request.url).searchParams;
  const types = searchParams.getAll("type");

  const vansPromise = getVans(types);
  console.log("end Vans loader");
  return defer({ vansPromise });
}
