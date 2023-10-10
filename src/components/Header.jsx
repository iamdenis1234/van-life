import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { onAuthStateChanged } from "../api.js";
import { defineActiveLinkStyles } from "../utils/defineActiveLinkStyles.js";

export { Header };

function Header() {
  console.log("Render Header");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    return onAuthStateChanged((user) => {
      setIsLoggedIn(user !== null);
    });
  }, []);

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/host" style={defineActiveLinkStyles}>
          Host
        </NavLink>
        <NavLink to="/about" style={defineActiveLinkStyles}>
          About
        </NavLink>
        <NavLink to="/vans" style={defineActiveLinkStyles}>
          Vans
        </NavLink>
        <Link to={isLoggedIn ? "/host" : "login"} className="login-link">
          <img src={"/assets/images/avatar-icon.png"} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
