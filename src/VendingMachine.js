import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message"
import "/VendingMachine.css"

function VendingMachine(){
    return(
        <div className="vendingMachine">
            <Message>
                <h1>Please feed me your quarters!</h1>
            </Message>
            <Message>
                <h1><NavLink exact to="/soda">Soda</NavLink></h1>
                <h1><NavLink exact to="/chips">Chips</NavLink></h1>
                <h1><NavLink exact to="/candy">Candy</NavLink></h1>
            </Message>
        </div>
    )
}

export default VendingMachine;