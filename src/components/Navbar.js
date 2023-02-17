import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  
  const resolvedPath = useResolvedPath("/");
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const resolvedPath2 = useResolvedPath("/Information");
  const isActive2 = useMatch({ path: resolvedPath2.pathname, end: true });
  const resolvedPath3 = useResolvedPath("/Projects");
  const isActive3 = useMatch({ path: resolvedPath3.pathname, end: true });
  const resolvedPath4 = useResolvedPath("/Contact");
  const isActive4 = useMatch({ path: resolvedPath4.pathname, end: true });

  return (
    <nav className="nav">
      
     
        <NavLink title="Home Page" to="/">
          <FaHome color={isActive ? "white" : "#7d97ac"} fontSize="30px" />
        </NavLink>
        <NavLink title="Information About me" to="/Information">
          <FaUserAlt color={isActive2 ? "white" : "#7d97ac"} fontSize="30px" />
        </NavLink>
        <NavLink title="Some of My Projects" to="/Projects">
          <FaLaptopCode color={isActive3 ? "white" : "#7d97ac"} fontSize="30px" />
        </NavLink>
        <NavLink title="My Contact Info" to="/Contact">
          <FaPhone color={isActive4 ? "white" : "#7d97ac"} fontSize="30px" />
        </NavLink>
      
    </nav>
  );
};

export default Navbar;
