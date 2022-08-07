import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    function MenuPage(props) {
      return 
        <Menu/>;
      
    }
    return ( 
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        {/* <BrowserRouter> */}
          <Routes>
            
            <Route path='/home' element={<Home/>}/>
            <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />}/>
            <Route path='*' element={<Home/>}/>
          </Routes>
        {/* </BrowserRouter> */}
        
        <Footer/>
      </div>
    );
  }
}

export default Main;