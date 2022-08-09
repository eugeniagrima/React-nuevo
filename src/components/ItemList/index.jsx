import Item from "../Item";
import React from "react";

const ItemList = ({data= []}) => {
    return (
       data.map(comidas => <Item key={comidas.id} info={comidas}/>)
    );
}

export default ItemList;