import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { SearchModal } from "./SearchModal.jsx";

export { Search };

function Search() {
  console.log("Render Search");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setModalOpen(true)} color="inherit">
        <SearchIcon />
      </IconButton>
      <SearchModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
