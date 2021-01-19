import React from "react";
import CompanyInfo from "./CompanyInfo";



function Food() {
  return(
    <div className="main-container">
      <h1 className="page-title">Food</h1>

      <h2 className="sub-title-text">Find your local farmer's market <a href="https://www.ams.usda.gov/local-food-directories/farmersmarkets">here</a>.</h2>

      <CompanyInfo category="food"/>
    </div>
  )
}

export default Food;