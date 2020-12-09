import React from "react";
import data from "../data/data";

class CompanyPage extends React.Component {
  
  render() {
    const companyName = this.props.match.params.company;
    const company = data.filter(company => company.companyName === companyName)[0];

    return(
      <div className="company-page-container">
        <a className="title" href={company.url} target="_blank" rel="noopener noreferrer">{company.companyName}</a>
        {/* Placeholder image */}
        <img className="company-img" src="../images/placeholder.jpg" alt="placeholder"/>
        <p>{company.desc}</p>
      </div>
    )
  }
};

export default CompanyPage