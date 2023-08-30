import { getVans } from "../../../api.js";

export { loader };

async function loader() {
  console.log("start Vans loader");
  const vans = await getVans();
  console.log("end Vans loader");

  return vans;
}
