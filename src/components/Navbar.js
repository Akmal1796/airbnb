import React from "react";
import logo from '../images/airbnb-logo.png'

function Navbar() {
    return(
        <nav>
            <img src={logo} className="logo"/>
        </nav>
    );
}

export default Navbar