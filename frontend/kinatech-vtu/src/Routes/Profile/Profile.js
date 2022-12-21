import React from 'react'
import { BsCheck, BsPerson, BsSdCard } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='cover'>
      <div className="Airtime-body">
        <h1 className='mt-4 text-3xl font-bold'>Welcome!  </h1>
        <p>Edit Profile!</p>
      </div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold ml-2 lg:text-lg p-2'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>
 
      <div className="mt-4 content p-4  ">
        <h1 className='font-bold text-xl text-fuchsia-500 p-2 ml-2 lg:ml-0 lg:text-lg'>Welcome To Your Profile </h1>
        <span className='text-sm text-gray-800 p-2 ml-2 lg:ml-0 lg:text-lg'>Home Of Earning!</span>

        <div className="md:grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg flex flex-col justify-center items-center ml-6">
            <div className="pic border border-lg mt-9 rounded-full" style={{aspectRatio:'1/1', width:'30%'}}>
             <img src="/assets/user.png" className="rounded-full" style={{aspectRatio:'1/1'}} />
            </div>
            <div className="">
              <button className="deposit mx-auto mb-4 mt-4 text-white text-center px-4 py-1 
              rounded-lg font-bold">
                Upload image</button>
            </div>

            <div className="p-4">
              <label htmlFor="Name" className="">Name:</label>
              <input type="text" className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly />
            </div>
            <div className="p-4">
              <label htmlFor="Email" className="">Email:</label>
              <input type="text" className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly />
            </div>
            <div className="p-4">
              <label htmlFor="Number" className="">Phone:</label>
              <input type="text" className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly />
            </div>
            <div className="p-4">
              <label htmlFor="pass" className=""> Psw:*****</label>
              <input type="text" className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly/>
            </div>
            <div className="p-4">
              <button className="deposit mx-auto mb-4 mt-4 text-white text-center px-4 py-1 
              rounded-lg font-bold">
                Edit Fields</button>
            </div>

          {/* // save Fields buttton */}
            <div className="hidden">
              <button className="deposit mx-auto mb-4 mt-4 text-white text-center px-4 py-1 
              rounded-lg font-bold">
                Save!</button>
            </div>
          </div>
         
          <div className="grid2 mt-9 main balance rounded-lg ml-4 overflow-y-scroll" style={{}}>
            <h1 className='font-bold text-xl text-white  p-2'>Recent Transactions </h1>
            <p className='text-white  pl-2'>Click To see Full Details....</p>
          <div>
            <div className="cursor-pointer relative flex gap-9 bg-white rounded-lg p-2 m-4 
            hover:p-1" style={{ transition: '0.5s' }}>
              <p className='flex gap-4'>2,000 NGN Withdrawal
                  <div className='w-2 h-7 rounded-lg bg-yellow-500 '></div></p>
               
                <p className='mx-auto invisible lg:visible'>Status: Pending</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-yellow-500 rounded-full'/>
            </div>

              <div className="cursor-pointer relative flex gap-9 bg-white rounded-lg p-2 m-4 hover:p-1" style={{ transition: '0.5s' }}>
              <p className='flex gap-4'>500 NGN MTN Purchase
                  <div className='w-2 h-7 rounded-lg bg-green-500 '></div></p>
                
                <p className='mx-auto invisible lg:visible'>Status: Succesfull</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-green-800 rounded-full' />
            </div>

              <div className="cursor-pointer relative shadow-2xl flex gap-9 bg-white rounded-lg p-2 m-4
               hover:p-1" style={{transition:'0.5s'}}>
                <p className='flex gap-4'>2Gb Data Airtel Purchase
                  <div className='w-2 h-7 rounded-lg bg-rose-500 '></div></p>

                <p className='mx-auto invisible lg:visible'>Status: Failed</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-rose-800 rounded-full' />
              </div>
              <div className="cursor-pointer relative shadow-2xl flex gap-9 bg-white rounded-lg p-2 m-4
               hover:p-1" style={{ transition: '0.5s' }}>
                <p className='flex gap-4'>2Gb Data Airtel Purchase
                  <div className='w-2 h-7 rounded-lg bg-rose-500 '></div></p>

                <p className='mx-auto invisible lg:visible'>Status: Failed</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-rose-800 rounded-full' />
              </div>
       
           
          </div>
         </div>
        </div>


      </div>
    </div> 
  )
}
