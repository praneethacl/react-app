import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { BrowserRouter ,Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
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
    const dishProp = this.state.dishes.filter((dish) => dish.featured)[0];
    const leaderProp = this.state.leaders.filter((leader) => leader.featured)[0];
    const promotionProp = this.state.promotions.filter((promo) => promo.featured)[0];
    
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    // const dishForDishDetail = this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]
    // const commentForDishDetail = this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))
    
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
            
            <Route path='/home' element={<Home 
              dish= {dishProp}
              promotion={promotionProp}
              leader={leaderProp}
            />}/>
            <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />}/>
            <Route path="/menu/:dishId" element={<DishDetail dishes = {this.state.dishes} comments = {this.state.comments}/>}/>
            <Route exact path="/contactus" element={<Contact/>} />
            <Route path='*' element={<Navigate to="/home" replace />}/>
            {/* // <Redirect to="/home"/> */}
          </Routes>
        {/* </BrowserRouter> */}
        
        <Footer/>
      </div>
    );
  }
}

export default Main;