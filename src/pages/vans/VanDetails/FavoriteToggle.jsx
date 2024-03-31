import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton, styled, Tooltip } from "@mui/material";
import { useFetcher } from "react-router-dom";

export { FavoriteToggle };

function FavoriteToggle({ van }) {
  const fetcher = useFetcher();
  let favorite = van.favorite;
  // Optimistic UI
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post" action={`/vans/${van.id}`}>
      <Tooltip title={favorite ? "Remove from Favorites" : "Add to Favorites"}>
        <IconButton
          type="submit"
          name="favorite"
          value={(!favorite).toString()}
        >
          {favorite ? <StyledFavorite /> : <FavoriteBorder />}
        </IconButton>
      </Tooltip>
    </fetcher.Form>
  );
}

const StyledFavorite = styled(Favorite)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
