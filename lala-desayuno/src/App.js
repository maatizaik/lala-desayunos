import logo from './logo.svg';
import './App.css';
import {BrouserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar';

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <NavBar />    
        
      </header>
    </div>
    
  );
}

export default App;
