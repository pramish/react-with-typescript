import { NavLink } from "react-router-dom";

import "./Navbar.css";

export const NavBar = () => {
  return (
    <div className="navBarContainer">
      <NavLink className="titleButton" to="/">
        <p>React with TypeScript boilerplate</p>
      </NavLink>
    </div>
  );
};
