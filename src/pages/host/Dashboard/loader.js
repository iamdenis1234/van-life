import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ request }) {
  console.log("start Dashboard loader");
  await requireAuth(request);
  console.log("end Dashboard loader");
  return null;
}
