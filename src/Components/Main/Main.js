import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './Main.css'
function Main() {
  return ( 
    <div className='main'>
      <Navbar />
      <Sidebar />
    </div>
   );
}

export default Main;