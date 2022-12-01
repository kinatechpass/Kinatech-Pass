import React from 'react'
import './Register.css'
import '../../index.css'
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs"

export default function JoinUs() {
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

      <div className="mt-4 content p-4  ">

        <div className="cont md:grid grid-cols-3 divide-x bg-white border-gray-500">
          <div className="form text-center">
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>Sign UP!</h1>
            <span className='text-sm text-gray-800 p-2'>Join The Millions Of Users Today!</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">
                
                <div className="flex mx-9 rounded-lg">
                    <HiOutlineMail className='icon p-1 h-12 text-fuchsia-700' /> 
                 <input type="Email" className="email text-sm text-center h-12 block" name='Email' placeholder='Your Email...' />
                </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter Email"}</span>
                 
                  <div className="flex mt-4 mx-9 rounded-lg">
                    <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' /> 
                    <input type="number" className="number text-sm text-center h-12 block" name='Email' placeholder='Your Phone Number...' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Input Phone Number"}</span>
                

                  <div className="flex mt-4 mx-9 rounded-lg ">
                    <HiLockClosed className='icon p-1 h-12 text-fuchsia-700' /> 
                    <input type="Password" className="password text-sm text-center h-12 block" name='psw' placeholder='Password' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter a Strong Password"}</span>
       
             <div className="mt-4">
              <button className='submit border border-fuchsia-700 rounded-lg p-2 w-10/12 hover:bg-fuchsia-700 hover:text-white cursor-pointer' type='submit'>Sign Up</button>
              <small className='block text-left ml-9 mt-2 cursor-pointer text-fuchsia-700'>Forgot Password</small>

                    <small className='block ml-9 mt-2 '>Already Have An Account? <span className='cursor-pointer text-fuchsia-700'> Sign In </span></small>
             </div>

                </div>
              </div>
            </form>
          </div>


          <div className="formImage col-span-2">
            <img className='img' src='./Assets/people2.jpeg'/>
          </div>
        </div>


      </div>
    </div> 
  )
}
