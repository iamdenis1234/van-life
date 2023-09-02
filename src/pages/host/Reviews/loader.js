import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader() {
  console.log("start Reviews loader");
  await requireAuth();
  console.log("end Reviews loader");

  return null;
}
