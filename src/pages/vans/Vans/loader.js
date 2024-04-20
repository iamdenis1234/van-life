import { keepPreviousData } from "@tanstack/react-query";
import { getVansData } from "../../../api/getVansData.js";

export { loader, vansQuery };

function loader(queryClient) {
  return ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    queryClient.ensureQueryData(vansQuery(searchParams));
    return null;
  };
}

function vansQuery(searchParams) {
  const types = searchParams.getAll("type");
  // The same types are the same query, the order doesn't matter
  types.sort();
  const order = searchParams.get("order");
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const params = { types, order, page, search };
  return {
    queryKey: ["vans", params],
    queryFn: () => {
      return getVansData(params);
    },
    placeholderData: keepPreviousData,
  };
}
