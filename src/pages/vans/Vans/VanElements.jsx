import { styled } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useCurrentTypeFilter } from "./useCurrentTypeFilter.js";
import { VanCard } from "./VanCard.jsx";

export { VanElements };

function VanElements(vans) {
  console.log("render VanElements");
  const [searchParams] = useSearchParams();
  const [currentTypeFilter] = useCurrentTypeFilter();

  const filteredVans = currentTypeFilter
    ? vans.filter(
        (van) => currentTypeFilter.toLowerCase() === van.type.toLowerCase(),
      )
    : vans;

  const vanElements = filteredVans.map((van) => (
    <VanCard
      key={van.id}
      van={van}
      LinkProps={{
        to: van.id,
        state: { search: searchParams.toString(), type: currentTypeFilter },
      }}
    />
  ));

  return <VansContainer>{vanElements}</VansContainer>;
}

const VansContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  // to make the last card's shadow visible
  marginBottom: theme.spacing(1),
  display: "grid",
  gridTemplateColumns: 300,
  justifyContent: "center",
  gap: theme.spacing(3),
}));
