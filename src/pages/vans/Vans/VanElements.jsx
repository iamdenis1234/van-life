import { styled } from "@mui/material";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";
import { VanCard } from "./VanCard.jsx";

export { VanElements };

function VanElements(vans) {
  console.log("render VanElements");
  const [currentTypeFilter] = useCurrentTypeFilter();

  const filteredVans = currentTypeFilter
    ? vans.filter(
        (van) => currentTypeFilter.toLowerCase() === van.type.toLowerCase(),
      )
    : vans;

  const vanElements = filteredVans.map((van) => (
    <VanCard key={van.id} van={van} />
  ));

  return <VansContainer>{vanElements}</VansContainer>;
}

const VansContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  // to make the last card's shadow visible
  marginBottom: theme.spacing(1),
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, min(300px, 100%))",
  justifyContent: "center",
  gap: theme.spacing(3),
}));
