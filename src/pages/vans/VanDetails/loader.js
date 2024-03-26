import { defer } from "react-router-dom";
import { getVanById } from "../../../api.js";

export { loader };

function loader({ params }) {
  console.log("start VanDetails loader");
  const vanPromise = getVanById(params.id);
  console.log("end VanDetails loader");
  return defer({ vanPromise });
}
