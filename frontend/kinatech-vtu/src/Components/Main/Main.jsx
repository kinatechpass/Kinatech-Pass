import '../../index.css'
import './Main.css'
// import Body from '../Body/Body';
import NavBar from '../Tailwind Navbar/NavBar';
import SideBar from '../Tailwind Sidebar/SideBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Airtime from '../../Routes/Aitime/Airtime';
import Data from '../../Routes/Data/Data';
import Elec from '../../Routes/Electricity/Elec';
import ElecForm from '../../Routes/Electricity/ElecForm';
import Tv from '../../Routes/Tv/Tv';
import DSTVForm from '../../Routes/Tv/DSTVForm';
import Gifts from '../../Routes/Gifts/Gifts';
import More from '../../Routes/More/More';
import JoinUs from '../../Routes/Join/JoinUs';
import Login from '../../Routes/Login/Login';
import Account from '../../Routes/Account/Account';
import Form from '../../Routes/Aitime/Form';
import MtnForm from '../../Routes/Data/MtnForm';
import GloForm from '../../Routes/Data/GloForm';
import AirtelForm from '../../Routes/Data/AirtelForm';
import MobileForm from '../../Routes/Data/MobileForm';
import GOTVForm from '../../Routes/Tv/GOTVForm';
import { useGoogleAuthContext } from '../../hooks/useGoogleAuthContext';
import Profile from '../../Routes/Profile/Profile';
import { useAuthContext } from '../../hooks/useAuthContext';
// import Tbody from '../Tailwind Body/Tbody';
function Main() {
  const { googleUser }  = useGoogleAuthContext()
  const { authUser } = useAuthContext()
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <div className='main_container'>
        <NavBar />
        <div className=''>
          <SideBar />
        </div>
  <Routes>
 

         
            <Route path='/' element={<Body/>} />
            <Route path='/Airtime' element={<Airtime />} />
            <Route path='/Data' element={<Data />} />
            <Route path='/Electricity' element={<Elec />} />
            <Route path='/Tv' element={<Tv />} />
             <Route path='/Tv/DSTVform' element={<DSTVForm />} />
          <Route path='/Tv/GOTVform' element={<GOTVForm />} />
            <Route path='/Gifts' element={<Gifts />} />
          <Route path='/Profile' element={<Profile />} />
            {<Route path='/joinUs' element={ !googleUser || !user || !authUser ? <JoinUs /> : <Navigate to={'/Account'}/>} />} 
          <Route path='/Login' element={!googleUser || !user || !authUser ? <Login /> : <Navigate to={'/Account'} />} />

          {<Route path='/joinUs' element={ !authUser ? <JoinUs /> : <Navigate to={'/Account'} />} />}
          <Route path='/Login' element={!googleUser || !user || !authUser ? <Login /> : <Navigate to={'/Account'} />} />

            <Route path='/More' element={<More />} />
          <Route path='/Account' element={googleUser || user || authUser ? <Account /> : <Navigate to={'/Login'} />} />
           <Route path='/ElctricityForm' element={<ElecForm />} />
            <Route path='/Airtime/Form' element={<Form />} />
            <Route path='/Data/Form' element={<MtnForm />} />
           <Route path='/Data/glo-Form' element={<GloForm />} />
          <Route path='/Data/9mobile-Form' element={<MobileForm />} />
          <Route path='/Data/airtel-Form' element={<AirtelForm />} />
   
   </Routes>
        <Footer />
      </div>
  
  </>
  );
}

export default Main;