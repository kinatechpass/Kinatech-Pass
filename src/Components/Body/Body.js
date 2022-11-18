import './Body.css'
import '../../index.css'


function Body() {

  return ( 
    <div className='cover'>
      <div className='body md:grid grid-cols-2'>
        <div className="hero md:block justify-center ">
          <h1 className="headerText font-bold text-3xl lg:text-6xl">Kinatech VTU</h1>
          <h4 className="headerSubText font-bold text-lg text-purple-500"><i>Make Easy Payments Today!</i></h4>

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

        <div className="joinImage w-10/11 my-16 lg:my-9">
          <img className='w-full' src='./assets/approve.png'/>
        </div>
      </div>

    </div>
   );
}

export default Body;