// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Main from './Components/Main/Main';


function App() {
  return (
    <div className="App">
      <Main />

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
