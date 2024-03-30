import { defer } from "react-router-dom";
import { getVan } from "../../../api/getVan.js";

export { loader };

function loader({ params }) {
  console.log("start VanDetails loader");
  const vanPromise = getVan(params.id);
  console.log("end VanDetails loader");
  return defer({ vanPromise });
}
