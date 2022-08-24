import React from "react";
import { useCartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.lenght === 0) {
        return (
            <>
            <p>Te vas a quedar con hambre!!</p>
            <Link to='/'> Llevate algo!</Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            Total: {totalPrice()}
        </p>
        </>
    )
   }

export default Cart;