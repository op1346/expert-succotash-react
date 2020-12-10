import React from "react";
import resourcesData from '../data/resourcesData';

function Main() {
  return(
    <div>
      <div className="main-container">

        <h4>We did the hard part for you, and collected a bunch of resources and companies that are committed to sustainability.</h4>
      </div>
      <div className="company-container">
        {resourcesData.map(item => (
          <div className="info-item-container" id={item.resourceName}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.resourceName}</a>
            <p className="company-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Main;