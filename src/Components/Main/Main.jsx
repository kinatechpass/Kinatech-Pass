import '../../index.css'
import './Main.css'
// import Body from '../Body/Body';
import NavBar from '../Tailwind Navbar/NavBar';
import SideBar from '../Tailwind Sidebar/SideBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Airtime from '../../Routes/Aitime/Airtime';
import Data from '../../Routes/Data/Data';
// import Tbody from '../Tailwind Body/Tbody';
function Main() {
  return (
  <Router>
    <div className='main_container'>
      <NavBar />
        <div className=''>
          <SideBar />
        </div>
        <Switch>
          <Route exact path='/'>
            <Body />
          </Route>
          <Route path='/Airtime'>
            <Airtime />
          </Route>
          <Route path='/Data'>
            <Data />
          </Route>
        </Switch>
       <Footer />
    </div>
  </Router>
  );
}

export default Main;