import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getLimitedVansSearchResult } from "../../../api/getLimitedVansSearchResult.js";
import { useDebounce } from "../../../hooks/useDebounce.js";

export { useVansSearch };

const WAIT_BEFORE_SEARCH_IN_MS = 300;

function useVansSearch() {
  console.log("render useVansSearch");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(setSearch, WAIT_BEFORE_SEARCH_IN_MS);
  const query = useQuery(vansSearchQuery(search));

  function getStatus() {
    if (!query.data) {
      return "idle";
    }

    return "success";
  }

  return { debouncedSearch, status: getStatus(), result: query.data };
}

function vansSearchQuery(search) {
  return {
    queryKey: ["search", search],
    queryFn: async () =>
      search ? await getLimitedVansSearchResult(search) : null,
    placeholderData: keepPreviousData,
  };
}
