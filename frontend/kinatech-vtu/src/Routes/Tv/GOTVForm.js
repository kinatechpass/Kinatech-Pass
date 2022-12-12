import React, { useContext, useState } from 'react'
import '../../index.css'
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { BsTelephoneFill, BsSdCard } from "react-icons/bs"
import { BsFillHddNetworkFill } from "react-icons/bs"
import { CgKeyboard } from "react-icons/cg"
import { TbCurrencyNaira } from "react-icons/tb"
import { Link } from 'react-router-dom';
import { GOTVOptions } from './options.js'
import { usePaystackPayment } from 'react-paystack';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function GOTVForm() {

  const [GOTVValue, setGOTVValue] = useState("")
  const [amount, setAmount] = useState("")
  const [phone, setphone] = useState()
  const [id, setid] = useState()
  const [Snumber, setSnumber] = useState()

  const handleChange = (e) => {
    setGOTVValue(e.target.value);
    const selectedIndex = e.target.options.selectedIndex;
    setAmount(e.target.options[selectedIndex].getAttribute('data-key'))
    setid(e.target.value)
  }
  // const referalRef = useRef()

  const handleAmountInputChange = (e) => {
    e.preventDefault()
    setAmount(e.target.value)
  }

  const handleNumberInputChange = (e) => {
    e.preventDefault()
    setSnumber(e.target.value)
  }

  const handlePhoneInputChange = (e) => {
    setphone(e.target.value)
  }
  const handleIdInputChange = (e) => {
    setid(e.target.value)
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
    toast.error("Some Error Occured, Pls Try again!", {
      position: toast.POSITION.TOP_CENTER,

    });
  }
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
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>GOTV SUB</h1>
            <span className='text-sm text-gray-800 p-2'>Get 20% off servicefee When You Buy From Wallet.</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">

                  <div className='mt-4 mx-9 rounded-lg'>
                    <p className='text-sm font-bold mb-4'> Note: ₦39 Service Fee Apply for all charges</p>

                    <label className='text-sm font-sans' htmlFor='Phone Number'>Service _Id </label>
                    <div className="flex ">

                      <BsFillHddNetworkFill className='bg-purple-200 icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" className="bg-purple-200 number text-sm text-center h-12 block" name='_Id' value={'GOTV'} readOnly />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Select Package </label>
                    <div className="flex ">

                      <BsFillHddNetworkFill className='icons p-1 h-12 text-fuchsia-700' />
                      <select value={GOTVValue} onChange={handleChange} className="number text-sm text-center h-12 block w-10/12">
                        {GOTVOptions.map(GOTVOption => (
                          <option value={GOTVOption.value} data-key={GOTVOption.price}> {GOTVOption.label} </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Variation _Id </label>
                    <div className="flex ">

                      <BsSdCard className='bg-purple-200 icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" value={id} className="number text-sm text-center h-12 block bg-purple-200" name='number' placeholder='id' onChange={handleIdInputChange} readOnly />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Phone Number </label>
                    <div className="flex ">

                      <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" value={phone} className="number text-sm text-center h-12 block" name='number' placeholder='Phone Number' onChange={handlePhoneInputChange} />
                    </div>
                  </div>

                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>SmartCard Number </label>
                    <div className="flex ">

                      <CgKeyboard className='icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" className="number text-sm text-center h-12 block" name='amount' value={Snumber} onChange={handleNumberInputChange} />
                    </div>
                  </div>


                  <div className='mt-4 mx-9 rounded-lg'>
                    <label className='text-sm font-sans' htmlFor='Phone Number'>Amount </label>
                    <div className="flex ">

                      <TbCurrencyNaira className='bg-purple-200 icons p-1 h-12 text-fuchsia-700' />
                      <input type="text" className="bg-purple-200 number text-sm text-center h-12 block" name='amount' value={amount} onChange={handleAmountInputChange} readOnly />
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
            <img className='img h-full' src='./assets/design1.jpg' style={{ width: '100%', objectFit: 'contain' }} />
          </div>
        </div>


      </div>
    </div>
  )
}
