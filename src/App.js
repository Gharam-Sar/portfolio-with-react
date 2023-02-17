import Navbar from "./components/Navbar";
import Information from "./routes/Information";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css"
import Theme from "./components/Theme";
const App = () => {
  const [ThemeChange, setTheme] = React.useState(true);

  return (
    <div >
      <style>
        {ThemeChange
          ? "body { background-color: #e9e9e9; }"
          : "body { background-color: #7d97ac; }"}
      </style>
      <Theme  ThemeChange={ThemeChange} setTheme={setTheme}  />
    <div className="page">
       <Navbar/>
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home ThemeChange={ThemeChange} />} />
          <Route path="/Information" element={<Information  ThemeChange={ThemeChange}/>} />
          <Route path="/Projects" element={<Projects  ThemeChange={ThemeChange} />} />
          <Route path="/Contact" element={<Contact  ThemeChange={ThemeChange}/>} />
        </Routes>
      </div>
    </div></div>
  );
};
export default App;
