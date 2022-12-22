import React, { useEffect, useState } from 'react'
import { BsCheck, BsPerson, BsSdCard } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Profile() {
    const [image, setimage] = useState()
    const [name, setname] = useState()
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [psw, setpsw] = useState("")
  const [IsEmailVerified, setIsEmailVerified] = useState()
    const { authUser } = useAuthContext()

    const handleChange = (e) => {
  console.log(e.target.files)
    setimage(URL.createObjectURL(e.target.files[0]))
  }
  const token = authUser.token
  useEffect(()=>{
    const getName = async () => {
      const response = await fetch('http://localhost:4000/api/v1/profile/', {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        }
      })

      const json = await response.json()
      const parsejson = json.userId.Email
      const parseNumber = json.userId.Phone
      const parsePsw = json.userId.Password
      const vrfyEmail = json.userId.verifiedEmail
      if (response.ok) {
        setname(parsejson.split("@")[0])
        setemail(parsejson)
        setphone(parseNumber)
        setpsw(parsePsw)
        setIsEmailVerified(vrfyEmail)
      }
      if (!response.ok) {
        alert("some error occured!")
      }
    }
    getName()
  }, [])
  return (
    <div className='cover'>
      <div className="Airtime-body">
        <h1 className='mt-4 text-3xl font-bold'>Welcome! {name} </h1>
        <p>Edit Profile!</p>
      </div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold ml-2 lg:text-lg p-2'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>
 
      <div className="mt-4 content p-4  ">
        <h1 className='font-bold text-xl text-fuchsia-500 p-2 ml-2 lg:ml-0 lg:text-lg'>Welcome To Your Profile </h1>
        <span className={`text-sm text-gray-800 p-2 ml-2 lg:ml-0 lg:text-lg ${IsEmailVerified} ? text-green-500 : text-rose-500`}>{IsEmailVerified ? 'Home Of Earning!' : 'Pls Check Inbox and Verify Your Email!'}</span>

        <div className="md:grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg flex flex-col justify-center items-center ml-6">
            <div className="pic border border-lg mt-9 rounded-full" style={{aspectRatio:'1/1', width:'30%'}}>
             <img src={image || '/assets/user.png'} className="rounded-full" style={{aspectRatio:'1/1'}} />
            </div>
            <div className="">
              {/* <button className="deposit mx-auto mb-4 mt-4 text-white text-center px-4 py-1 
              rounded-lg font-bold" >
                Upload image
                <input type="file" className='deposit' />
                </button> */}
              {/* <label className="m-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
              <input className="cursor-pointer m-4 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer 
              bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help" id="file_input" type="file" style={{width:'90%'}} onChange={handleChange} />
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}

              <div class="flex items-center justify-center w-full mt-4">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" onChange={handleChange} />
                </label>
              </div> 

            </div>
           <div className='bg-gray-500 mt-4' style={{width:'90%', height:'0.5px'}}></div>
            <div className="p-4 lg:p-1 mt-4">
              <label htmlFor="Name" className="">Name:</label>
              <input type="text" value={name} className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly />
            </div>
            <div className="p-4 lg:p-1">
              <label htmlFor="Email" className="">Email:</label>
              <input type="text" value={email} className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly />
            </div>
            <div className="p-4 lg:p-1">
              <label htmlFor="Number"  className="">Phone:</label>
              <input type="text" value={phone} className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly />
            </div>
            <div className="p-4 lg:p-1">
              <label htmlFor="pass" className=""> Psw:*****</label>
              <input type="text" value={'**********'} className="mb-4 ml-1" style={{ border: '1.5px solid purple' }} readOnly/>
            </div>

           
            <div className="p-4 lg:p-1">
              <button className="deposit mx-auto mb-4 mt-4 text-white text-center px-4 py-1 
              rounded-lg font-bold">
                Edit Fields</button>
            </div>

          {/* // save Fields buttton */}
            <div className="hidden">
              <button className="deposit mx-auto mb-4 mt-4 text-white text-center px-4 py-1 
              rounded-lg font-bold">
                Save!</button>
            </div>
          </div>
         
          <div className="grid2 mt-9 main balance rounded-lg ml-4 overflow-y-scroll" style={{}}>
            <h1 className='font-bold text-xl text-white  p-2'>Recent Transactions </h1>
            <p className='text-white  pl-2'>Click To see Full Details....</p>
          <div>
            <div className="cursor-pointer relative flex gap-9 bg-white rounded-lg p-2 m-4 
            hover:p-1" style={{ transition: '0.5s' }}>
              <p className='flex gap-4'>2,000 NGN Withdrawal
                  <div className='w-2 h-7 rounded-lg bg-yellow-500 '></div></p>
               
                <p className='mx-auto invisible lg:visible'>Status: Pending</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-yellow-500 rounded-full'/>
            </div>

              <div className="cursor-pointer relative flex gap-9 bg-white rounded-lg p-2 m-4 hover:p-1" style={{ transition: '0.5s' }}>
              <p className='flex gap-4'>500 NGN MTN Purchase
                  <div className='w-2 h-7 rounded-lg bg-green-500 '></div></p>
                
                <p className='mx-auto invisible lg:visible'>Status: Succesfull</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-green-800 rounded-full' />
            </div>

              <div className="cursor-pointer relative shadow-2xl flex gap-9 bg-white rounded-lg p-2 m-4
               hover:p-1" style={{transition:'0.5s'}}>
                <p className='flex gap-4'>2Gb Data Airtel Purchase
                  <div className='w-2 h-7 rounded-lg bg-rose-500 '></div></p>

                <p className='mx-auto invisible lg:visible'>Status: Failed</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-rose-800 rounded-full' />
              </div>
              <div className="cursor-pointer relative shadow-2xl flex gap-9 bg-white rounded-lg p-2 m-4
               hover:p-1" style={{ transition: '0.5s' }}>
                <p className='flex gap-4'>2Gb Data Airtel Purchase
                  <div className='w-2 h-7 rounded-lg bg-rose-500 '></div></p>

                <p className='mx-auto invisible lg:visible'>Status: Failed</p>
                <BsCheck className='absolute right-0 mr-4 text-3xl font-bold text-white bg-rose-800 rounded-full' />
              </div>
       
           
          </div>
         </div>
        </div>


      </div>
    </div> 
  )
}
