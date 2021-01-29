import React from "react";

export default function Pizza({ details }) {
    if (!details) {
        return (
          <h3> This is a placeholder message while we try to load your pizza </h3>
        );
      }
    
      return (
        <div className="pizzaContainer">
          <h2>{details.name}</h2>
          <p> Size:{details.size} </p>
           <p> Toppings:{details.toppings} </p> 
          <p> Special Instructions: {details.specIns} </p>
        </div>
      );
    }
    
    //Note: May need to disable toppings above!