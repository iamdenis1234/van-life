import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";
import { FilterButton } from "./FilterButton.jsx";

export { Vans };

// TODO: fix the delay for changing the selected button filter, so that it
//  doesn't depend on the time the filter is applied

function Vans() {
  console.log("Render Vans");
  const [searchParams, setSearchParams] = useSearchParams();
  const { vansPromise } = useLoaderData();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(newType) {
    return setSearchParams((sp) => {
      const newParams = new URLSearchParams(sp);
      if (newType) {
        newParams.set("type", newType);
      } else {
        newParams.delete("type");
      }
      return newParams;
    });
  }

  // TODO: move the function outside Vans, so there are no two return statements
  //  inside Vans
  function renderVanElements(vans) {
    console.log("renderVans function");

    const filteredVans = getFilteredVans(typeFilter);

    function getFilteredVans(typeFilter) {
      return typeFilter
        ? vans.filter(
            (van) => typeFilter.toLowerCase() === van.type.toLowerCase(),
          )
        : vans;
    }

    const vanElements = filteredVans.map((van) => (
      <div key={van.id}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: typeFilter }}
        >
          <img src={van.imageUrl} />
          <div>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    ));

    return (
      <>
        <FiltersContainer>
          <FilterButton
            isActive={typeFilter === "simple"}
            onClick={() => handleFilterChange("simple")}
          >
            simple
          </FilterButton>
          <FilterButton
            isActive={typeFilter === "rugged"}
            onClick={() => handleFilterChange("rugged")}
          >
            rugged
          </FilterButton>
          <FilterButton
            isActive={typeFilter === "luxury"}
            onClick={() => handleFilterChange("luxury")}
          >
            luxury
          </FilterButton>
          {typeFilter ? (
            <FilterButton
              color="inherit"
              variant="text"
              onClick={() => handleFilterChange("")}
            >
              clear
            </FilterButton>
          ) : null}
        </FiltersContainer>
        <VansContainer>{vanElements}</VansContainer>
      </>
    );
  }

  // TODO: maybe use MUI Skeleton component as a Suspense fallback
  return (
    <Container>
      <Typography variant="h1">Explore our van options</Typography>
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={vansPromise}>{renderVanElements}</Await>
      </Suspense>
    </Container>
  );
}

const Container = styled(CustomContainer)(section, {});

const FiltersContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  columnGap: theme.spacing(3),
}));

const VansContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
