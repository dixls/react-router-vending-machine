import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
    return (
        <nav className="NavBar">
            <NavLink end to="/">
                Home
            </NavLink>
            <NavLink exact to="/snickers">
                Snickers
            </NavLink>
            <NavLink exact to="/twinkie">
                Twinkie
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
        </nav>
    )
}

export default NavBar;