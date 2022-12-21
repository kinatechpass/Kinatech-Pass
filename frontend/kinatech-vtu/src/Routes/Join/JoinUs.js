import React, { useContext, useEffect, useState } from 'react'
import './Register.css'
import '../../index.css'
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { BsTelephoneFill, BsKeyboard } from "react-icons/bs"
import { Link, Navigate } from 'react-router-dom';

import shareContext from '../../Context/ShareContext';
import { useSignUpWithGoogle } from '../../hooks/useSignUpWithGoogle';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { useRegister } from '../../hooks/useRegister';

export default function JoinUs() {
  
  const [hasSignedupwithGoogle, sethasSignedupwithGoogle] = useState(false)
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpsw] = useState("")
  const [response, setresponse] = useState()
  const [errorr, seterrorr] = useState()
 const { signupwithgoogle, loading, error} = useSignUpWithGoogle()
  const { signup, errorMsg, Loading, failed} = useRegister()
  const handleEmailChange = (e) => {
    setemail(e.target.value)
  }
  const handlephoneChange = (e) => {
    setphone(e.target.value)
  }
  const handlepswChange = (e) => {
    setpsw(e.target.value)
  }

  const GoogleAuth = new firebase.auth.GoogleAuthProvider();
// const user = auth.currentUser;
const signInWithGoogle = async () => {
  await signupwithgoogle(GoogleAuth)
  const user = JSON.parse(localStorage.getItem('user'))
  const email = user.email
  const password = user.uid
  const phone = '0908765434'
  const response = await fetch('/api/v1/account/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, phone, password })

  })

  const json = await response.json()

  if (response.ok) {
    setresponse(json)
    return console.log(json)
  }
  // sethasSignedupwithGoogle(true)
}

 const createAccount = async (e) => {
  e.preventDefault()
   signup(email, phone, password)
   
 
 }
 
//  useEffect(()=>{
//    failed ? toast.error(JSON.parse(errorMsg.error), {
//      position: toast.POSITION.TOP_CENTER
//    }) : toast.success("Account created succesfully!", {
//      position: toast.POSITION.TOP_CENTER
//    });
//  }, [createAccount])
  return (
    <div className='cover ml-5 lg:ml-0 lg:text-lg'>
      <div className="Airtime-body">

      </div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold text-sm md:text-lg p-2 ml-2'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>

      <div className="mt-4 sm:ml-7 md:ml-0 content p-4 ml-5 lg:ml-0 lg:text-lg ">

        <div className="cont md:grid md:grid-cols-2 lg:grid-cols-3 divide-x bg-white border-gray-500">
          <div className="form text-center">
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>Sign UP!</h1>
            <span className='text-sm text-gray-800 p-2'>Join The Millions Of Users Today!</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">
                
                <div className="flex mx-9 rounded-lg">
                    <HiOutlineMail className='icon p-1 h-12 text-fuchsia-700' /> 
                 <input type="Email" value={email} onChange={handleEmailChange} className="email text-sm text-center h-12 block" name='Email' placeholder='Your Email...' />
                </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter Email"}</span>
                 
                  <div className="flex mt-4 mx-9 rounded-lg">
                    <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' /> 
                    <input type="number" value={phone} onChange={handlephoneChange} className="number text-sm text-center h-12 block" name='number' placeholder='Your Phone Number...' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Input Phone Number"}</span>
                
                   
                  <div className="flex mt-4 mx-9 rounded-lg ">
                    <HiLockClosed className='icon p-1 h-12 text-fuchsia-700' /> 
                    <input type="Password" value={password} onChange={handlepswChange} className="password text-sm text-center h-12 block" name='password' placeholder='Password' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter a Strong Password"}</span>

                  <div className="mt-7">
                    <small className='block block text-left ml-9 mt-2 cursor-pointer text-fuchsia-700'>Optional</small>
                  <div className="flex mx-9 rounded-lg">
                      <BsKeyboard className='icons p-1 h-12 text-fuchsia-700' />
                    <input type="Text" className="ref text-sm text-center h-12 block" name='ref' placeholder='Referal Code...' />
                  </div>
                </div>

             <div className="mt-4">
              <button onClick={createAccount} className='submit border border-fuchsia-700 rounded-lg p-2 w-10/12 hover:bg-fuchsia-700 hover:text-white cursor-pointer' >
                Sign Up</button>
              <small className='block text-left ml-9 mt-2 cursor-pointer text-fuchsia-700'>Forgot Password</small>

                    <small className='block ml-9 mt-2 mb-2 '>Already Have An Account? <span className='cursor-pointer text-fuchsia-700'>
                      <Link to="/Login">Sign In</Link> 
                    </span></small>
             </div>

                </div>
              </div>
            </form>
          </div>


          <div className="hidden md:block formImage lg:col-span-2">
            <img className='img h-full' src='./assets/people2.jpeg' style={{ width: '100%', objectFit: 'cover' }} />
         
          </div>
          <button onClick={signInWithGoogle} className='submit border border-fuchsia-700 rounded-lg 
          p-2 mx-auto mb-2 w-3/5 hover:bg-fuchsia-700 hover:text-white cursor-pointer' type='submit'>
            Sign Up With google
            </button>
        </div>

        {hasSignedupwithGoogle && <Navigate to={'/Account'} />  }
      </div>
    </div> 
  )
}
