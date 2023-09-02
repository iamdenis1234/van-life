import { getHostVans } from "../../../api.js";
import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader() {
  console.log("start Host Vans loader");
  await requireAuth();
  const vans = await getHostVans();
  console.log("end Host Vans loader");

  return vans;
}
