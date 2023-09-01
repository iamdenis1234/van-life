import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { defineActiveLinkStyles } from "../../../utils/defineActiveLinkStyles.js";

export { Van };

function Van() {
  console.log("Render HostVan");

  const van = useLoaderData();

  return (
    <section>
      {/*
        "./" means current Route("vans/:id")
        ".." means then go back one url segment(not Route) up relative to current
          Route("vans/:id") which is going to be "vans/"
        Doesn't work with relative="path" prop
      */}
      <Link to="./.." className="back-button">
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
        <Outlet context={{ van }} my_value="test" />
      </div>
    </section>
  );
}
