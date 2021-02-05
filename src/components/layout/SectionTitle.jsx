import "./SectionTitle.css";
import React from "react";

/** 
 * @param props Vai ser usado no título do exercício 
 */
const SectionTitle = (props) => (
  <div className="SectionTitle">
    <h3>{props.title}</h3>
  </div>
);

export default SectionTitle;
