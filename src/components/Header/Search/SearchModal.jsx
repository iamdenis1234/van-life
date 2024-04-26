import { Close } from "@mui/icons-material";
import { Divider, IconButton, Modal, styled, Typography } from "@mui/material";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getLimitedVansSearchResult } from "../../../api/getLimitedVansSearchResult.js";
import { useDebounce } from "../../../hooks/useDebounce.js";
import { SearchInput } from "./SearchInput.jsx";
import { SearchResult } from "./SearchResult.jsx";

export { SearchModal };

function SearchModal({ open, onClose }) {
  const [searchInput, setSearchInput] = useState("");
  const { search, debouncedSearch, isFetching, status, result } =
    useVansSearch();

  function handleChangeInput(event) {
    const value = event.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  }

  function handleClearInput() {
    setSearchInput("");
    search("");
  }

  return (
    <StyledModal open={open} onClose={onClose}>
      <Container>
        <CloseButton onClick={onClose} color="inherit">
          <Close />
        </CloseButton>
        <Section>
          <Description>Search by name, type, price or description</Description>
        </Section>
        <Divider />
        <Section>
          <SearchInput
            isFetching={isFetching}
            value={searchInput}
            onChange={handleChangeInput}
            onClear={handleClearInput}
          />
        </Section>
        <Divider />
        <SearchResultContainer>
          {status === "success" && (
            <SearchResult
              onClick={onClose}
              result={result}
              search={searchInput}
            />
          )}
        </SearchResultContainer>
      </Container>
    </StyledModal>
  );
}

const StyledModal = styled(Modal)({
  overflow: "auto",
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  marginTop: theme.spacing(0.5),
  marginRight: theme.spacing(1),
}));

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  height: "100%",
  overflow: "auto",
  [theme.breakpoints.up("md")]: {
    height: "auto",
    width: 600,
    marginTop: 70,
    marginInline: "auto",
    border:
      theme.palette.mode === "dark" &&
      `1px solid ${theme.palette.text.primary}`,
    borderRadius: theme.shape.borderRadius,
  },
  paddingBlock: theme.spacing(2),
}));

const Section = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const SearchResultContainer = styled(Section)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
  marginTop: theme.spacing(4),
  maxWidth: 450,
  marginInline: "auto",
}));

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
