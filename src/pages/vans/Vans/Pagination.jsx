import { Pagination as PaginationMui, styled } from "@mui/material";
import { useSearchParams, useSubmit } from "react-router-dom";
import { useColorMode } from "../../../context/ColorModeContext.js";

export { Pagination };

function Pagination({ totalPages }) {
  const submit = useSubmit();
  const [searchParams] = useSearchParams();
  const { colorMode } = useColorMode();
  const page = usePage(totalPages);

  function handlePageChange(event, value) {
    const page = value;
    if (isSamePage(page)) {
      return;
    }
    const newSearchParams = new URLSearchParams(searchParams);
    page === 1
      ? newSearchParams.delete("page")
      : newSearchParams.set("page", page);
    newSearchParams.sort();
    submit(newSearchParams);
  }

  function isSamePage(newPage) {
    return newPage === page;
  }

  return (
    <StyledPagination
      count={totalPages}
      color={colorMode === "dark" ? "primary" : "primaryDark"}
      variant="outlined"
      shape="rounded"
      size="large"
      page={page}
      onChange={handlePageChange}
    />
  );
}

const StyledPagination = styled(PaginationMui)({
  display: "flex",
  justifyContent: "center",
});

function usePage(totalPages) {
  const [searchParams] = useSearchParams();

  function getValidPage(page) {
    page = Number.parseInt(page) || 1;
    return isInRange(page) ? page : 1;
  }

  function isInRange(page) {
    return page > 0 && page <= totalPages;
  }

  return getValidPage(searchParams.get("page"));
}
