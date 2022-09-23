import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/">
                Snickers
            </NavLink>
            <NavLink exact to="/">
                Eat
            </NavLink>
            <NavLink exact to="/">
                Drink
            </NavLink>
        </nav>
    )
}

export default NavBar;