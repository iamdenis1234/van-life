import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { EmptyFavorites } from "./EmptyFavorites.jsx";
import { favoriteVansQuery } from "./loader.js";
import { VanElements } from "./VanElements.jsx";

export { Vans };

function Vans() {
  console.log("Render host Vans");

  const { data: vans, isPending } = useQuery(favoriteVansQuery());

  function renderContent() {
    if (isPending) {
      return <Typography>Loading...</Typography>;
    }

    if (vans.length) {
      return <VanElements vans={vans} />;
    }

    return <EmptyFavorites />;
  }

  return (
    <section>
      <Title variant="h3" component="h1">
        Your favorite vans
      </Title>
      {renderContent()}
    </section>
  );
}

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
