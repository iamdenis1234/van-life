import { NavLink, Outlet } from "react-router-dom";

export { Host };

function Host() {
  console.log("Render Host");

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function defineActiveLink({ isActive }) {
    return isActive ? activeStyles : null;
  }

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end style={defineActiveLink}>
          Dashboard
        </NavLink>

        <NavLink to="income" style={defineActiveLink}>
          Income
        </NavLink>

        <NavLink to="vans" style={defineActiveLink}>
          Vans
        </NavLink>

        <NavLink to="reviews" style={defineActiveLink}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
