// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Main from './Components/Main/Main';
import { HashRouter } from 'react-router-dom'
import { shareContext } from './Context/ShareContext'
import { useState } from 'react';

function App() {
     const [Text, setText] = useState("Empty")
  return (
    <div className="App">
      <HashRouter>
        <shareContext.Provider value={{Text, setText}}>
          <Main />
        </shareContext.Provider>
    </HashRouter>
      {/* <Router>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/Join'>
              <NavBar />
              <Join />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}


export default App;
