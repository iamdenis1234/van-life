import { getHostVans } from "../../../api.js";

export { loader };

async function loader() {
  console.log("start Host Vans loader");
  const vans = await getHostVans();
  console.log("end Host Vans loader");

  return vans;
}
