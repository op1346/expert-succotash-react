import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div className="nav-container">
      <h1 className="nav-logo">Eco Shop</h1>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/food">Food</Link>
        <Link to="/clothes">Clothes</Link>
      </div>
    </div>
  )
};

export default NavBar