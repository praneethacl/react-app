import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route, Navigate} from 'react-router-dom';

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
    const dishProp = this.state.dishes.filter((dish) => dish.featured)[0];
    const leaderProp = this.state.leaders.filter((leader) => leader.featured)[0];
    const promotionProp = this.state.promotions.filter((promo) => promo.featured)[0];
    
    return ( 
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={<Home 
            dish = {dishProp}
            promotion = {promotionProp}
            leader = {leaderProp}
          />}/>
          <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />}/>
          <Route path="/menu/:dishId" element={<DishDetail dishes = {this.state.dishes} comments = {this.state.comments}/>}/>
          <Route exact path="/contactus" element={<Contact/>} />
          {/* TASK 1 */}
          {/* Using React router v4 is giving me a lot of errors so I had to use v6 */}
          {/* router v6 is very different from router v4, so you wont see REDIRECT, SWITCH, */}
          <Route path="/about" element = {<About leaders = {this.state.leaders}/>} />
          {/* thank you : ) */}
          <Route path='*' element={<Navigate to="/home" replace />}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default Main;