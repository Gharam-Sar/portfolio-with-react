import me from "./img/me.jpeg";
import contactt from "./img/contact.png";
import projectss from "./img/projects.png";
import homee from "./img/home.png";
import infoo from "./img/info.png";
import { useState } from "react";
import './App.css';
let home=true;
let info=false;
let contact=false;
let projects=false;


function NavButton({filterText}) {
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
  {home?<HomeContent/>:""}  
  {contact?"444444444444444444444444444444444444":""}  
  {info?<InfoContent/>:""}  
  {projects?"33333333333333333333333333333333333333":""}  
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
    <div className = "theme">
    <abbr title="Dark or Light Theme">
 <input  type="checkbox" id="switch" /><label  onChange={() => {
     console.log(toggle);
                settoggle(!toggle);
                console.log(toggle);
      }} ></label></abbr>
  </div>
  );
}
function InfoContent({toggle,settoggle}){
  return (
    <div className="MainPosition" id="main_info">
      <br></br><br></br><br></br>
        <div className="divsp">
          <div id="info_lines"> My name is <strong className="grayText"> &nbsp;Gharam Sarsour </strong>, Im 22 years old, 
          I'm a frontend developer,<br></br>  currently training at foothill technology solution,
          I have worked<br></br> on differant types of projects, I included the most important ones in <br></br> my projects section of this Portfolio. 
        </div>
         


</div></div>
  );
}
function HomeContent(){
  return (
    <div className="MainPosition" id="main_home">
    <div className="divsp">
     <div> 
      <p className="intro">
HI,I'm <span className="grayText" id="myname"><strong>Gharam Sarsour &nbsp;</strong></span>
<br></br>

<span className="intro2">
&emsp;&emsp;&emsp;&emsp;&emsp;
and this is <span className="grayText" id="myname2"><strong>My Portfolio </strong></span></span>
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

  return (
    <div className="App">
      <header className="App-header">
     
      </header>
      <div >
      <div className="page_container">
<div>
  <SideNav filterText={filterText} setFilterText={setFilterText}/>
</div>


      <div  id="body">
{/* <Theme toggle={toggle} settoggle={settoggle}/> */}
     
  </div>
<div>
 <NavButton filterText={filterText}/>
</div>

</div>
     
      </div>
    </div>
  );
}

export default App;
