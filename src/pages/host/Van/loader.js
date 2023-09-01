import { getHostVans } from "../../../api.js";

export { loader };

async function loader({ params }) {
  console.log("start Host Van loader");
  const van = await getHostVans(params.id);
  console.log("end Host Van loader");

  return van;
}
