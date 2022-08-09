import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#"> Panadería</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#"> Dulce</a>
                    </li>
                    <li>
                    <a className="nav__link" href="#"> Salado</a>
                    </li>
                    <li>
                    <a className="nav__link" href="#"></a>
                    <CartWidget/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;