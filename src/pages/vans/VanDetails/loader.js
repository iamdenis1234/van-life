import { getVans } from "../../../api.js";

export { loader };

async function loader({ params }) {
  console.log("start VanDetails loader");
  const vans = await getVans(params.id);
  console.log("end VanDetails loader");

  return vans;
}
