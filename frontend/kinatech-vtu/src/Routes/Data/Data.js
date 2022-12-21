import React from 'react'
import { Link } from 'react-router-dom'
import './Data.css'
export default function Data() {
  return (
    <div className='cover'>
      <div className="Airtime-body">
   
      </div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold p-2 ml-2 lg:ml-0 lg:text-lg' >Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>

      <div className="mt-4 content p-4  bg-white ml-2 lg:ml-0 lg:text-lg">
        <h1 className='font-bold text-xl text-fuchsia-500 p-2'>Data bundles</h1>
        <span className='text-sm text-gray-800n p-2'>Enjoy Massive Data bonus using<p className='ml-2 lg:ml-0'> 
        the KinaTech Pay service</p></span>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">

        <Link to='/Data/Airtel-Form'>  <div className="airtel hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/Airtel.jpg' />
            <div className='mx-4'>
              <span className='font-bold hover:text-white text-gray-800'>Airtel DATA</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Airtel Data - Get instant Bonus</small>
            </div>


          </div>
       </Link>
        <Link to='/Data/Form'>
          <div className="mtn hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/MTN.jpg' />
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>MTN DATA</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>MTN Data - Get instant Bonus</small>
            </div>


          </div>
  </Link>
         <Link to='/Data/Glo-Form'>
          <div className="mobile hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/GLO.jpg' />
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>Glo DATA</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Glo Data - Get instant Bonus</small>
            </div>


          </div>
    </Link>
          <Link to='/Data/9mobile-Form'>
          <div className="glo hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/mobile.jpg' />
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>9Mobile DATA</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>9Mobile Data - Get instant Bonus</small>
            </div>


          </div>
   </Link>
          <Link to='/Data'>
          <div className="smile hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/Smile.jpg' />
            <div className=''>
              <span className='font-bold text-gray-800'>Smile DATA</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Smile Data - Get instant Bonus</small>
            </div>


          </div>
          </Link>
        </div>


      </div>
    </div> 
  )
}
