import React from "react";
import { Link } from "react-router-dom";

function Snickers() {
    return (
        <div className="snickers">
            <h1>It's a snickers!</h1>
            <p>return to the <Link to="/">Vending Machine</Link></p>
        </div>
    )
}

export default Snickers;