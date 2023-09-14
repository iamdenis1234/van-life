import { defer } from "react-router-dom";
import { getHostVans } from "../../../api.js";
import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ request }) {
  console.log("start Host Vans loader");
  await requireAuth(request);
  const vansPromise = getHostVans();
  console.log("end Host Vans loader");

  return defer({ vansPromise });
}
