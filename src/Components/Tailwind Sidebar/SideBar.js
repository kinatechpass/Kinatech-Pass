import '../../index.css'
import '../Tcss.css'
import { MdSettings } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { MdSignalWifi3Bar } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { AiOutlineBulb } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from 'react';

function SideBar() {
  const [expandSidebar, setExpandsideBar] = useState(false)
  const ExpandSidebar = () => {
    setExpandsideBar(!expandSidebar)
  }
  return ( 
    <div id='sidebar' className={expandSidebar ? "sidebar-true":"sidebar-false" } style={{background:'#2E0249'}}>
      <br />

      {/* sidebar menu for mobile devices */}
      <div onClick={ExpandSidebar} className={ expandSidebar ? "sidebar-menu-true":"sidebar-menu-false"}>
        <IoIosArrowDroprightCircle className="lg:hidden text-4xl" />
      </div>

      <div onClick={ExpandSidebar} className={ expandSidebar ? "sidebar-menu-toggler-true" :"sidebar-menu-toggler-false"}>
        <IoIosArrowDropleft className="lg:hidden text-4xl"/>
      </div>

      {/* sidebar header */}
      <div className="sidebar-header">
        <MdSettings className="hidden lg:flex text-2xl animate-spin"  />
        <span className="lg:underline underline-offset-8 hidden lg:inline-block">Our Services</span>
      </div>

 {/* sidebar body */}
      <div className="mx-2">
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
        <BsPhone className={ expandSidebar ? "sidebar-body-icons-true":"sidebar-body-icons-false" }
         /><span className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }
        > Buy Phone Airtime<span style={{visibility:'hidden'}}>..</span></span>

      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
        <MdSignalWifi3Bar className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        "/><span className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }>Buy Internet Data<span style={{visibility:'hidden'}}>..</span></span>
      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
        <CgScreen className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        " /><span className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }>PayTv Subscription</span>
      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
        <AiOutlineBulb className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        " /><span className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }>Pay Electircity Bills<span style={{visibility:'hidden'}}>..</span></span>
      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
        <CiCircleMore className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        "/><span className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }>And Lots More...<span style={{visibility:'hidden'}}>...</span></span>
      </div>
      {/* <div>
        <MdSettings /><span>Our Services</span>
      </div> */}
      </div>
       
    </div>
   );
}

export default SideBar;