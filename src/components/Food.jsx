import React from "react";
import CompanyInfo from "./CompanyInfo";



function Food() {
  return(
    <div className="main-container">
      <h1>Food</h1>

      <h2>Find your local farmer's market <a href="https://www.ams.usda.gov/local-food-directories/farmersmarkets">here</a>.</h2>

      <CompanyInfo category="food"/>
    </div>
  )
}

export default Food;