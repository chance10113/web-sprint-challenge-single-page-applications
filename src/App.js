import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom"
import Home from "./components/Home"
import PizzaForm from "./components/PizzaForm"

//Might need to create Dummy Data to import

const App = () => {
  return (
    <div className="App-Holder-Div" >
        <nav> 
        <div className="nav-bar-links">
          <Link to="/"> Home </Link>
          <Link to="/PizzaForm"> Pizza? </Link>
        </div>
        <h1 className="Home-Header" >Lambda Eats</h1>
        <h2>  Would you like a....? </h2>
        </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
