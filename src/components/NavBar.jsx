import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/" >Friendly</Link>
      </div>
      <div className="nav-links">
        <Link to="/homegoods">Homegoods</Link>
        <Link to="/food">Food</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
};

export default NavBar;