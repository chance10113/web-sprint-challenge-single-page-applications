import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import schema from "./Validation/PizzaSchema";
import Pizza from "./Components/Pizza";
import * as yup from "yup";
import data from "./Validation/fakeData"
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

function fetchPizzas() {
  return Promise.resolve({ success: true, data })
}
// console.log(fetchPizzas)

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const getPizzas = () => {
    fetchPizzas()
      // .get("")
      .then((res) => {
        console.log("res", res)
        console.log("resData", res.data)
        setPizzas(res.data);
      })
      .catch((error) => {
        console.log("GetPizzas Broke!", error)
        ;
      });
  };

  const postNewPizza = (newPizza) => {
    console.log(newPizza);
    fetch(data)
      .post(data, newPizza)
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
      name: formValues.name.trim(),
      specIns: formValues.specIns.trim(),
      size: formValues.size.trim(),
      pineapple: formValues.pineapple,
      jalepeno: formValues.jalepeno,
      mandOranges: formValues.mandOranges,
      ham: formValues.ham,
    };
    postNewPizza(newPizza);
  };

console.log(getPizzas())
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
