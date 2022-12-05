import React, { useContext, useRef, useState } from 'react'
import '../../index.css'
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs"
import { BsFillHddNetworkFill } from "react-icons/bs"
import { TbCurrencyNaira } from "react-icons/tb"
import { Link } from 'react-router-dom';
import { mtnOptions } from './options.js'

export default function MtnForm() {
  const [MtnValue, setMtnValue] = useState("")
  const [amount, setAmount] = useState("")

  const MtnIdRef = useRef()
  const MtnPhoneRef = useRef()
  const MtnAmountRef = useRef()

const handleChange = (e) => {
  setMtnValue(e.target.value);
  const selectedIndex = e.target.options.selectedIndex; 
  setAmount(e.target.options[selectedIndex].getAttribute('data-key'))

}
  return (
    <div className='cover '>
      <div className="Airtime-body">

      </div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold text-sm md:text-lg p-2 ml-2'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>

      <div className="mt-4 sm:ml-7 md:ml-0 content p-4  ">

        <div className="cont md:grid md:grid-cols-2 lg:grid-cols-3 divide-xborder-gray-500">
          <div className="form text-center">
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>MTN DATA VTU</h1>
            <span className='text-sm text-gray-800 p-2'>Get Data At Cheapest Prices</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>NetWork _Id </label>
                    <div className="flex ">

                      <BsFillHddNetworkFill className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" ref={MtnIdRef} className="number text-sm text-center h-12 block" name='_Id' value={'mtn'} />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Select Data bundles </label>
                    <div className="flex ">

                      <BsFillHddNetworkFill className='icons p-1 h-12 text-fuchsia-700' />
                      <select value={MtnValue} onChange={handleChange} className="number text-sm text-center h-12 block">
                       {mtnOptions.map(mtnOption => (
                         <option value={mtnOption.value} data-key={mtnOption.price}> {mtnOption.label} </option>
                       ))}
                      </select>
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Phone Number </label>
                    <div className="flex ">

                      <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" ref={MtnPhoneRef} className="number text-sm text-center h-12 block" name='number' placeholder='Phone Number' />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Amount </label>
                    <div className="flex ">

                      <TbCurrencyNaira className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" ref={MtnAmountRef} className="number text-sm text-center h-12 block" name='amount' value={amount} />
                    </div>
                  </div>




                  <div className="mt-4">
                    <button className='submit border border-fuchsia-700 rounded-lg p-2 w-10/12 hover:bg-fuchsia-700 hover:text-white cursor-pointer' type='submit'>Buy Now!</button>

                    <small className='block ml-9 mt-2 mb-2 '>Not Redirected? <span className='cursor-pointer text-fuchsia-700'>
                      <Link>Click Here! </Link>
                    </span></small>

                  </div>

                </div>
              </div>
            </form>
          </div>


          <div className=" hidden md:block formImage lg:col-span-2">
            <img className='img' src='./assets/multichannel.jpeg' />
          </div>
        </div>


      </div>
    </div>
  )
}
