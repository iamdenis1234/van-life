import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader({ request }) {
  console.log("start Income loader");
  await requireAuth(request);
  console.log("end Income loader");

  return null;
}
