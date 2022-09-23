import React from "react";
import { Link } from "react-router-dom";

function VendingMachine () {
    return (
        <div className="vendingMachine">
            <h1>You Must Choose.</h1>
            <ul>
                <li><Link to="/snickers">Snickers</Link></li>
                <li><Link to="/twinkie">Twinkie</Link></li>
                <li><Link to="/chips">Chips</Link></li>
            </ul>
        </div>
    )
}

export default VendingMachine;