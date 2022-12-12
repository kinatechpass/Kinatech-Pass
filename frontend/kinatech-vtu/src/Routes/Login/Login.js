import React, { useState } from 'react'
import './Login.css'
import '../../index.css'
import PhoneForm from './phoneForm';
import EmailForm from './EmailForm';
import { HiLockClosed } from "react-icons/hi";
import { Link } from 'react-router-dom';


export default function Login() {
  const [loginToggle, setloginToggle] = useState(true) 
  const phonetext = "Phone Number"
  const emailText = "Email"

  const toggle = () => {
     setloginToggle(!loginToggle)

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

        <div className="cont md:grid md:grid-cols-2 lg:grid-cols-3 divide-x bg-white border-gray-500">
          <div className="form text-center">
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>Welcome!</h1>
            <span className='text-sm text-gray-800 p-2'> Continue To Sign In</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">

                    <div className='cursor-pointer hover:text-gray-500 font-sans text-sm text-purple-500' onClick={toggle}> Login With { loginToggle ? phonetext : emailText } 
                    </div>

            
                  {loginToggle ? <EmailForm /> : <PhoneForm /> }  

                  


                  <div className="flex mt-4 mx-9 rounded-lg ">
                    <HiLockClosed className='icon p-1 h-12 text-fuchsia-700' />
                    <input type="Password" className="password text-sm text-center h-12 block" name='psw' placeholder='Password' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter a Strong Password"}</span>


                  <div className="mt-4">
                    <button className='submit border border-fuchsia-700 rounded-lg p-2 w-10/12 hover:bg-fuchsia-700 hover:text-white cursor-pointer' type='submit'>Sign In</button>
                    <small className='block text-left ml-9 mt-2 cursor-pointer text-fuchsia-700'>Forgot Password</small>

                    <small className='block ml-9 mt-2 '>Dont Have An Account? <span className='cursor-pointer text-fuchsia-700'>
                       <Link to="/joinUs">Sign Up</Link> 
                    </span></small>
                  </div>

                </div>
              </div>
            </form>
          </div>


          <div className="hidden md:block formImage lg:col-span-2">
            <img className='img' src='./assets/Login.jpg' style={{ width: '100%', objectFit: 'cover' }} />
          </div>
        </div>


      </div>
    </div> 
  )
}

