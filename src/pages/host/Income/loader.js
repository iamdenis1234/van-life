import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader() {
  console.log("start Income loader");
  await requireAuth();
  console.log("end Income loader");

  return null;
}
