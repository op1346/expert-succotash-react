import React from "react";

import data from "../data/data";

function Food() {
  return(
    <div className="main-container">
      <h1>Food</h1>

      <h2>Find your local farmer's market <a href="https://www.ams.usda.gov/local-food-directories/farmersmarkets">here</a>.</h2>

      {data.map(item => (
        item.category === "food" &&
        <div>
          <a href={item.url}>{item.companyName}</a>
          <p>{item.desc}</p>
      </div>
      ))}
    </div>
  )
}

export default Food;