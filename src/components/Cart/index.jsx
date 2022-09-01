import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import {Link} from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: "Eugenia",
            email: "eugeniagrima@gmail.com",
            phone: "1153296298",
            address: "Salguero 3048"
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log (id))
    }

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
        <button onClick={handleClick}>Ir a pagar!</button>
        </>
    )
   }

export default Cart;