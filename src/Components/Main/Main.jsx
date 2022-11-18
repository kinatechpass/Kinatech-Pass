import '../../index.css'
import './Main.css'
// import Body from '../Body/Body';
import NavBar from '../Tailwind Navbar/NavBar';
import SideBar from '../Tailwind Sidebar/SideBar';
import Body from '../Body/Body';
// import Tbody from '../Tailwind Body/Tbody';
function Main() {
  return (
    <div className='main_container'>
      
      <NavBar />

        <div className=''>
          <SideBar />
        </div>

        <Body />
        {/* <div className='content bg-blue-500 block '>
          <h1 className="pt-20">KinaTech VTU</h1>
          <br />
          <p className="p-6 ">Make easy Payments Today!</p>
          <h2>hi my name is praise</h2>
        </div> */}
    
    </div>
  );
}

export default Main;