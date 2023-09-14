import { defer } from "react-router-dom";
import { getHostVans } from "../../../api.js";
import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ params, request }) {
  console.log("start Host Van loader");
  await requireAuth(request);
  const vanPromise = getHostVans(params.id);
  console.log("end Host Vans loader");

  return defer({ vanPromise });
}
