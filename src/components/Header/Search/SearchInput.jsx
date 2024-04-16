import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase, styled } from "@mui/material";
import { useEffect, useRef } from "react";
import { CustomButton } from "../../CustomButton.jsx";

export { SearchInput };

function SearchInput({ value, onChange, onClear }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Container>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <StyledInputBase
        onChange={onChange}
        placeholder="Search..."
        value={value}
        inputRef={ref}
      />
      <CustomButton
        color="inherit"
        size="small"
        variant="text"
        onClick={() => {
          onClear();
          ref.current.focus();
        }}
      >
        clear
      </CustomButton>
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledInputBase = styled(InputBase)({
  width: "100%",
});

const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  paddingRight: theme.spacing(1),
}));
