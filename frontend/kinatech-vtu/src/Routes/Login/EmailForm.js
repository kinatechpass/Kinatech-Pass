import React from 'react'
import './Login.css'
import { HiOutlineMail } from "react-icons/hi";
export default function 
({email, handleEmailChange }) {
  
  return (
    <div>
      <div className="flex mt-4 mx-9 rounded-lg">
        <HiOutlineMail className='icon p-1 h-12 text-fuchsia-700' />
        <input type="text" value={email} onChange={handleEmailChange} className="email text-sm text-center h-12 block" name='Email' placeholder='Your Email...' />
      </div>
      <span className="hint text-rose-500 text-sm">{"Pls Enter Email"}</span>
       
       
    </div>
  )
}
