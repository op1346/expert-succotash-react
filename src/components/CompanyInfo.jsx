import React from "react";
import InfoItem from "./InfoItem";

import data from "../data/data";

function CompanyInfo(props) {
  const { category, sub } = props;
  const filtered = data.filter(item => item.category.includes(category));

  return(
    <div className="company-container">
      {/* Checks if a subcategory has been clicked and filters accordingly. Otherwise, show all */}
      {!sub ? filtered.map((item, i) => (
        <InfoItem item={item} key={`company-${i}`}/>
      )) :
        filtered.map((item, i) => (
          item.subCategories.includes(sub) && <InfoItem item={item} key={`company-${i}`}/>
        ))
      }
    </div>
  )
}

export default CompanyInfo