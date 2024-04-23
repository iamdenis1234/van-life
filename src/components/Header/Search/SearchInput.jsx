import { Search as SearchIcon } from "@mui/icons-material";
import { CircularProgress, InputBase, styled } from "@mui/material";
import { useEffect, useRef } from "react";
import { CustomButton } from "../../CustomButton.jsx";

export { SearchInput };

function SearchInput({ value, isFetching, onChange, onClear }) {
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
        inputProps={{ "aria-label": "search" }}
        value={value}
        inputRef={ref}
      />
      <ProgressContainer>
        {isFetching && <CircularProgress size="inherit" color="inherit" />}
      </ProgressContainer>
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

const ProgressContainer = styled("div")({
  width: 20,
  minWidth: 20,
  height: 20,
  display: "flex",
  marginInline: 16,
});
