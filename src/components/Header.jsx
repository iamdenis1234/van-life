import avatarIconUrl from "/assets/images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
import { defineActiveLinkStyles } from "../utils/defineActiveLinkStyles.js";

export { Header };

function Header() {
  console.log("Render Header");

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
        <Link to="login" className="login-link">
          <img src={avatarIconUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
