import React, { Component } from "react";
import Home from "./Home";
import DISHES from "../shared/dishes";
import DishDetail from "./DishDetail";
import Menu from "./Menu";
import Footer from "./Footer";
import Header from "./Header";
import Contact from "./Contact";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      currentPage: "Home",
    };
  }

  render() {
    const dishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
        />
      );
    };

    const HomePage = () => {
      return <Home dishes={DISHES}></Home>;
    };

    const ContactUs = () => {
      return <Contact></Contact>;
    };

    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.state.dishes} />}
              />
              <Route path="/menu/:dishId" component={dishWithId}></Route>
              <Route path="/contactus" component={ContactUs} />
              <Redirect to="/home" />
            </Switch>
          </div>
          <div className="pt-4">
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
