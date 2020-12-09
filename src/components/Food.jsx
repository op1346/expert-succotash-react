import React from "react";

import data from "../data/data";

function Food() {
  return(
    <div className="main-container">
      <h1>Food</h1>
      
      <h2>Find your local farmer's market <a href="https://www.ams.usda.gov/local-food-directories/farmersmarkets">here</a>.</h2>
      
      {data.map(item => (
        item.category === "food" && <div>{item.companyName}</div>
      ))}
    </div>
  )
}

export default Food;