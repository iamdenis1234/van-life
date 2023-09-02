import { requireAuth } from "../../../utils/requireAuth.js";

export { loader };

async function loader() {
  console.log("start Dashboard loader");
  await requireAuth();
  console.log("end Dashboard loader");

  return null;
}
