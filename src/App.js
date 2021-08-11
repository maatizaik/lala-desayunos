import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Router } from 'react-router-dom';
import NavBar from './components/navBar';
import CardComponent from './components/CardComponent';
import ItemListContainer from './components/itemListContainer.js';
import ItemCount from './components/ItemCount';

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <NavBar/>    
          <ItemListContainer/>
        
      </header>

      <ItemCount stock ='5' initial ='1'/>
      
    </div>
    
  );
}

export default App;
