import React from "react";
import Languages from "../components/Languages";
import Software from "../components/Software";
import Hardware from "../components/Hardware";
import Soft from "../components/Soft";
const Information = ({ ThemeChange }) => {
  return (
    <div className="info-page">
      <div className="skills">
        <Languages ThemeChange={ThemeChange} />
        <Software ThemeChange={ThemeChange} />
        <Hardware ThemeChange={ThemeChange} />
        <Soft ThemeChange={ThemeChange} />
      </div>
    </div>
  );
};
export default Information;
