// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Main from './Components/Main/Main';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Main />
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
