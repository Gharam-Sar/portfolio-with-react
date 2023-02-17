

import React from "react";

import { FaGithub } from "react-icons/fa";

const Project = ({ ThemeChange,title,description,languages, link}) => {

  return (
    <div className="project-style" title={description}>
        <FaGithub className="project-icon" color="#bbbbbb" fontSize="60px"/>
       <span className="project-title">{title}</span>
       <span>{languages}</span>
       <button
            className="link-btn"
            onClick={() =>
              window.open(link, "_blank", "noreferrer")
            }
          >
            Link
          </button>
    </div>
  );
};
export default Project;
