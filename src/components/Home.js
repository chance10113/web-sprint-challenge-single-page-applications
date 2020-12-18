//HOMEPAGE:
//Uses "/" route, has a button for the form ("PIZZA?)?

import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
const history = useHistory()

const routeToPizzaForm = () => {
    history.push("/PizzaForm")
}

return(
    <div className= "Home Page Holder">
        <button onClick={routeToPizzaForm} className="Home to Shop Button"> PIZZA? </button>
    </div>
)

}