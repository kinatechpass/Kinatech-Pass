import '../../index.css'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return ( 
    <div className="footer">
      <div className="hidden md:block mt-11">
    <div className=''>
        <h1 className="text-center font-bold text-xl lg:text-2xl">Kinatech Pay</h1>
        <h4 className="text-center font-bold text-lg text-gray-800"><i>Make Easy Payments Today!</i></h4>
   </div>

   <div className="grid md:grid-cols-3 mt-11 lg:grid-cols-4 ">
          <div className='address relative'>
        <div className="earn p-4 ">
                <span className='earn mb-9 text-lg text-purple-500 font-bold'> Earn With KinaTech Pay Today!</span>
        <p className='mt-4'>
                  <span className='p'>   Start earning <br /></span>
                  <span className='p'>    Partner with Us <br/></span>
                  <span className='p'>     Terms and Conditions < br /></span >
        </p>
        </div>
    </div>


          <div className="address relative">
            <div className="earn p-4 absolute bottom-0">
              <span className='earn mb-9 text-lg text-purple-500 font-bold'> About</span>
              <p className='mt-4'>
                <span className='p'>About Us <br /></span>
                <span className='p'> Contact Us<br /></span>
                <span className='p'>  Help < br /></span >
                <span className='p'>  FAQ ' s < br /></span >
              </p>

            </div>
   </div>

    <div className="address relative">
            <div className="earn p-4 absolute">
              <span className='earn mb-9 text-lg text-purple-500 font-bold'> Contact Us</span>
              <p className='mt-4'>
                <span className='p'> Phone: +234 8087 189 386 <br /></span>
                <span className='p'> Email: contact@kinatechinnovative.com<br /></span>
                <span className='p'>  Suit B56
                  Gwarinpa Plaza, Life Camp 900042
                  < br /></span >
                <span className='p'> FCT, Abuja. < br /></span >
              </p>

            </div>
    </div>

    <div className="platforms">
            <span className='earn mb-9 text-lg text-purple-500 font-bold'> Follow Us On Social Media</span>
            <div className='mt-4 grid grid-cols-9'>
              <BsFacebook className='text-xl text-gray-800' />
              <BsInstagram className='text-xl text-gray-800 ' />
              <FaTwitter className='text-xl text-gray-800' />
              <BsLinkedin className='text-xl text-gray-800' />
            </div>
           <div className="apps mt-4">
            <h2>Download Our Apps</h2>
            <div className='flex mt-4 gap-2'>
              <div className='w-16 rounded-lg'>
                  <img className='rounded-sm' src='./assets/playstore-removebg-preview.png' alt='playsore' />
                <small><b>playstore</b></small>
              </div>
                <div className='appstore w-20 rounded-lg'>
                  <img className='rounded-sm' src='./assets/appstore-removebg-preview.png'alt='playsore' />
                  <small><b>Appstore</b></small>
                </div>
            </div>
            
           </div>
            
    </div>
   </div>
      </div>
      <h3 className='text-center mt-20'>© 2022 <b>Kinatech Pay. </b>All Rights Reserved</h3>
    </div>
   );
}

export default Footer;