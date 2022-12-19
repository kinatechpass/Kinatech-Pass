import '../../index.css'
import '../Tcss.css'
import { MdHome, MdSettings } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { MdSignalWifi3Bar } from "react-icons/md";
import { CgLogIn, CgLogOut, CgScreen } from "react-icons/cg";
import { AiOutlineBulb } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useGoogleAuthContext } from '../../hooks/useGoogleAuthContext';

function SideBar() {
  const [expandSidebar, setExpandsideBar] = useState(false)
  const navigate = useNavigate()
  const { dispatch, googleUser } = useGoogleAuthContext()
  const ExpandSidebar = () => {
    setExpandsideBar(!expandSidebar)
  }

  const logout = () => {
    const user = localStorage.getItem('user')
    if(!user){
      navigate('/Login')
    }
    localStorage.removeItem('user')
    
    dispatch({ type:'LOGGEDOUTWITHGOOGLE'})
    
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
       user.delete()
      } 
    });
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
          <Link to='/'><MdHome className={expandSidebar ? "sidebar-body-icons-true" : "sidebar-body-icons-false"}
          /></Link><span onClick={() => (setExpandsideBar(false))} className={expandSidebar ? "inline-block" : "hidden lg:inline-block"}
          > <Link to='/'> Home </Link><span style={{ visibility: 'hidden' }}>..</span></span>

        </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <Link to='/Airtime'><BsPhone className={ expandSidebar ? "sidebar-body-icons-true":"sidebar-body-icons-false" }
         /></Link><span onClick={()=>(setExpandsideBar(false))} className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }
          > <Link to='/Airtime'> Buy Phone Airtime </Link><span style={{visibility:'hidden'}}>..</span></span>

      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <Link to='/Data'>  <MdSignalWifi3Bar className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        "/></Link><span onClick={() => (setExpandsideBar(false))} className={expandSidebar ? "inline-block" : "hidden lg:inline-block"}><Link to='/Data'> Buy Internet Data </Link><span style={{visibility:'hidden'}}>..</span></span>
      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <Link to='/Tv'><CgScreen className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        " /></Link><span onClick={() => (setExpandsideBar(false))} className={expandSidebar ? "inline-block" : "hidden lg:inline-block"}><Link to='/Tv'> Pay TV Subscription </Link></span>
      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <Link to='/Electricity'><AiOutlineBulb className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        " /></Link><span onClick={() => (setExpandsideBar(false))} className={expandSidebar ? "inline-block" : "hidden lg:inline-block"}><Link to='/Electricity'> Pay Electricity Bills </Link><span style={{visibility:'hidden'}}>..</span></span>
      </div>
      <div className="flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <Link to='/More'> <CiCircleMore className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        "/></Link><span onClick={() => (setExpandsideBar(false))} className={ expandSidebar ? "inline-block" : "hidden lg:inline-block"  }>
          <Link to='/More'>And Lots More...</Link><span style={{visibility:'hidden'}}>...</span></span>
      </div>
      {/* <div>
        <MdSettings /><span>Our Services</span>
      </div> */}


        
     { googleUser ? (   <div className="absolute bottom-0 left-5 mb-16  flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <p onClick={logout}> <CgLogOut className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        "/></p><span onClick={() => (setExpandsideBar(false))} className={expandSidebar ? "inline-block" : "hidden lg:inline-block"}>
           <p onClick={logout}>Log Out </p><span style={{ visibility: 'hidden' }}>...</span></span>
        </div>
        ) : ( 
        <div className="absolute bottom-0 left-5 mb-16  flex justify-center gap-1 py-3 cursor-pointer hover:opacity-50">
          <p onClick={logout}> <CgLogIn className="transition ease-in-out delay-150 text-4xl 
        hover:-translate-y-1 hover:scale-110 duration-300 lg:text-2xl 
        "/></p><span onClick={() => (setExpandsideBar(false))} className={expandSidebar ? "inline-block" : "hidden lg:inline-block"}>
            <p onClick={logout}>Login </p><span style={{ visibility: 'hidden' }}>...</span></span>
        </div>
          )
      }
      </div>
       
    </div>
   );
}

export default SideBar;