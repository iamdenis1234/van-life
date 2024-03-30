import { defer } from "react-router-dom";
import { getVans } from "../../../api/getVans.js";

export { loader };

function loader() {
  console.log("start Vans loader");
  const vansPromise = getVans();
  console.log("end Vans loader");
  return defer({ vansPromise });
}
