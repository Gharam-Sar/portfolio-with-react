import me from "./img/me.jpeg";
import contactt from "./img/contact.png";
import projectss from "./img/projects.png";
import gitImage from "./img/git.png";
import homee from "./img/home.png";
import linkedin from "./img/linkedin.png";
import mobile from "./img/mobile.png";
import email from "./img/email.png";
import discord from "./img/discord.png";
import infoo from "./img/info.png";
import { useState } from "react";
import './App.css';
let home=true;
let info=false;
let contact=false;
let projects=false;


function Content({filterText,toggle}) {
  if(filterText==1){  home=true;
    info=false;
    contact=false;
    projects=false;
  }
  else if(filterText==2){  home=false;
    info=true;
    contact=false;
    projects=false;
  } else if(filterText==3){  home=false;
    info=false;
    contact=false;
    projects=true;
  } else if(filterText==4){  home=false;
    info=false;
    contact=true;
    projects=false;
  }
  return (
   <div>
  {home?<HomeContent toggle={toggle}/>:""}  
  {contact?<ContactContent toggle={toggle}/>:""}  
  {info?<InfoContent toggle={toggle}/>:""}  
  {projects?<ProjectsContent toggle={toggle}/>:""}  
   </div>
  );
}

function SideNav({filterText,setFilterText}) {

  return (
 
    <div id="mynav" className="sidenav wrapper" >
    <button  herf=""  id="home" onClick={() => {
      if(filterText!=1){ setFilterText(1);
         console.log(filterText);}    
          }} >
      <abbr title="Homepage">
        <img src= {homee} />
    </abbr>
    </button>
     <button herf="" id="info" onClick={() => {
          if(filterText!=2){ setFilterText(2);
            console.log(filterText);}    
          }} >
      <abbr title="Information About me">
        <img src= {infoo} />
    </abbr>
     </button>
     <button herf=""  id="projects" onClick={() => {
          if(filterText!=3){ setFilterText(3);
            console.log(filterText);}
          }} >
      <abbr title="Some projects I created">
        <img src= {projectss} />
    </abbr>
     </button>
     <button  herf="" id="contact" onClick={() => {
          if(filterText!=4){ setFilterText(4);
            console.log(filterText);}
          }} >
      <abbr title="My Contact Information">
        <img src= {contactt} />
    </abbr>
     </button>
   

  </div>

  );
}
function Theme({toggle,settoggle}){
  return (
    <div className="theme">
  <input  type="checkbox" className="checkbox toggle-switch-checkbox " name="toggleSwitch" id="toggleSwitch" onClick={() => {
         console.log(toggle);
         settoggle(!toggle);
         console.log(toggle);

          }}/>
  <label className="toggle-switch-label" for="toggleSwitch">
   
  </label>
</div>
  );
}
function ContactContent({toggle,settoggle}){
  return (
    <div className="MainPosition3" id="main_contact">
    <br></br>
        
    <div className="divsp">
      <div>
      <div>
    <abbr title="+972568191595"> <a href="tel:+972568191595" target="_blank"><img className="contact_icon" src={mobile}/>
       </a> 
     </abbr>  <br></br>
          +972568191595 
      </div>
  <div>
  <br></br>
    <div>
      <abbr title="sargharam@gmail.com"> <a href="mailto:sargharam@gmail.com" target="_blank" ><img className="contact_icon" src={email}/>
         </a> 
       </abbr>  <br></br>
       sargharam@gmail.com 
        </div>
  </div>
  </div>
  <div>&emsp;&emsp;</div>
  <div>
    <div>
  <abbr title="Gharam Sarsour#2158"> <a href="https://discordapp.com/users/Gharam Sarsour#2158" target="_blank"><img className="contact_icon" src={discord}/>
     </a> 
   </abbr>  <br></br>
   Gharam Sarsour#2158
    </div>
  <div>
  <br></br>
  <div>
    <abbr title="Gharam Sarsour"> <a href="https://www.linkedin.com/in/gharam-sarsour-b40b5222a/" target="_blank" ><img className="contact_icon" src={linkedin}/>
       </a> 
     </abbr>  <br></br>
     Gharam Sarsour 
      </div>
  </div>
  </div>
  </div></div>
  );
}
function InfoContent({toggle,settoggle}){
  return (
    <div className="MainPosition" id="main_info">
      <br></br><br></br><br></br>
        <div className="divsp">
          <div id="info_lines"> My name is <strong className={toggle?"whiteText":"grayText"}> &nbsp;Gharam Sarsour </strong>, Im 22 years old, 
          I'm a frontend developer,<br></br>  currently training at foothill technology solution,
          I have worked<br></br> on differant types of projects, I included the most important ones in <br></br> my projects section of this Portfolio. 
        </div>
         


</div></div>
  );
}
function ProjectsContent({toggle,settoggle}){
 
  return (
    <div className="MainPosition2" id="main_projects">

      
    <div className="divsp">
      <div>
      <div>
        
        <a href="https://github.com/Gharam-Sar/Orchid-Web-Project.git" target="_blank" rel="noopener noreferrer"><img className="project_icon" src={gitImage}/> </a>
        <br></br>

        <name  className={toggle?"projectNameWhite":"projectNameGray"} id="project_name">Orchid Store</name>
        <br></br>
      <description> An online plant and Flower Shop, created using html,css,java script and php </description>    
       </div> 
       <br></br>

       <div>      <a href="https://github.com/Gharam-Sar/Acute-Graduation-Project.git" target="_blank" rel="noopener noreferrer"><img className="project_icon" src={gitImage}/> </a>
        <br></br>
        <name  className={toggle?"projectNameWhite":"projectNameGray"}  id="project_name2">Acute Application</name>
        <br></br>

        <description> A mobile application to organize eating habits and water drinking,        <br></br>

           created with Flutter and runs on a node js server, along with a html and css Admin page.
            </description>
          
        
       </div> 
      </div>
  
  
  </div></div>
  );
}
function HomeContent({toggle,settoggle}){
  return (
    <div className="MainPosition" id="main_home">
    <div className="divsp">
     <div> 
      <p className="intro">
HI,I'm <span className={toggle?"whiteText":"grayText"} id="myname"><strong>Gharam Sarsour &nbsp;</strong></span>
<br></br>

<span className="intro2">
&emsp;&emsp;&emsp;&emsp;&emsp;
and this is <span className={toggle?"whiteText":"grayText"} id="myname2"><strong>My Portfolio </strong></span></span>
</p>
</div> 
 
<div><img className="avatar" src={me} alt="Avatar"/></div> 
</div>
</div>
  );
}
function App() {
  const [filterText, setFilterText] = useState(1);
  const [toggle, settoggle] = useState(false);
//   const body= window.document.getElementsByTagName("body");
//  body.style.backgroundColor='#e9e9e9';

  return (
    <div className="App">
       <style>{toggle?'body { background-color: #7a7a7a; }':'body { background-color: #e9e9e9; }'}</style>
      <div >
      <div className="page_container">
<div>
  <SideNav filterText={filterText} setFilterText={setFilterText}/>
</div>
      <div  id="body">
<Theme toggle={toggle} settoggle={settoggle}/>
    
  </div>
<div>
 <Content filterText={filterText} toggle={toggle}/>
</div>

</div>
     
      </div>
    </div>
  );
}

export default App;
