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

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
