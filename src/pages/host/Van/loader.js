import { getHostVans } from "../../../api.js";
import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ params, request }) {
  console.log("start Host Van loader");
  await requireAuth(request);
  const van = await getHostVans(params.id);
  console.log("end Host Vans loader");

  return van;
}
