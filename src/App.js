import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import schema from "./components/PizzaSchema";
import Pizza from "./components/Pizza";
import * as yup from "yup";
import axios from 'axios'
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
};

const initialPizzas = [];

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  //Create fakeData to render array of orders?
  //Maybe a function to post new pizza order to the fakeData?
  //Def need things to handle form changes and events stuff

  const getPizzas = () => {
    
    axios
      .get("")
      .then((res) => {
        setPizzas(res.data);
      })
      .catch((error) => {
        console.log("GetUsers Broke!", error);
      });
  };

  const postNewPizza = (newPizza) => {
    console.log(newPizza);
    axios
      .post("", newPizza)
      .then((res) => {
        setPizzas([res.data, ...pizzas]);
        setFormValues(initialFormValues);
        console.log("Post getBack?", pizzas);
        console.log("Response", res.data);
        console.log("setPizzas", [res.data, ...pizzas]);
      })
      .catch((error) => {
        console.log("postNewPizzaBroke", error);
      });
  };


  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors,
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newPizza = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewPizza(newPizza);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  // useEffect(() => {
  //   //SCHEMA STUFF GOES HERE!!! BETTER WRITE IT!!
  //   //also some SetDisabled stuff too
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

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
        errors={formErrors}
      />

       {/* {pizzas.map((pizza) => {
        return <Pizza key={pizza.id} details={pizza} />
      })}   */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
