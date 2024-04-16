import { Close } from "@mui/icons-material";
import { Divider, IconButton, Modal, styled, Typography } from "@mui/material";
import { useState } from "react";
import { SearchInput } from "./SearchInput.jsx";
import { useVansSearch } from "./useVansSearch.js";
import { VansContent } from "./VansContent.jsx";

export { SearchModal };

function SearchModal({ open, onClose }) {
  console.log("Render SearchModal");
  const [searchInput, setSearchInput] = useState("");
  const { debouncedSearch, status, result } = useVansSearch();

  function handleChangeInput(event) {
    const value = event.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  }

  function handleClearInput() {
    setSearchInput("");
    debouncedSearch("");
  }

  function renderVansSection() {
    if (!searchInput) {
      return null;
    }

    if (status === "success") {
      return (
        <VansContent onClick={onClose} result={result} search={searchInput} />
      );
    }

    if (status === "empty") {
      return <NotFound>No vans found</NotFound>;
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
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
            value={searchInput}
            onChange={handleChangeInput}
            onClear={handleClearInput}
          />
        </Section>
        <Divider />
        <VansSectionContainer>{renderVansSection()}</VansSectionContainer>
      </Container>
    </Modal>
  );
}

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  marginTop: theme.spacing(0.5),
  marginRight: theme.spacing(1),
}));

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingBlock: theme.spacing(2),
}));

const Section = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const VansSectionContainer = styled(Section)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const NotFound = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
