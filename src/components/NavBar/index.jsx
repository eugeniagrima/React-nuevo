import React from "react";

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
                    <a className="nav__link" href="#"> Carrito</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;