import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Contact = ({ ThemeChange }) => {
  const downloadCv = () => {
    fetch("GharamSarsourCV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "GharamSarsourCV.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="contact-page">
      <div className="contact-display">
        <div className="contact-style">
          <a
            className="contact-icon"
            href="tel:+970568191595"
            target="_blank"
            rel="noreferrer"
          >
            <FaMobileAlt color="#bbbbbb" fontSize="90px" />
          </a>
          <div className="contact-title">+970568191595</div>
        </div>
        <div className="contact-style">
          <a
            className="contact-icon"
            href="mailto:sargharam@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope color="#bbbbbb" fontSize="90px" />
          </a>

          <div className="contact-title">sargharam@gmail.com</div>
        </div>
        <div className="contact-style">
          <a
            className="contact-icon"
            href="https://discordapp.com/users/Gharam Sarsour#2158"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord color="#bbbbbb" fontSize="90px" />
          </a>

          <div className="contact-title">Gharam Sarsour#2158</div>
        </div>
        <div className="contact-style">
          <a
            className="contact-icon"
            href="https://www.linkedin.com/in/gharam-sarsour-b40b5222a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="#bbbbbb" fontSize="90px" />
          </a>

          <div className="contact-title">Gharam Sarsour</div>
        </div>
        <div className="contact-style">
          <a
            className="contact-icon"
            href="GharamSarsourCV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={downloadCv}
          >
            <FaFilePdf color="#bbbbbb" fontSize="90px" />
          </a>

          <div className="contact-title">Download Cv</div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
