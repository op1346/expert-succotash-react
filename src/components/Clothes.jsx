import React, { useState } from "react";
import CompanyInfo from "./CompanyInfo";

function Clothes() {
  const [subCat, setSubCat] = useState("");

  function handleClick(e) {
    if (e.target.value === "all") {
      setSubCat("");
    } else {
      setSubCat(e.target.value);
    }
  }

  return(
    <div className="main-container">
      <h1>Clothes</h1>
      <div className="sub-nav">
        <input onClick={handleClick} className="sub-nav-btn" type="button" value="all"/>
        <input onClick={handleClick} className="sub-nav-btn" type="button" value="women"/>
        <input onClick={handleClick} className="sub-nav-btn" type="button" value="men"/>
        <input onClick={handleClick} className="sub-nav-btn" type="button" value="kids"/>
      </div>
      <hr/>
      <CompanyInfo category="clothing" sub={subCat}/>
    </div>
  )
};

export default Clothes;