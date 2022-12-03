import React from 'react'
import './Account.css'
import { BsWallet } from "react-icons/bs";
export default function Account() {
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

      <div className="Account gap-4 mt-9 sm:grid grid-cols-2 md:grid-cols-3">
        <div className="main balance mt-7 m-auto sm:ml-0 rounded-2xl">
          <div className="flex">
            <div className="m-4 p-4 bg-fuchsia-500 rounded-full">
              <BsWallet className='text-5xl text-white' />
            </div>
            <div className="mt-7 p-2 text-fuchsia-500 font-bold">
              <p>LifeTime Earnings</p>
              <p className='text-white text-xl font-light font-sans'>0.00 NGN</p>
            </div>
          </div>
          <p className='text-white text-center'>Balances</p>
          <div className="flex"></div>
        </div>

        <div className="main bg-white mt-7 m-auto  rounded-2xl">
          <div className="flex">
            <div className="m-4 p-4 bg-fuchsia-800 rounded-full">
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
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-2 ml-4 lg:grid-cols-3">
          <div className='m-4'>
            <small className='block'>Pay With Bank Transfer</small>
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
           

          <div className="block lg:hidden">
            <small className='text-center mx-auto'>Add Funds</small>

            <div className="grid grid-cols-2 ml-2 mt-4">

              <small className='text-center'><BsWallet className='mx-auto' />Bank Transfer</small>
              <small className='text-center'><BsWallet className='mx-auto' />Pay With card</small>
              <small className='text-center mt-4'><BsWallet className='mx-auto' />Pay With Eth</small>
            </div>
          </div>
           

          <div className="flex"></div>

        </div>
         

        <div className="main bg-white mt-7 m-auto rounded-2xl">
          <div className="flex">
            <div className="m-4 p-4 bg-fuchsia-800 rounded-full">
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


        


        <div className="main bg-white mt-7 m-auto rounded-2xl">
          <div className="flex">
            <div className="m-4 p-4 bg-fuchsia-800 rounded-full">
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
