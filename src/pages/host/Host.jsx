import { Form, NavLink, Outlet } from "react-router-dom";
import { defineActiveLinkStyles } from "../../utils/defineActiveLinkStyles.js";

export { Host };

function Host() {
  console.log("Render Host");

  return (
    <>
      <nav className="host-nav">
        <div className="host-nav-menu">
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
        </div>

        <Form method="post" action="logout" replace>
          <button className="host-nav-logout-btn">Logout</button>
        </Form>
      </nav>
      <Outlet />
    </>
  );
}
