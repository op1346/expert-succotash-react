import React from "react";

function InfoItem(props) {
  const item = props.item;
  return(
   <div className="info-item-container">
    <a href={item.url}>{item.companyName}</a>
    <p>{item.desc}</p>
  </div>
  )
}

export default InfoItem