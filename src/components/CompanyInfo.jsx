import React from "react";
import InfoItem from "./InfoItem";

import data from "../data/data";

function CompanyInfo(props) {
  const { category } = props;
  return(
    <div className="company-container">
      {data.map(item => (
        item.category === category && 
        <InfoItem item={item}/>
      ))}
    </div>
  )
}

export default CompanyInfo