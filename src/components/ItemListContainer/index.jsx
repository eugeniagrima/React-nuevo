import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import React, {useState, useEffect} from "react";
import Title from "../Title";

const comidas = [
  { id:1, image: "https://pixabay.com/images/id-1971552/", title: "torta"},
  { id:2, image: "https://pixabay.com/images/id-1799731/", title:"pan"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(comidas)
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd= (quantity) => {
        console.log("compraste " + {quantity} + " unidades");
    }
    
    return (
       <>
        <Title bienvenida={texto}/>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data}/>
       </>
    );
}

export default ItemListContainer; 