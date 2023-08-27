import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export { Vans };

function Vans() {
  console.log("Render Vans");
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filteredVans = getFilteredVans(typeFilter);

  useEffect(() => {
    let ignore = false;

    async function getVans() {
      console.log("loading vans");
      const { data } = await axios("/api/vans");
      if (!ignore) {
        setVans(data.vans);
      } else {
        console.log("ignoring vans");
      }
    }

    getVans();
    return () => {
      ignore = true;
    };
  }, []);

  function getFilteredVans(typeFilter) {
    return typeFilter
      ? vans.filter(
          (van) => typeFilter.toLowerCase() === van.type.toLowerCase(),
        )
      : vans;
  }

  function handleFilterChange(newType) {
    return setSearchParams((sp) => {
      const newParams = new URLSearchParams(sp);
      if (newType) {
        newParams.set("type", newType);
      } else {
        newParams.delete("type");
      }
      console.log(newParams);
      return newParams;
    });
  }

  const vanElements = filteredVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
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
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("simple")}
        >
          simple
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("rugged")}
        >
          rugged
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("luxury")}
        >
          luxury
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange("")}
          >
            clear
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
