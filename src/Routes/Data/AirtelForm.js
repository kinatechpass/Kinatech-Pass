import React, { useContext, useRef, useState } from 'react'
import '../../index.css'
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs"
import { BsFillHddNetworkFill } from "react-icons/bs"
import { TbCurrencyNaira } from "react-icons/tb"
import { Link } from 'react-router-dom';
import { AirtelOptions } from './options.js'
import { usePaystackPayment } from 'react-paystack';

export default function MtnForm() {
  // const AirtelIdRef = useRef()
  // const AirtelPhoneRef = useRef()
  // const AirtelAmountRef = useRef()
  // // const referalRef = useRef()

  const [AirtelValue, setAirtelValue] = useState("")
  const [amount, setAmount] = useState("")

  const handleChange = (e) => {
    setAirtelValue(e.target.value);
    const selectedIndex = e.target.options.selectedIndex;
    setAmount(e.target.options[selectedIndex].getAttribute('data-key'))

  }

  const [phone, setphone] = useState()
  const [number, setnumber] = useState()

  //handlers
  const handlePhoneInputChange = (e) => {
    setphone(e.target.value)
  }
  const handleNumberInputChange = (e) => {
    setnumber(e.target.value)
  }

  //config
  const config = {
    reference: (new Date()).getTime(),
    email: "kinatechinnovativelimited@gmail.com",
    amount: amount * 100,
    publicKey: 'pk_test_80f9a1b1ddbd716bf42b6371303477950b3f93cf',
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  //paystack props
  // const componentProps = {
  //   ...config,
  //   text: 'PayNow',
  //   onSuccess: (reference) => handlePaystackSuccessAction(reference),
  //   onClose: handlePaystackCloseAction,
  // };
  const initializePayment = usePaystackPayment(config);

  const pay = (e) => {
    e.preventDefault()
    initializePayment(handlePaystackSuccessAction, handlePaystackCloseAction)
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
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>DATA VTU</h1>
            <span className='text-sm text-gray-800 p-2'>Get Data At Cheapest Prices</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>NetWork _Id </label>
                    <div className="flex ">

                      <BsFillHddNetworkFill className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" className="number text-sm text-center h-12 block" name='_Id' value={'airtel'} />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Select Data bundles </label>
                    <div className="flex ">

                      <BsFillHddNetworkFill className='icons p-1 h-12 text-fuchsia-700' />
                      <select value={AirtelValue} onChange={handleChange} className="number text-sm text-center h-12 block">
                        {AirtelOptions.map(AirtelOption => (
                          <option value={AirtelOption.value} data-key={AirtelOption.price}> {AirtelOption.label} </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Phone Number </label>
                    <div className="flex ">

                      <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" value={phone} onChange={handlePhoneInputChange} className="number text-sm text-center h-12 block" name='number' placeholder='Phone Number' />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Amount </label>
                    <div className="flex ">

                      <TbCurrencyNaira className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text"  className="number text-sm text-center h-12 block" name='amount' value={amount} />
                    </div>
                  </div>




                  <div className="mt-4">
                    <button className='submit border border-fuchsia-700 rounded-lg p-2 w-10/12 hover:bg-fuchsia-700 hover:text-white cursor-pointer' type='submit' onClick={pay}>Pay Now!</button>

                    <small className='block ml-9 mt-2 mb-2 '>Not Redirected? <span className='cursor-pointer text-fuchsia-700'>
                      <Link>Click Here!</Link>
                    </span></small>

                  </div>

                </div>
              </div>
            </form>
          </div>


          <div className=" hidden md:block formImage lg:col-span-2">
            <img className='img h-full' src='./assets/multichannel.jpeg' style={{width:'100%', objectFit:'cover'}}/>
          </div>
        </div>


      </div>
    </div>
  )
}
