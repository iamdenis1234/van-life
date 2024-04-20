import { defer } from "react-router-dom";
import { getVan } from "../../../api/getVan.js";

export { loader, vanQuery };

function loader(queryClient) {
  return ({ params }) => {
    const vanPromise = queryClient.ensureQueryData(vanQuery(params.id));
    return defer({ vanPromise });
  };
}

function vanQuery(id) {
  return { queryKey: ["van", { id }], queryFn: () => getVan(id) };
}
