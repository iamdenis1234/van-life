import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { defineActiveLinkStyles } from "../../utils/defineActiveLinkStyles.js";

export { Van };

function Van() {
  console.log("Render HostVan");

  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let ignore = false;

    async function getVan() {
      console.log(`loading host van by id: ${id}`);
      const { data } = await axios(`/api/host/vans/${id}`);
      if (!ignore) {
        setVan(data.vans);
      } else {
        console.log(`ignoring host van ${id}`);
      }
    }

    getVan();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (!van) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink to="." end style={defineActiveLinkStyles}>
            Details
          </NavLink>
          <NavLink to="pricing" style={defineActiveLinkStyles}>
            Pricing
          </NavLink>
          <NavLink to="photos" style={defineActiveLinkStyles}>
            Photos
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
}
