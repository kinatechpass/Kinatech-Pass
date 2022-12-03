import React from 'react'
import './Tv.css'
import '../../index.css'
export default function Tv() {
  return (
    <div className='cover'>
      <div className="Airtime-body">

      </div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold text-lg p-2'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>

      <div className="mt-4 content p-4  bg-white">
        <h1 className='font-bold text-xl text-fuchsia-500 p-2'>Tv Subscription </h1>
        <span className='text-sm text-gray-800 p-2'>Renew Tv Subscription Using Kinatech Pay Services</span>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">

          <div className="phone hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src={process.env.PUBLIC_URL + '/Assets/dstv.jpg'} />
            <div className='mx-2'>
              <span className='font-bold hover:text-white text-gray-800'>DSTV Subscription</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Choose from a range of DStv bouquets for your entertainment. Easy payment, quick value delivery.</small>
            </div>


          </div>

          <div className="phone hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src={process.env.PUBLIC_URL + '/Assets/Gotv.jpg'} />
            <div className='mx-2'>
              <span className='font-bold text-gray-800'>GOTV Subscription</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Choose from a range of GOtv bouquets for your entertainment. Easy payment, quick value delivery.</small>
            </div>


          </div>

         
{/* 

          <div className="phone hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./Assets/join.png' />
            <div className=''>
              <span className='font-bold text-gray-800'>Smile Airtime</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Smile - Get instant Top up</small>
            </div>


          </div> */}
        </div>


      </div>
    </div> 
  )
}
