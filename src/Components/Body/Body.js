import './Body.css'
import '../../index.css'


function Body() {

  return ( 
    <div className='cover'>
      <div className='body '>
        <div className='md:grid grid-cols-2'>
        <div className="hero md:block justify-center ">

          <div className=" inline-block md:hidden joinImage w-full">
            <img className='w-full scale-100 sm:scale-100 lg:scale-100' src='./assets/receipt.png' />
          </div>

          <h1 className="headerText font-bold text-3xl lg:text-6xl">Kinatech VTU</h1>
          <h4 className="headerSubText font-bold text-lg text-purple-500"><i>Make Easy Payments Today!</i></h4>

            <div className='p mt-4'>
            <p>Top up phone airtime or internet data. Pay electricity bills; renew TV subscriptions. Buy quality insurance covers, pay education bills, transfer funds and do more ... </p>
             </div>
          <div className='Intro text-gray-500 mt-4 '>
         
              <span className='hover:text-black cursor-pointer block lg:inline-block' >Buy Airtime 
              <span className='hidden lg:inline-block'>|</span>
              </span>

              <span className='hover:text-black cursor-pointer block lg:inline-block '>Buy Data <span className='hidden lg:inline-block'>|</span>
              </span>
         

         
              <span className='hover:text-black cursor-pointer block lg:inline-block '>Buy Gifts Cards <span className='hidden lg:inline-block'>|</span> 
              </span>

              <span className='hover:text-black cursor-pointer block lg:inline-block '>Pay Bills <span className='hidden lg:inline-block'>|</span>
              </span>
  

            <span className='hover:text-black cursor-pointer block lg:inline-block '>Check Waec</span>
          </div>
        </div>

        <div className="hidden md:block joinImage w-10/11 my-16 lg:my-9">
          <img className='w-full scale-100 sm:scale-100 lg:scale-100'  src='./assets/receipt.png'/>
        </div>
        </div>
        
        <div className="services my-20 ">
          <div className='span ml-auto'></div>
          <h1 className=' headerText servicess text-xl lg:text-3xl lg:text-center font-bold '>We Provide Awesome <span className='service'>Services</span></h1>

          <h3 className='hidden lg:block my-4 text-sm text-slate-800'>
            Certain things are hard, making payments shouldn't be one of them. Kinatech VTU helps you make payments
            for services you enjoy right from the comfort of your home or office. The experience of total convenience,
            fast service delivery and easy payment is just at your fingertips.
          </h3>

          <div className='lg:hidden mobile-card shadow-2xl rounded-md'>
           
            <div className="inline-block text p-4">
             <span className='pText text-sm ml-4 p-4 text-justify'>
              
                <div className="inline-block photo m-2 mt-2 rounded-full w-10 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>

                </div>
              <i className='i'> 
              Certain things are hard, making payments shouldn't be one of them. Kinatech VTU helps you make payments
              for services you enjoy right from the comfort of your home or office. The experience of total convenience,
              fast service delivery and easy payment is just at your fingertips.</i>
              
                 <strong className='author block text-right'>Praise Mc connell</strong>
              </span>
            </div>
          </div>
           {/* End of mobile card */}

          <div className="packages lg:grid grid-cols-5 gap-4 cursor-pointer" >
            <div className=' text-center airtime shadow-2xl rounded-md '>
          <h1 className='font-bold text-sm text-center text-gray-800 p-4 '>Buy Phone Airtime</h1>
              <p className='text-gray-500 text-sm p-2'>MTN VTU</p>
              <p className='text-gray-500 text-sm p-2'>GLO VTU</p>
              <p className='text-gray-500 text-sm p-2'>AIRTEL VTU</p>
              <p className='text-gray-500 text-sm p-2'>9 MOBILE VTU</p>
        </div>

            <div className='airtime shadow-2xl rounded-md'>
              <h1 className='font-bold text-center text-gray-800 p-4'>Buy Internet Data</h1>
            </div>

            <div className='airtime shadow-2xl rounded-md'>
              <h1 className='font-bold text-sm text-center text-gray-800 p-4'>Pay Tv Subscription</h1>
            </div>

            <div className='airtime shadow-2xl rounded-md'>
              <h1 className='font-bold text-sm text-center text-gray-800 p-4'>Pay Electricity Bills</h1>
            </div>

            <div className='airtime shadow-2xl rounded-md'>
              <h1 className='font-bold text-center text-gray-800 p-4'>Buy Gifts Cards</h1>
            </div>
      </div>
      {/* End of packages */}
        </div>
      </div>
      {/* End of Hero Sections */}
     
    
    </div>
   );
}

export default Body;