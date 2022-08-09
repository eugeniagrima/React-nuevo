import ItemCount from "../ItemCount";
import React from "react";
import Title from "../Title";


export const ItemListContainer = ({texto}) => {
    
    const onAdd= (quantity) => {
        console.log("compraste " + {quantity} + " unidades");
    }
    
    return (
       <>
        <Title bienvenida={texto}/>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
       </>
    );
}

export default ItemListContainer; 