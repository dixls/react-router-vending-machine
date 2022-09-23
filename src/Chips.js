import React from "react";
import { Link } from "react-router-dom";

function Chips () {
    return (
        <div className="chips">
            <h1>It's chips!</h1>
            <p>return to the <Link to="/">Vending Machine</Link></p>
        </div>
    )
}

export default Chips;