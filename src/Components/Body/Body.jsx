import './Body.css'
import '../../index.css'
import { FaQuoteLeft } from "react-icons/fa";
import { MdFormatQuote } from "react-icons/md";
import { IoMdHeadset } from "react-icons/io";
function Body() {

  return ( 
    <div className='cover'>
      <div className='body '>
        <div className='md:grid grid-cols-2'>
        <div className="hero md:block justify-center ">

          <div className=" inline-block md:hidden joinImage w-full">
            <img className='w-full scale-100 sm:scale-100 lg:scale-100' src='./assets/logo.png' />
            
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
          <img className='w-full scale-100 sm:scale-100 lg:scale-100'  src='./assets/logo.png'/>
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

          <div className="packages md:grid grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer" >
            <div className='text-center airtime hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md '>
          <h1 className='font-bold text-sm text-center text-gray-800 p-4 '>Buy Phone Airtime</h1>
              <p className='text-gray-500 text-sm p-2'>MTN VTU</p>
              <p className='text-gray-500 text-sm p-2'>GLO VTU</p>
              <p className='text-gray-500 text-sm p-2'>AIRTEL VTU</p>
              <p className='text-gray-500 text-sm p-2'>9 MOBILE VTU</p>
            
            <div className='btnDiv mt-4'>
              <button className='btn bg-rose-500 text-white p-1 rounded-lg'>GET Started!</button>
            </div>
        </div>

            <div className='airtime hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 text-center shadow-2xl rounded-md'>
              <h1 className='font-bold text-center text-gray-800 p-4'>Buy Internet Data</h1>
              <p className='text-gray-500 text-sm p-2'>MTN DATA</p>
              <p className='text-gray-500 text-sm p-2'>GLO DATA</p>
              <p className='text-gray-500 text-sm p-2'>AIRTEL DATA</p>
              <p className='text-gray-500 text-sm p-2'>9 MOBILE DATA</p>

              <div className='btnDiv mt-4'>
                <button className='btn bg-rose-500 text-white p-1 rounded-lg'>GET Started!</button>
              </div>
            </div>

            <div className='airtime relative hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 text-center shadow-2xl rounded-md'>
              <h1 className='font-bold text-sm text-center text-gray-800 p-4'>Pay Tv Subscription</h1>
              <p className='text-gray-500 text-sm p-2'>DSTV SUB</p>
              <p className='text-gray-500 text-sm p-2'>GOTV SUB</p>
              <div className='btnDiv3 mt-4 '>
                <button className='btn bg-rose-500 text-white p-1 rounded-lg'>GET Started!</button>
              </div>
            </div>

            <div className='airtime text-center hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md'>
              <h1 className='font-bold text-sm text-center text-gray-800 p-4'>Pay Electricity Bills</h1>
              <p className='text-gray-500 text-sm p-2'>AEDC</p>
              <p className='text-gray-500 text-sm p-2'>PEHD</p>
              <p className='text-gray-500 text-sm p-2'>IKEDC</p>
              <p className='text-gray-500 text-sm p-2'>KAEDCO</p>
              <div className='btnDiv mt-4'>
                <button className='btn bg-rose-500 text-white p-1 rounded-lg'>GET Started!</button>
              </div>
            </div>

            <div className='airtime hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 text-center shadow-2xl rounded-md'>
              <h1 className='font-bold text-center text-gray-800 p-4'>Buy Gifts Cards</h1>
              <p className='text-gray-500 text-sm p-2'>FREE FIRE</p>
              <p className='text-gray-500 text-sm p-2'>I TUNEZ GIFT CARD</p>
              <p className='text-gray-500 text-sm p-2'>PUBG MOBILE</p>
              <p className='text-gray-500 text-sm p-2'>COD M</p>
              <div className='btnDiv mt-4'>
                <button className='btn bg-rose-500 text-white p-1 rounded-lg'>GET Started!</button>
              </div>
            </div>
        
            
      </div>
          <div className='mx-auto text-center btnDiv mt-9'>
            <button className='bg-gray-500 text-white p-1 rounded-lg'>GET To Know More..</button>
          </div>
      {/* End of packages */}
 <h1 className='p-4 mt-9 headerText servicess text-xl lg:text-3xl lg:text-center font-bold '>Start Earning in just  <span className='service'>3 Easy Steps</span></h1>

    {/* steps start here! */}

      <div className=" steps mt-9">

            <div className="mx-auto md:grid grid-cols-2 gap-20 mt-9">

              <div className='hover:shadow-xl shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md'>
                <div className=' login step2 grid text-center '><span>1</span></div>
                <div className='text text-center p-2 text-purple-500'>Get Started By Creating A Wallet!</div>
                <p className='hidden lg:block text-sm text-gray-500 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iusto vitae laboriosam inventore architecto, odio atque placeat? Pariatur, accusamus quo!</p>

                <div className='mx-auto text-center btnDiv mt-4'>
                  <button className='hover:bg-gray-500 bg-purple-500 text-white p-1 rounded-lg'>Create Wallet Now</button>
                </div>

                <div className="md:hidden block img hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md ">
                  <img className='p-2' src='./assets/3d.png' />
                </div>
              </div>

              <div className="hidden md:block img hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md ">
                <img className='p-2' src='./assets/3d.png' />
              </div>
            </div>

    {/* End of Step 1 */}
            <div className="mx-auto md:grid grid-cols-2 gap-20 mt-9
           ">
              <div className="img ">
                <img src='./assets/approve.png' />
              </div>
              
              <div className=''>
                <div className='step2 login '>2</div>
                <div className='text p-2 text-purple-500'>Deposit Into Your Wallet, And Wait to be Approved</div>
                <p className='hidden lg:block text-sm text-gray-500 text-left m-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iusto vitae laboriosam inventore architecto, odio atque placeat? Pariatur, accusamus quo!</p>

                <div className='mx-auto text-center btnDiv mt-4'>
                  <button className='hover:bg-gray-500 bg-purple-500 text-white p-1 rounded-lg'>Add Funds.</button>
                </div> 

              </div>

           
            </div>
          {/* end of step 2 */}

            <div className="mx-auto md:grid grid-cols-2 gap-20 mt-9">

            <div className='hover:shadow-xl shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md'>
              <div className=' login step2 grid text-center '><span>3</span></div>
                <div className='text text-center p-2 text-purple-500'>Start Referring And Start Earning with KinaTech VTU</div>
                <p className='hidden lg:block text-sm text-gray-500 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iusto vitae laboriosam inventore architecto, odio atque placeat? Pariatur, accusamus quo!</p>

                <div className='mx-auto text-center btnDiv mt-4'>
                  <button className='hover:bg-gray-500 bg-purple-500 text-white p-1 rounded-lg'>Get  Referral Link</button>
                </div>

                <div className="md:hidden block img hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md ">
                  <img className='p-2' src='./assets/logo.png' />
                </div>
              </div>

              <div className="hidden md:block img hover:shadow-xl  shadow-purple-300 hover:shadow-purple-100 shadow-2xl rounded-md ">
                <img className='p-2' src='./assets/logo.png' />
              </div>
            </div>

      </div>
    {/* End of Steps section  */}

        </div>


      <div className="whyUS">
          <h1 className='p-4 mt-9 headerText servicess text-xl lg:text-3xl lg:text-center font-bold '>Why KinaTech  <span className='service'>VTU</span></h1>

          <p className=' lg:text-center'>   With KinaTech VTU, you can perform quick transactions anytime and anywhere using any device.</p>

          <hr className='mt-4' />
       <div className="lgQuote mt-4 lg:grid grid-cols-3 gap-9 mt-9">
            <div className='md:hidden col-span-2 mt-9'>

              <p className='hugeText text-xl lg:text-6xl font-bold text-left'> <span className='lg:text-6xl font-bold inline-block text-cyan-500'><FaQuoteLeft /></span>  This is The single most mind-blowing application of VTU Services I’ve ever seen.</p>

              <h5 className="mt-11 text-sm text-gray-500">Mr Samuel M. Odekina // C.O & Founder, KinaTech Innovative</h5>
            </div>
         <hr className='md:hidden mt-4'/>
        <div>
              <IoMdHeadset className='text-xl mt-4'/>
              <h1 className="font-bold mt-4 mb-4 text-xl font-serig text-cyan-500">Excellent Customer Support</h1>
              <p className='text-justify'>
                Our well trained customer support agents are always available 24/7 to help you resolve any issues. We provide you with multiple ways to reach us and get fast help.
              </p>
        </div>
        
        <div className='hidden md:block col-span-2 mt-9'>
         
              <p className='hugeText text-xl lg:text-6xl font-bold text-left'> <span className='lg:text-6xl font-bold inline-block text-cyan-500'><FaQuoteLeft /></span>  This is The single most mind-blowing application of VTU Services I’ve ever seen.</p>

              <h5 className="mt-11 text-sm text-gray-500">Mr Samuel M. Odekina // CO - Founder, KinaTech Innovative</h5>
       </div>
       </div>
          {/* <div className='lg:hidden mobile-card shadow-2xl rounded-md'>

            <div className="inline-block text p-4">
              <span className='pText text-sm ml-4 p-4 text-justify'>

                <div className="inline-block photo m-2 mt-2 rounded-full w-10 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>

                </div>
                <i className='i'>
                  With KinaTech VTU, you can perform quick transactions anytime and anywhere using any device.</i>

                <strong className='author block text-right'>Praise Mc connell</strong>
              </span>
            </div>
          </div> */}
          <div className="subTestimonials gap-9 md:grid grid-cols-3 mt-9 lg:mt-20">
            <div className="quote relative">
              <hr className='mt-2' />
              <p className='mt-4 text-gray-800 text-sm lg:text-xl text-left font-serif '> <span className='lg:text-xl inline-block text-cyan-500'><MdFormatQuote className='text-lg text-gray-500' /></span> KinaTech Vtu works shockingly well.I will never Use Any Other Vtu again..</p>

              <h5 className="mt-11 text-sm text-gray-500 lg:absolute bottom-0">Praise Mc connel / / Programmer, KinaTech Innovative</h5>
            </div>
            <div className="quote relative">
              <hr className='mt-2' />
              <p className='mt-4 text-gray-800 text-sm lg:text-lg text-left font-serif '> <span className='lg:text-xl inline-block text-cyan-500'><MdFormatQuote className='text-2xl text-gray-500' /></span> I was stunned when I had about this VTU, i thought is was crap until i just said lemme give it a try, and guess what? it changed my life. Thanks for this amazing Tech</p>

              <h5 className="mt-11 text-sm text-gray-500 lg:absolute bottom-0">Mr Bright Saawuan / / System Analyst, KinaTech Innovative</h5>
            </div>
            <div className="quote relative">
              <hr className='mt-2' />
              <p className='mt-4 text-gray-800 text-sm lg:text-lg text-left font-serif '> <span className='lg:text-xl inline-block text-cyan-500'><MdFormatQuote className='text-2xl text-gray-500' /></span>Paying with Difficulties Can be very Frustrating is just like navigating a foreign country with just a phrasebook. Using KinaTech VTUis like hiring your own paymnet Manager.</p>

              <h5 className="mt-11 text-sm text-gray-500 lg:absolute bottom-0">Emeka Sharon / / Forex Trader, INFINOX Limited</h5>
              <hr className='hidden lg:block mt-2' />
            </div>

          </div>
           
      </div>
      {/* End of Testimonials */}
          <hr className='mt-9'/>

        <h1 className='p-4 mt-9 headerText servicess text-xl lg:text-3xl lg:text-center font-bold '>So Why KinaTech  <span className='service'>VTU ?</span></h1>

        <h4 className="text-center font-bold text-lg text-rose-500"><i>Lets Take A Deep Dive On Our Services</i></h4>

      <div className="md:grid grid-cols-2 mt-11">
        
          <div className="">
            <img className='w-full scale-100 sm:scale-100 lg:scale-100' src='./assets/join.png' />
          </div>

          <div className="cards">
            <div className="">
              <div className='shadow-lg rounded-lg pt-2 bg-cyan-50'>
                <IoMdHeadset className='text-3xl mt-4 pt-2' />
                <h1 className="font-bold mt-4 p-2  text-xl font-serig text-cyan-500">Super Fast Delivery</h1>
                <p className='text-left md:text-justify p-2 text-gray-700'>
                  Enjoy prompt delivery of services purchased through KinaTEch VTU. Our promise to you is to deliver value for every transaction made on-time, every time.
                </p>
                </div>

              <div className='shadow-lg rounded-lg pt-2 bg-cyan-50 mt-4'>
                <IoMdHeadset className='text-3xl pt-2 mt-4' />
                <h1 className="font-bold mt-4 text-xl font-serig text-cyan-500 p-2">Safe, Secured Payment</h1>
                <p className='text-left md:text-justify text-gray-700 p-2'>
                  Payment on KinatTech VTU is fast and 100% secured. Enjoy seamless payment processes with zero glitches. Pay with wallet, bank transfer or card.
                </p>
              </div>
            </div>
          </div>
      </div>
      </div>
      {/* End of Hero Sections */}
     
    
    </div>
   );
}

export default Body;