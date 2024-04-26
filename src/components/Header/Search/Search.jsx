import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { SearchModal } from "./SearchModal.jsx";

export { Search };

function Search() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Tooltip title="Search vans">
        <IconButton onClick={() => setModalOpen(true)}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <SearchModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
