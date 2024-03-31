import { Clear } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";
import { useFetcher } from "react-router-dom";

export { RemoveFromFavorites };

function RemoveFromFavorites({ id }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post">
      <StyledIconButton type="submit">
        <StyledClear />
      </StyledIconButton>
      <input type="text" name="id" value={id} hidden readOnly />
    </fetcher.Form>
  );
}

const StyledIconButton = styled(IconButton)({
  position: "absolute",
  right: 0,
});

const StyledClear = styled(Clear)({
  fontSize: 22,
});
