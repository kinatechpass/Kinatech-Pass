import './Sidebar.css';
import { MdSettings } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { MdSignalWifi3Bar } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { AiOutlineBulb } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Sidebar() {

  return ( 
    <div className='side'>
        <hr/>
        <br/>
      <div className='sidebar-menu'>
        <AiOutlineMenuUnfold className='side-btn'/>
      </div>
      <hr/>
       <div className='side-header'>
       <MdSettings  className='mobile-settings'/>
          <h3>
            <MdSettings  className='settings'/>
            Our Services
          </h3>
       </div>
       <div className='side-body'>
          <ul className='side-content' >
         <div className='touchable'>
            <li className='side-item'>
              <div>
                  <BsPhone className='icon phone-icon'/> 
              </div>
                  <span> Buy Phone Airtime</span>
                </li>
            </div>
       <div className='touchable'>
            <li className='side-item'>
              <MdSignalWifi3Bar className='icon data-icon'/><span> Buy Internet data</span>
            </li>
          </div>
      <div className='touchable'>
            <li className='side-item'>
              <CgScreen className='icon tv-icon'/> 
              <span>Pay Tv Subscription </span>
            </li>
        </div>
        <div className='touchable'>
            <li className='side-item'>
              <AiOutlineBulb className='icon bill-icon' />
              <span> pay Electricity Bills </span>
            </li>
          </div>
          <div className='touchable'>
            <li className='side-item'>
              <CiCircleMore  className='icon more-icon'/>
              <span> And lots more. </span>
            </li>
          </div>
          </ul>
        </div>
            <div className='side-end'>

    </div>
    </div>

    
   );
}

export default Sidebar;