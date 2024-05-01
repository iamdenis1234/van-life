import { Close } from "@mui/icons-material";
import { IconButton, Modal, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useColorMode } from "../../../context/ColorModeContext.js";
import { SearchInput } from "./SearchInput.jsx";
import { SearchResult } from "./SearchResult.jsx";
import { useVansSearch } from "./useVansSearch.js";

export { SearchModal };

function SearchModal({ open, onClose }) {
  const { colorMode } = useColorMode();
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
        <SearchInputSection>
          <SearchInput
            isFetching={isFetching}
            value={searchInput}
            onChange={handleChangeInput}
            onClear={handleClearInput}
          />
        </SearchInputSection>
        <SearchResultContainer>
          {status === "success" && (
            <SearchResult
              onClick={onClose}
              result={result}
              search={searchInput}
            />
          )}
        </SearchResultContainer>
        <AlgoliaContainer>
          Search by
          <AlgoliaLink href="https://www.algolia.com" target="_blank">
            <img
              src={
                colorMode === "dark"
                  ? "/assets/images/Algolia-logo-white.svg"
                  : "/assets/images/Algolia-logo-blue.svg"
              }
              alt="algolia logo"
            />
          </AlgoliaLink>
        </AlgoliaContainer>
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
  display: "flex",
  flexDirection: "column",
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
  width: "100%",
  maxWidth: 420,
  marginInline: "auto",
}));

const AlgoliaContainer = styled(Section)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  columnGap: 5,
  fontSize: 14,
  marginTop: "auto",
  paddingTop: theme.spacing(3),
}));

const AlgoliaLink = styled("a")({
  width: 75,
});

const SearchInputSection = styled(Section)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
