// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Main from './Components/Main/Main';
import { HashRouter } from 'react-router-dom'
import { shareContext } from './Context/ShareContext'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
     const [loading, setLoading] = useState(true);
     const [Text, setText] = useState("Empty")
     const [provider, setProvider] = useState();
     const [googleEmail, setgoogleEmail] = useState()
     const [googleName, setgoogleName] = useState()
     const [googlePhonenumber, setgooglePhonenumber] = useState()
     const [googleId, setgoogleId] = useState()
 useEffect(()=>{
  setLoading(false);
 }, [])

  return loading ? (
    <div className='parent'>
        <div className="loadDiv ">
        <img className='loader animate-pulse' src='./assets/kinatech logo.png' alt='logo' />
          <h1 className='text-center font-bold animate-bounce'>loading...</h1>
        </div>
    </div>
  ) : (
    <div className="App">
      <HashRouter>
        <shareContext.Provider value={{Text, setText, provider, setProvider, googleEmail, 
        setgoogleEmail, googleName, setgoogleName, 
          googlePhonenumber, setgooglePhonenumber, googleId, setgoogleId}}>
          <Main />
          <ToastContainer />
        </shareContext.Provider>
    </HashRouter>

    </div>
  );
}


export default App;
