import React from "react";
import { FaScrewdriver } from "react-icons/fa";

const Hardware = ({ ThemeChange }) => {
  return (
    <div>
      <div className="skill-title">Hardware Engineering</div>
      <div className="skill-display">
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaScrewdriver color="#585858" fontSize="25px" />
          VHDL
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaScrewdriver color="#585858" fontSize="25px" />
          verilog
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaScrewdriver color="#585858" fontSize="25px" />
          Hardware design
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaScrewdriver color="#585858" fontSize="25px" />
          Hardware Analysis
        </div>
      </div>{" "}
    </div>
  );
};
export default Hardware;
