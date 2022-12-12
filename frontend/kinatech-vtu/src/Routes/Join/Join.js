import React from 'react'
import './Join.css'
import '../../index.css'

export default function Join() {
  return (
    <div className='cover'>
      <div className="hero bg-slate-500 sm:grid grid-cols-2 p-4 gap-4 " style={{ background: `url(${process.env.PUBLIC_URL + "/Assets/bg.jpg"}) no-repeat`,backgroundSize: 'cover' }}>
        <div className="imgDiv relative block md:hidden rotate-90">
          <img className='img absolute right-0' src='./Assets/world (2).png' />
        </div>

        <div>
        <span className='span'>
            <h1 className="flex text-3xl md:text-2xl lg:text-6xl ptext my-auto text-gray-200 ">Join The Millions Of Users Today!</h1>
            <p className='type mt-9 text-bold text-gray-100 text-center'>Dont Miss Out!, Over Millions Of People Are Earning Using Kinatech Pay</p>
         </span>
        </div>

        <div className="imgDiv relative hidden md:block rotate-180">
          <img className='img absolute left-0' src='./Assets/world (2).png' />
        </div>

      </div>
      <br /><br /><br /><br /><br />
    

      <h1 className="text-3xl md:text-2xl lg:text-4xl ptext my-auto text-center text-gray-800 ">Bye Bye To SAPA Today!</h1>

      <div className=" from mt-9 grid grid-cols-2">
         <div className="image mb-4">
          <img className='imgg ' src='./Assets/people2-removebg-preview.png' />
         </div>
        <div className="image">
          <h1>hi</h1>
        </div>
         
      </div>
    </div>
  )
}
