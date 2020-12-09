import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/" className="nav-logo">Eco Shop</Link>
      </div>
      <div className="nav-links">
        <Link to="/homegoods">Homegoods</Link>
        <Link to="/food">Food</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/beauty">Beauty</Link>
      </div>
    </div>
  )
};

export default NavBar