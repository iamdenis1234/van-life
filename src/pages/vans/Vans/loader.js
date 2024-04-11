import { keepPreviousData } from "@tanstack/react-query";
import { getVansData } from "../../../api/getVansData.js";

export { loader, vansQuery };

function loader(queryClient) {
  return ({ request }) => {
    console.log("start Vans loader");
    const searchParams = new URL(request.url).searchParams;
    queryClient.ensureQueryData(vansQuery(searchParams));
    console.log("end Vans loader");
    return null;
  };
}

function vansQuery(searchParams) {
  const types = searchParams.getAll("type");
  // The same types are the same query, the order doesn't matter
  types.sort();
  const order = searchParams.get("order");
  const page = searchParams.get("page");
  return {
    queryKey: ["vans", { types, order, page }],
    queryFn: () => {
      return getVansData({ types, order, page });
    },
    placeholderData: keepPreviousData,
  };
}
