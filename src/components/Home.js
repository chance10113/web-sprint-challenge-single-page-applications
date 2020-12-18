import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const routeToPizzaForm = () => {
    history.push("/PizzaForm");
  };

  return (
    <div className="Home Page Holder">
      <img
        className="Pizza-Splash"
        src="https://source.unsplash.com/oBbTc1VoT-0"
        alt=""
      />
      <button onClick={routeToPizzaForm} className="Home to Shop Button">
        {" "}
        PIZZA?{" "}
      </button>
    </div>
  );
}
