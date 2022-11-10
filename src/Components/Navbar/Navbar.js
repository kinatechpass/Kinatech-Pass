import './Navbar.css';
import { FaLightbulb} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications  } from "react-icons/io";
// import { logo } from "../images/logo.png" 

function Navbar() {
  return ( 
    <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
  <div className="nav-sidebtn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

    <div className="nav-title">
      KinaTech VTU
      {/* <img className='logo' src='/assets/logo.png' /> */}
    </div>
    
  </div>
 
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  <div className='nav-compulsory'>
     <a> <FaUserCircle /></a> 
     <a><IoMdNotifications /></a>
    <a><FaLightbulb /> Find My Token</a>

   
  </div>
  <div className="nav-links">


  
  </div>
  
</div>
   );
}

export default Navbar;