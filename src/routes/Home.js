import React from "react";
import me from "../img/me.jpeg";
const Home = ({ ThemeChange }) => {
  return (
    <div className="home-page">
      <div className="home-header">
        <div className="home-text">
          <h2>
            HI,I'm{" "}
            <span style={{ color: ThemeChange ? "#353449" : "white" }}>
              Gharam Sarsour
            </span>
          </h2>
          <h3>
            and this is{" "}
            <span style={{ color: ThemeChange ? "#353449" : "white" }}>
              My Portfolio
            </span>
          </h3>
        </div>
        <div>
          {" "}
          <img
            className="avatar"
            src={me}
            alt="Avatar"
            width="400px"
            height="400px"
          />
        </div>
      </div>
      <div className="info-introduction">
        I'm a{" "}
        <span style={{ color: ThemeChange ? "#353449" : "white" }}>
          Frontend developer
        </span>{" "}
        who is Passionate about having a successful career, I enjoy my work and{" "}
        <span style={{ color: ThemeChange ? "#353449" : "white" }}>
          aspire to learn and grow
        </span>
      </div>
    </div>
  );
};
export default Home;
