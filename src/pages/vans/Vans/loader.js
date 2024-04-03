import { defer } from "react-router-dom";
import { getVans } from "../../../api/getVans.js";

export { loader };

async function loader({ request }) {
  console.log("start Vans loader");
  const searchParams = new URL(request.url).searchParams;
  const types = searchParams.getAll("type");
  const order = searchParams.get("order");
  const vansPromise = getVans({ types, order });
  console.log("end Vans loader");
  return defer({ vansPromise });
}
