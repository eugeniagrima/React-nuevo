import "./item.css";
import {Link} from "react-router-dom";
import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const Item = ({info}) => {
    
    return (
        <Link to={`/detalle/${info.id}`} className="comidas">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;