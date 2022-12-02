import '../../index.css'
import './Main.css'
// import Body from '../Body/Body';
import NavBar from '../Tailwind Navbar/NavBar';
import SideBar from '../Tailwind Sidebar/SideBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Airtime from '../../Routes/Aitime/Airtime';
import Data from '../../Routes/Data/Data';
import Elec from '../../Routes/Electricity/Elec';
import Tv from '../../Routes/Tv/Tv';
import Gifts from '../../Routes/Gifts/Gifts';
import More from '../../Routes/More/More';
import JoinUs from '../../Routes/Join/JoinUs';
import Login from '../../Routes/Login/Login';
// import Tbody from '../Tailwind Body/Tbody';
function Main() {
  return (
  <Router>
    <div className='main_container'>
     
        <Switch>

          <Route exact path='/'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Body />
          </Route>

          <Route path='/Airtime'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Airtime />
          </Route>

          <Route path='/Data'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Data />
          </Route>

          <Route path='/Electricity'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Elec />
          </Route>

          <Route path='/Tv'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Tv />
          </Route>
          <Route path='/Gifts'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Gifts />
          </Route>

          <Route path='/More'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <More/>
          </Route>

          <Route path='/joinUs'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <JoinUs/>
          </Route>

          <Route path='/Login'>
            <NavBar />
            <div className=''>
              <SideBar />
            </div>
            <Login />
          </Route>

        </Switch>
       <Footer />
    </div>
  </Router>
  );
}

export default Main;