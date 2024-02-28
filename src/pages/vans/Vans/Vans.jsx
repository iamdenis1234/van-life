import { styled, Typography } from "@mui/material";
import { Suspense } from "react";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { CustomButton } from "../../../components/CustomButton.jsx";
import { CustomContainer } from "../../../components/CustomContainer.jsx";
import { section } from "../../../mixins.js";

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
          <CustomButton
            size="small"
            variant={typeFilter === "simple" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("simple")}
          >
            simple
          </CustomButton>
          <CustomButton
            size="small"
            variant={typeFilter === "rugged" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("rugged")}
          >
            rugged
          </CustomButton>
          <CustomButton
            size="small"
            variant={typeFilter === "luxury" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("luxury")}
          >
            luxury
          </CustomButton>
          {typeFilter ? (
            <CustomButton
              color="inherit"
              variant="text"
              onClick={() => handleFilterChange("")}
              sx={{}}
            >
              clear
            </CustomButton>
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
