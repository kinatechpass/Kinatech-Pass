import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './Routes/Join/Join';
import NavBar from './Routes/Join/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/Join'>
            <NavBar />
            <Join/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
