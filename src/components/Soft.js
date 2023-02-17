import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const Soft = ({ ThemeChange }) => {
  return (
    <div>
      <div className="skill-title">Soft Skills</div>
      <div className="skill-display">
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Teamwork
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Communication
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Problem solving
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Critical thinking
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Analytical thinking
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Creativity
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaPencilAlt color="#585858" fontSize="25px" />
          Competitive writing
        </div>
      </div>
    </div>
  );
};
export default Soft;
