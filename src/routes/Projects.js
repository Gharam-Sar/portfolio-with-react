import React from "react";
import Project from "../components/Project";
const Projects = ({ ThemeChange }) => {
  return (
    <div className="project-page">
      <div className="project-intro">Some Projects I Created</div>
      <div className="project-display">
        <Project
          ThemeChange={ThemeChange}
          title={"Orchid Store"}
          languages="html,css,js,php"
          description={
            "An online plant and Flower Shop, created using html,css,java script and php"
          }
          link={"https://github.com/Gharam-Sar/Orchid-Web-Project"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Acute Application"}
          languages="dart/Futter,Node js,html,css,php"
          description={
            "A mobile application to organize eating habits and water drinking,created with Flutter and runs on a node js server, along with a html and css Admin page."
          }
          link={"https://github.com/Gharam-Sar/Acute-Graduation-Project"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Book Store Microservices"}
          languages="python/Flask"
          description={
            "A Distributed operating system project on microservices, a book store with 3 services, it has load balancing and fault tolerance"
          }
          link={"https://github.com/Gharam-Sar/dos-project"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Portfolio with Html"}
          languages="html,css"
          description={"A portfolio with html and css"}
          link={"https://github.com/Gharam-Sar/portfolio"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Portfolio with React"}
          languages="js,css/React"
          description={"A portfolio with React"}
          link={"https://github.com/Gharam-Sar/portfolio-with-react"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Shopping List"}
          languages="js,css/React"
          description={"A Shopping list with Cart and local storage"}
          link={"https://github.com/Gharam-Sar/shopping-list"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"To Do List"}
          languages="js,css/React"
          description={
            "A To Do List with React, it has adding task feature,searching and displaying,it was also tested using jest"
          }
          link={"https://github.com/Gharam-Sar/todoTesting"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"To Do List"}
          languages="ts,css/React"
          description={
            "A To Do List with typescript React, it has adding task feature,searching and displaying"
          }
          link={"https://github.com/Gharam-Sar/typedToDo"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Fullstack To Do"}
          languages="js,css/React,Node js,sqlite3"
          description={
            "A To Do List with React, and a node js server with sqlite3"
          }
          link={"https://github.com/Gharam-Sar/fullstack-todo"}
        />
        <Project
          ThemeChange={ThemeChange}
          title={"Wish List"}
          languages="js,css/React"
          description={"A Destination wish List"}
          link={"https://github.com/Gharam-Sar/wish-list"}
        />
      </div>
    </div>
  );
};
export default Projects;
