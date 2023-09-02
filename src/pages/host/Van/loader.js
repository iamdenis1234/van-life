import { getHostVans } from "../../../api.js";
import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ params }) {
  console.log("start Host Van loader");
  await requireAuth();
  const van = await getHostVans(params.id);
  console.log("end Host Vans loader");

  return van;
}
