import React from "react";
import { FaGlobe } from "react-icons/fa";

const Languages = ({ ThemeChange }) => {
  return (
    <div>
      <div className="skill-title">Languages</div>
      <div className="skill-display">
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaGlobe color="#585858" fontSize="25px" />
          Arabic
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaGlobe color="#585858" fontSize="25px" />
          English
        </div>
      </div>
    </div>
  );
};
export default Languages;
