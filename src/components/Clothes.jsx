import React from "react";

import data from "../data/data";

function Clothes() {
  return(
    <div className="main-container">
      <h1>Clothes</h1>

      {data.map(item => (
        item.category === "clothing" &&
        <div>
          <a href={item.url}>{item.companyName}</a>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
};

export default Clothes;