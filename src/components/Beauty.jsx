import React from "react";

import data from "../data/data";

function Beauty() {
  return(
    <div className="main-container">
      <h1>Beauty</h1>

      {data.map(item => (
        item.category === "beauty" && <div><a href={item.url}>{item.companyName}</a></div>
      ))}
    </div>
  )
};

export default Beauty;