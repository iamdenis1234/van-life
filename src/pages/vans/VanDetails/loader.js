import { defer } from "react-router-dom";
import { getVans } from "../../../api.js";

export { loader };

function loader({ params }) {
  console.log("start VanDetails loader");
  const vanPromise = getVans(params.id);
  console.log("end VanDetails loader");
  return defer({ vanPromise });
}
