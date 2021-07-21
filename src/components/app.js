import React, { Component } from "react";
import axios from "axios";
import "./app.css";
import Navbar from "./navbar";
import Home from "./pages/home";
import Zero from "./pages/zero";
import One from "./pages/one";
import Two from "./pages/two";
import Three from "./pages/three";
import Four from "./pages/four";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }

  getPortfolioItems() {
    axios
      .get("https://michaelclevenger.devcamp.space/portfolio/portfolio_items")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    this.getPortfolioItems();
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/zero" component={Zero} />
            <Route path="/one" component={One} />
            <Route path="/two" component={Two} />
            <Route path="/three" component={Three} />
            <Route path="/four" component={Four} />
          </Switch>
        </Router>
      </div>
    );
  }
}
