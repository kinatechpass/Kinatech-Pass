import React from 'react'
import './Login.css'

import { BsTelephoneFill } from "react-icons/bs"

export default function () {
  return (
    <div>
      <div className="flex mt-4 mx-9 rounded-lg">
        <BsTelephoneFill className='icons p-1 h-12 text-fuchsia-700' />
        <input type="number" className="number text-sm text-center h-12 block" name='Email' placeholder='Your Phone Number...' />
      </div>
      <span className="hint text-rose-500 text-sm">{"Pls Input Phone Number"}</span>
      

      
    </div>
  )
}
