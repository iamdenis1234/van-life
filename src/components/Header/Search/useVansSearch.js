import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getLimitedVansSearchResult } from "../../../api/getLimitedVansSearchResult.js";
import { useDebounce } from "../../../hooks/useDebounce.js";

export { useVansSearch };

const WAIT_BEFORE_SEARCH_IN_MS = 300;

function useVansSearch() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(setSearch, WAIT_BEFORE_SEARCH_IN_MS);
  const query = useQuery({
    queryKey: ["search", search],
    queryFn: async () =>
      search ? await getLimitedVansSearchResult(search) : null,
    placeholderData: keepPreviousData,
  });

  return {
    search: setSearch,
    debouncedSearch,
    isFetching: query.isFetching,
    status: query.data ? "success" : "idle",
    result: query.data,
  };
}
