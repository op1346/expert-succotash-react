import React from "react";
import { useHistory } from "react-router-dom";

function InfoItem(props) {
  const { item } = props;
  let history = useHistory();

  function clickCompany(e) {
    const company = e.currentTarget.id;
    history.push(`/${company}`)
  }

  return(
   <div onClick={clickCompany} className="info-item-container" id={item.companyName}>
    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.companyName}</a>
    {item.desc.length >= 150 ? 
      <p className="company-desc">{item.desc.substring(0, 150)}...</p> :
      <p className="company-desc">{item.desc}</p> }
    
  </div>
  )
}

export default InfoItem