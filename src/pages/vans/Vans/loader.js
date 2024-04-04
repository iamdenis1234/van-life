import { defer } from "react-router-dom";
import { getVansData } from "../../../api/getVansData.js";

export { loader };

async function loader({ request }) {
  console.log("start Vans loader");
  const searchParams = new URL(request.url).searchParams;
  const types = searchParams.getAll("type");
  const order = searchParams.get("order");
  const page = searchParams.get("page");
  const vansDataPromise = getVansData({ types, order, page });
  console.log("end Vans loader");
  return defer({ vansDataPromise });
}
