import React from "react";
import { Link } from "react-router-dom";

function Twinkie () {
    return (
        <div className="twinkie">
            <h1>It's a twinkie!</h1>
            <p>return to the <Link to="/">Vending Machine</Link></p>
        </div>
    )
}

export default Twinkie;