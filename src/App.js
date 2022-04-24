import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

function App() {
  const [dishes, setDishes] = React.useState(DISHES);
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            
          </div>
        </Navbar>
        <Menu dishes={dishes}/>
      </div>
  );
}

export default App;
