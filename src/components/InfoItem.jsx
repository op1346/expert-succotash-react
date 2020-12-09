import React from "react";

function InfoItem(props) {
  const item = props.item;
  return(
   <div className="info-item-container">
    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.companyName}</a>
    <p className="company-desc">{item.desc}</p>
  </div>
  )
}

export default InfoItem