import React, { useContext, useState } from 'react'
import './Elec.css'
import '../../index.css'
import shareContext from '../../Context/ShareContext'
import { Link } from 'react-router-dom'
export default function Elec() {
  const [select, setselect] = useState("")
  const { setProvider } = useContext(shareContext)

  const handleChange = (e) => {
    e.preventDefault()
    setselect(e.target.value)
  }
  const PayElectricityBill = () => {
    setProvider(select)
    localStorage.setItem("savedProvider", select)
  }
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

      <div className="mt-4 content p-4  bg-white">
        <h1 className='font-bold text-xl text-fuchsia-500 p-2'>NEPA Recharge</h1>
        <span className='text-sm text-gray-800 p-2'>Pay Your NEPA Bills Using Kinatech Pay Services</span>
        <div className='mt-4 mx-9 rounded-lg'>
          <label className='text-sm font-sans' htmlFor='Phone Number'>Select Elctricity Provider </label>
          <div className="flex ">

            
            <select value={select} onChange={handleChange}  className="number w-3/4 text-sm text-center h-12 block">
              <option value={''}>Select</option>
              <option value={'abuja-electric'}> Abuja Electricity Distribution Company (AEDC)</option>
              <option value={'eko-electric'}>Eko Electricity Distribution Company (EKEDC)</option>
              <option value={'ibadan-electric'}>Ibadan Electricity Distribution Company (IBEDC)</option>
              <option value={'jos-electric'}> Jos Electricity Distribution PLC (JEDplc)</option>
              <option value={'kaduna-electric'}>Kaduna Electricity Distribution Company (KAEDCO)</option>
              <option value={'ikeja-electric'}>Ikeja Electricity Distribution Company (KAEDCO)</option>
              <option value={'kano-electric'}>Kano Electricity Distribution Company (KEDCO)</option>
              <option value={'portharcourt-electric'}>Port Harcourt Electricity Distribution Company (PHED)</option>
            </select>
         
          </div>
          <div>
            <Link to='/ElctricityForm' > <button onClick={PayElectricityBill} className='block bg-fuchsia-800 p-1 rounded-lg text-white'>Continue</button>
          </Link>
          </div>
        </div>
        
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">

          <div className="phone hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/ikeja.jpg' />
            <div className='mx-4'>
              <span className='font-bold text-sm hover:text-white text-gray-800'>Ikeja Electric Payment - IKEDC </span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Prepaid And Postpaid IKEDC Payments</small>
            </div>


          </div>

          <div className="phone hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/Abuja.jpg'/>
            <div className='mx-4'>
              <span className='text-sm font-bold text-gray-800'>Abuja Electricity Distribution company - AEDC </span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Prepaid And Postpaid AEDC Payments</small>
            </div>


          </div>




 
{/* 
          <div className="phone hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./Assets/join.png' />
            <div className=''>
              <span className='font-bold text-gray-800'>Smile Airtime</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Smile - Get instant Top up</small>
            </div>


          </div> */}
        </div>


      </div>
    </div> 
  )
}
