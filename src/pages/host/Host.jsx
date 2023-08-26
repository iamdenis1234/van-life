import { NavLink, Outlet } from "react-router-dom";
import { defineActiveLinkStyles } from "../../utils/defineActiveLinkStyles.js";

export { Host };

function Host() {
  console.log("Render Host");

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end style={defineActiveLinkStyles}>
          Dashboard
        </NavLink>

        <NavLink to="income" style={defineActiveLinkStyles}>
          Income
        </NavLink>

        <NavLink to="vans" style={defineActiveLinkStyles}>
          Vans
        </NavLink>

        <NavLink to="reviews" style={defineActiveLinkStyles}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
