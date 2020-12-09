import React from "react";

import data from "../data/data";

function Homegoods() {
  return(
    <div className="main-container">
      <h1>Homegoods</h1>

      {data.map(item => (
        item.category === "homegoods" &&
        <div>
          <a href={item.url}>{item.companyName}</a>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
};

export default Homegoods;