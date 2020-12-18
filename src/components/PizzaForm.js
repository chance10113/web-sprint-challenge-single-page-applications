//PIZZAFORM:
// Uses "/pizza" route,
// Text input for name
//     (Needs Validation, .min(2, "Needs at least 2 char"))
// Dropdown Menu with sizes
// At least 4 checkboxes for toppings (Give them each seperate Names!)
// Text Input for Special Instructions
// Add to Order button that submits form, returning database of name, size, toppings, instructions

import React, { useState, useEffect } from "react";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
  };

  return (
    <form className="PizzaForm-container" onSubmit={onSubmit}>
      <h2> Build a Pizza! </h2>
      <div className="PizzaForm group inputs">
        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
        <br />
        <label>
          Size
          <select onChange={onChange} value={values.size} name="size">
            <option value=""> Select an Option </option>
            <option value="small"> Small </option>
            <option value="medium"> Medium </option>
            <option value="large"> Large </option>
          </select>
        </label>
        <br />
        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.pineapple}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Jalepeno
          <input
            type="checkbox"
            name="jalepeno"
            checked={values.jalepeno}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Mandarin Oranges
          <input
            type="checkbox"
            name="mandOranges"
            checked={values.mandOranges}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            checked={values.ham}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Special Instructions
          <input
            value={values.specIns}
            onChange={onChange}
            name="specIns"
            type="text"
          />
        </label>
      </div>
      <div className="PizzaForm-group-submit">
        <button disabled={disabled}> Add to Order </button>
        <div className="Errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
      </div>
    </form>
  );
}
