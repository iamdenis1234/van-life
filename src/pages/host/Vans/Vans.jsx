import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { favoriteVansQuery } from "./loader.js";
import { VanElements } from "./VanElements.jsx";

export { Vans };

function Vans() {
  console.log("Render host Vans");

  const { data: vans, isPending } = useQuery(favoriteVansQuery());

  return (
    <section>
      <Title variant="h3" component="h1">
        Your favorite vans
      </Title>
      {isPending ? <p>Loading...</p> : <VanElements vans={vans} />}
    </section>
  );
}

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
