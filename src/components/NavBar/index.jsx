import React from "react";
import CartWidget from "../CartWidget";
import "./navBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink className="nav__link" to='/'> Panadería</NavLink>
                </div>
                <ul className="nav__list">
                    <li>
                        <NavLink className="nav__link" to='/categoria/dulce'> Dulce</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav__link" to='/categoria/salado'> Salado</NavLink>
                    </li>
                    <li>
                    
                        <CartWidget/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;