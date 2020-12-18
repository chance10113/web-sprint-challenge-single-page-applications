import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
//Prolly need a Schema
//Might need to create a seperate "Order" or "Pizza".js
//Need yup as validation
//Might need to create Dummy Data to import

// Initial States
const initialFormValues = {
  // text inputs
  name: "",
  specIns: "", //Special Instructions
  // dropdown
  size: "",
  // checkboxes
  pineapple: false,
  jalepeno: false,
  mandOranges: false,
  ham: false,
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialPizzas = [];
const initialDisabled = true;

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  //Create fakeData to render array of orders?
  //Maybe a function to post new pizza order to the fakeData?
  //Def need things to handle form changes and events stuff

  const inputChange = (name, value) => {
    return null
    //Create a funciton to handle changes
  }

  const formSubmit = () => {
    return null
    //create a function to submit the form
  }

  return (
    <div className="App-Holder-Div">
      <nav>
        <div className="nav-bar-links">
          <Link to="/"> Home </Link>
          <Link to="/PizzaForm"> Pizza? </Link>
        </div>
        <h1 className="Home-Header">Lambda Eats</h1>
        <h2> Would you like a....? </h2>
      </nav>
      <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />

      {/* {pizzas.map((pizza) => {
        return <Pizza key={pizza.id} details={pizza} />
      })}  */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
