import './Airtime.css'
import '../../index.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import shareContext from '../../Context/ShareContext';
function Airtime() {
   const {setText} = useContext(shareContext)
  
  const buyAirtel = () => {
   setText("airtel")
  }
  const buyMTN = () => {
    setText("mtn")
  }
  const buySmile = () => {
    setText("smile")
  }
  const buyGLO = () => {
    setText("glo")
  }
  const buyMobile = () => {
    setText("9mobile")
  }
  return ( 
  <div className='cover'>
 
      <div className="Airtime-body">

</div>
      <div className=" mt-4 ref-program bg-white rounded-lg p-4 text-fuchsia-500 flex gap-4">
        <h2 className='font-bold p-2 ml-2 lg:ml-0 lg:text-lg'>Join Our Refferal Program And Earn</h2>
        <div className='btnDiv'>
          <button className='btnn bg-rose-500 text-white px-4 py-1 rounded-lg font-bold'>Join Now!</button>
        </div>
      </div>

      <div className="mt-4 content p-4  bg-white ml-2 lg:ml-0 lg:text-lg">
        
        <h1 className='font-bold ml-2 lg:ml-0 lg:text-xl text-fuchsia-500 p-2'>Airtime Recharge</h1>
        <span className='text-sm text-gray-800 p-2 lg:ml-0 ' >Recharge your phone airtime using <br />the Kinatech Pay service</span>

    <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
    <Link to="/Airtime/Form">
      <div onClick={buyAirtel} className="airtel cursor-pointer hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4 scale-0.5' width={'70px'} src='./assets/Airtel.jpg'/>
        <div className=' mx-4'>
          <span className='font-bold hover:text-white text-gray-800'>Airtel Airtime</span>
          <small className='block font-sans' style={{fontSize:'12px'}}>Airtel airtime - Get instant Top up</small>
        </div> 
      </div>
</Link>

      <Link to="/Airtime/Form">
            <div onClick={buyMTN} className="mtn hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/MTN.jpg' />
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>MTN Airtime</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>MTN airtime - Get instant Top up</small>
            </div>


          </div>
        </Link>
          <Link to="/Airtime/Form">
            <div onClick={buyGLO} className="mobile  hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/GLO.jpg'/>
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>Glo Airtime</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>GLO airtime - Get instant Top up</small>
            </div>
          </div>
      </Link>
          <Link to="/Airtime/Form">
            <div onClick={buyMobile}  className="glo hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/mobile.jpg'/>
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>9Mobile Airtime</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>9Mobile - Get instant Top up</small>
            </div>
          </div>
      </Link>
       <Link to="/Airtime/Form">
          <div onClick={buySmile} className="smile hover:text-white flex border-sm mt-4 mb-4 p-4">
            <img className='image mt-4' width={'70px'} src='./assets/Smile.jpg' />
            <div className='mx-4'>
              <span className='font-bold text-gray-800'>Smile Airtime</span>
              <small className='block font-sans' style={{ fontSize: '12px' }}>Smile - Get instant Top up</small>
            </div>

          </div>
         </Link>
    </div>


  </div>

    </div> 
  );
}

export default Airtime;
