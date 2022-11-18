import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';


function App() {
  return (
    <Router>
    <div className="App">
      <Main />
    </div>
    </ Router>
  );
}

export default App;
