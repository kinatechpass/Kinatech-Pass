import '../../index.css'
import './Main.css'
// import Body from '../Body/Body';
import NavBar from '../Tailwind Navbar/NavBar';
import SideBar from '../Tailwind Sidebar/SideBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Airtime from '../../Routes/Aitime/Airtime';
import Data from '../../Routes/Data/Data';
import Elec from '../../Routes/Electricity/Elec';
import Tv from '../../Routes/Tv/Tv';
import Gifts from '../../Routes/Gifts/Gifts';
import More from '../../Routes/More/More';
import JoinUs from '../../Routes/Join/JoinUs';
import Login from '../../Routes/Login/Login';
import Account from '../../Routes/Account/Account';
import Form from '../../Routes/Aitime/Form';

// import Tbody from '../Tailwind Body/Tbody';
function Main() {
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
            <Route path='/Gifts' element={<Gifts />} />
            <Route path='/joinUs' element={<JoinUs />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/More' element={<More />} />
            <Route path='/Account' element={<Account />} />
           <Route path='/Airtime/Form' element={<Form />} />

  
   </Routes>
        <Footer />
      </div>
  
  </>
  );
}

export default Main;