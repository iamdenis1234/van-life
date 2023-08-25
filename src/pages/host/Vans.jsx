import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export { Vans };

function Vans() {
  console.log("Render HostVans");

  const [vans, setVans] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function getVans() {
      console.log("loading host vans");
      const { data } = await axios("/api/host/vans");
      if (!ignore) {
        setVans(data.vans);
      } else {
        console.log("ignoring host vans");
      }
    }

    getVans();
    return () => {
      ignore = true;
    };
  }, []);

  const vansElements = vans?.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans ? <section>{vansElements}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
}
