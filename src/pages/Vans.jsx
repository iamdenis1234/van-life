import axios from "axios";
import { useEffect, useState } from "react";

export { Vans };

function Vans() {
  console.log("Render Vans");
  const [vans, setVans] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function getVans() {
      console.log("loading vans");
      const data = await axios("/api/vans");
      if (!ignore) {
        setVans(data.data.vans);
      } else {
        console.log("ignoring vans");
      }
    }

    getVans();
    return () => {
      ignore = true;
    };
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
