import React, { useContext } from 'react'
import './Account.css'
import { BsWallet } from "react-icons/bs";
import shareContext from '../../Context/ShareContext';
export default function Account() {
  const { googleName } = useContext(shareContext)
  return (
    <div className='cover'>
      <div className="Airtime-body">
        <h1 className='mt-4 text-3xl font-bold'>Welcome! {googleName} </h1>
        <p>Play Around with your dashboard and start Earning</p>
      </div>
      <div className=" ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold text-lg p-2'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>
     
      <div className="Account gap-4 mt-9 sm:grid grid-cols-2 md:grid-cols-3">
        <div className="main balance mt-7 m-auto sm:ml-0 rounded-2xl">
          <div className="flex">
            <div className="iconDiv m-4 p-4 bg-fuchsia-500 rounded-full">
              <BsWallet className='text-5xl text-white' />
            </div>
            <div className="mt-7 p-2 text-fuchsia-500 font-bold">
              <p>LifeTime Earnings</p>
              <p className='text-white text-xl font-light font-sans'>0.00 NGN</p>
            </div>
          </div>
          <p className='text-white ml-4 text-fuchsia-500 font-bold'>Earnings</p>
          <div className="flex gap-4">
            <div className="today">
              <p className='text-white text-md ml-4 font-bold font-sans'>0.00 
              <span className='ml-1' style={{fontSize:'xx-small'}}>NGN</span>
                </p>
              <small className='relative bottom-1 text-white ml-4 text-fuchsia-500 '>Today</small>
            </div>

            <div className="Last Week">
              <p className='text-white text-md ml-4 font-bold font-sans'>0.00
                <span className='ml-1' style={{ fontSize: 'xx-small' }}>NGN</span>
              </p>
              <small className='relative bottom-1 text-white ml-4 text-fuchsia-500 '>LastWeek</small>
            </div>

            <div className="block md:hidden lg:block Last Month">
              <p className='text-white text-md ml-4 font-bold font-sans'>0.00
                <span className='ml-1' style={{ fontSize: 'xx-small' }}>NGN</span>
              </p>
              <small className='relative bottom-1 text-white ml-4 text-fuchsia-500 '>LastMonth</small>
            </div>
          </div>
          
        </div>

        <div className="main bg-white mt-7 m-auto  rounded-2xl">
          <div className="flex">
            <div className="iconDiv m-4 p-4 bg-fuchsia-800 rounded-full">
              <BsWallet className='text-5xl text-white' />
            </div>
            <div className="mt-7 p-2 text-fuchsia-800 font-bold">
              <p>Referral Earnings</p>
              <p className='text-gray-800 text-xl font-light font-sans'>0.00 NGN</p>
            </div>
          </div>
          <p className='text-white text-center'>Balances</p>
          <div className="flex"></div>
        </div>

        <div className="main pay bg-white mt-7 m-auto rounded-2xl"> 
          <div className="flex ml-4">
            <div className="iconDiv m-4 p-4 bg-fuchsia-800 rounded-md">
              <BsWallet className='text-xl lg:text-5xl text-white' />
            </div>
            <div className="mt-7 p-2 text-fuchsia-700 font-bold">
              <p>Wallet balance</p>
              <p className='text-gray-800 text-xl font-light font-sans'>0.00 NGN</p>
            </div>
          </div>
        <div className="hidden xl:grid grid-cols-2 md:grid-cols-2 gap-2 ml-0 lg:grid-cols-3">
          <div className='m-4'>
            <small className='block'> Bank Transfer</small>
            <button className='deposit mt-1 text-white text-center px-4 py-1 rounded-lg lg:font-bold'>
            Deposit
            </button> 
          </div>

            <div className='m-4 relative'>
              <small className='block'>Pay With Card</small>
              <button className='deposit absolute bottom-0 mt-1 text-white text-center px-4 py-1 rounded-lg font-bold'>
                Deposit
              </button>
            </div>

            <div className='m-4 relative'>
              <small className='block'>Pay With Eth <b className='text-fuchsia-800'>(New)</b></small>
              <button className='deposit md:absolute bottom-0 mt-1 text-white text-center px-4 py-1 rounded-lg font-bold'>
                Deposit
              </button>
            </div>
        </div>
           

          <div className="block xl:hidden">
            <h2 className=' text-center mx-auto font-bold'>Add Funds</h2>

            <div className="grid grid-cols-2 ml-2 mt-4">

              <small className='text-center hover:text-gray-600 cursor-pointer'><BsWallet className='mx-auto' />Bank Transfer</small>
              <small className='text-center hover:text-gray-600 cursor-pointer'><BsWallet className='mx-auto' />Pay With card</small>
              <small className='text-center mt-4 hover:text-gray-600 cursor-pointer'><BsWallet className='mx-auto' />Pay With Eth</small>
            </div>
          </div>
           

          <div className="flex"></div>

        </div>
         
    {/* recent transactions */}
        <div className="main md:col-span-2 bg-white ml-4 md:ml-0 mt-7 m-auto rounded-2xl">
          <div className="flex">
            <div className="iconDiv m-4 p-4 bg-fuchsia-800 rounded-full">
              <BsWallet className='text-5xl text-white' />
            </div>
            <div className="mt-7 p-2 text-fuchsia-800 font-bold">
              <p>Recent Transactions</p>
            
            </div>
          </div>
        
          <div className="bg-purple-100 rounded-xl m-2 flex">
            <p className='text-sm p-1'>500 NGN Airtime Purchase, MTN  No: 080xxxxxx26, Amount Paid:480 NGN, Status:Succesfull</p> <p className='inline-block text-2xl text-rose-500 cursor-pointer'>&times;</p>
          </div>
          <div className="bg-purple-100 rounded-xl m-2 flex">
            <p className='text-sm p-1'>500 NGN Airtime Purchase, MTN  No: 080xxxxxx26, Amount Paid:480 NGN, Status:Succesfull</p> <p className='inline-block text-2xl text-rose-500 cursor-pointer'>&times;</p>
          </div>

             <p className='text-gray-800 text-center font-sans cursor-pointer hover:text-gray-500 '>View More...</p>
        </div>


        


        <div className="main bg-white mt-7 m-auto rounded-2xl">
          <div className="flex">
            <div className="iconDiv m-4 p-4 bg-fuchsia-800 rounded-full">
              <BsWallet className='text-5xl text-white' />
            </div>
            <div className="mt-7 p-2 text-fuchsia-700 font-bold">
              <p>Join Our Referal Program</p>
              <p className='text-gray-800 font-sans'>Start Earning!</p>
            </div>
          </div>
          <div className="main flex ml-9 sm:ml-0 justify-center">
            <div className='m-4'>
              <small className='block text-center'>Pay With Bank Transfer</small>
              <button className='deposit mt-1 text-white text-center px-4 py-1 rounded-lg font-bold'>
             Join Now
              </button>
            </div>


          </div>


        </div>
      </div>
    </div>
  )
}
