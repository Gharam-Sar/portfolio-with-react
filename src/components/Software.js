import React from "react";
import { FaCode } from "react-icons/fa";

const Software = ({ ThemeChange }) => {
  return (
    <div>
      <div className="skill-title">Software Engineering</div>
      <div className="skill-display">
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          C,C++
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Java
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          JS,TS
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          html,css
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          PHP
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Python
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Node js
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Flutter
        </div>
      </div>
      <div className="skill-display">
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          ReactJS
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Flask
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Git
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Microsoft office
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          SQL
        </div>
        <div className="skill-style" style={{backgroundColor:ThemeChange?"rgba(179, 203, 213, 0.8)":"rgba(223, 202, 202, 0.7)"}}>
          <FaCode color="#585858" fontSize="25px" />
          Software testing
        </div>
      </div>
    </div>
  );
};
export default Software;
