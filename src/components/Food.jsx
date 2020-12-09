import React from "react";

import data from "../data/data";

function Food() {
  return(
    <div>
      <h1>Food</h1>
      {data.map(item => (
        item.category === "food" && <div>{item.companyName}</div>
      ))}
    </div>
  )
}

export default Food