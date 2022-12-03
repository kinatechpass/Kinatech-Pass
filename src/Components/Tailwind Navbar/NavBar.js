import '../../index.css'
import { FaLightbulb } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div style={{ background: 'linear-gradient(to left,#A91079,#2E0249 75%)' }} className="navbar block w-full h-16 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between">
        {/* navbar,  nav header */}
        <div className="">
          <h1 className="p-4 text-xl lg:text-3xl font-bold text-white">KinaTech Pay</h1>
        </div>
        {/* Nav links */}
        <div className="flex justify-end text-white text-lg p-5 cursor-pointer gap-2 lg:gap-10">

          <div className="flex"> <FaLightbulb /><span className="inline-block text-sm hover:text-gray-200"> Find My Token</span></div>
          <IoMdNotifications />

          <Link to="/Login"> <FaUserCircle className='hover:text-gray-200' /> </Link>

          <span className="inline-block text-sm hover:text-gray-200">
            <Link to="/"> Home</Link></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;