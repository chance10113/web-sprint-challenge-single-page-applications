import React from "react"

export default function PizzaForm(props) {
    const { values, submit, change, errors } = props;

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

        null
      )
}