import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ request }) {
  console.log("start Reviews loader");
  await requireAuth(request);
  console.log("end Reviews loader");

  return null;
}
