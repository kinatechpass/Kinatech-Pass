import React, { useContext, useRef, useState } from 'react'
import './Register.css'
import '../../index.css'
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { BsTelephoneFill, BsKeyboard } from "react-icons/bs"
import { Link, Navigate } from 'react-router-dom';
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import shareContext from '../../Context/ShareContext';

export default function JoinUs() {
      const emailRef = useRef()
      const phoneRef = useRef()
      const pswRef = useRef()
      const referalRef = useRef()
  const [hasSignedupwithGoogle, sethasSignedupwithGoogle] = useState(false)
  
  const firebaseConfig = {
    apiKey: "AIzaSyAAuXn197IRidCsXp1gCnskDsOHPE1M644",
    authDomain: "kinatech-pay.firebaseapp.com",
    projectId: "kinatech-pay",
    storageBucket: "kinatech-pay.appspot.com",
    messagingSenderId: "200134492717",
    appId: "1:200134492717:web:2ca21b80e546f52840eea4",
    measurementId: "G-10LFF79L63"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);   

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const auth = getAuth();
const user = auth.currentUser;

  const { setgoogleEmail, setgoogleName, setgooglePhonenumber, setgoogleId } = useContext(shareContext)
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // alert(user.displayName)
    setgoogleEmail(user.email)
    setgoogleId(user.uid)
    setgoogleName(user.displayName)
    setgooglePhonenumber(user.phoneNumber)
  } else {
    // No user is signed in.
  }
   const signInWithGoogle = async () => {
     const GoogleAuth = new firebase.auth.GoogleAuthProvider();
     await firebase.auth().signInWithPopup(GoogleAuth);
      sethasSignedupwithGoogle(true)
      
    

   }
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // currentUser should be available now.
      console.log(user)
    } else {
      // No user logged in.
    }
  });
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
            <h1 className='font-bold text-xl text-fuchsia-500 p-2'>Sign UP!</h1>
            <span className='text-sm text-gray-800 p-2'>Join The Millions Of Users Today!</span>
            <form className=''>
              <div>
                <div className="inputs mt-4">
                
                <div className="flex mx-9 rounded-lg">
                    <HiOutlineMail className='icon p-1 h-12 text-fuchsia-700' /> 
                 <input type="Email" ref={emailRef} className="email text-sm text-center h-12 block" name='Email' placeholder='Your Email...' />
                </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter Email"}</span>
                 
                  <div className="flex mt-4 mx-9 rounded-lg">
                    <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' /> 
                    <input type="number" ref={phoneRef} className="number text-sm text-center h-12 block" name='number' placeholder='Your Phone Number...' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Input Phone Number"}</span>
                
                   
                  <div className="flex mt-4 mx-9 rounded-lg ">
                    <HiLockClosed className='icon p-1 h-12 text-fuchsia-700' /> 
                    <input type="Password" ref={pswRef} className="password text-sm text-center h-12 block" name='psw' placeholder='Password' />
                  </div>
                  <span className="hint text-rose-500 text-sm">{"Pls Enter a Strong Password"}</span>

                  <div className="mt-7">
                    <small className='block block text-left ml-9 mt-2 cursor-pointer text-fuchsia-700'>Optional</small>
                  <div className="flex mx-9 rounded-lg">
                      <BsKeyboard className='icons p-1 h-12 text-fuchsia-700' />
                    <input type="Text" ref={referalRef} className="ref text-sm text-center h-12 block" name='ref' placeholder='Referal Code...' />
                  </div>
                </div>

             <div className="mt-4">
              <button className='submit border border-fuchsia-700 rounded-lg p-2 w-10/12 hover:bg-fuchsia-700 hover:text-white cursor-pointer' >Sign Up</button>
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
            Sign in google
            </button>
        </div>

        {hasSignedupwithGoogle ? <Navigate to={'/Account'} /> : null}
      </div>
    </div> 
  )
}
