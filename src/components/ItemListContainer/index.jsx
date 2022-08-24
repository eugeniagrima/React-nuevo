
import ItemList from "../ItemList";
import React, {useState, useEffect} from "react";
import Title from "../Title";
import { useParams } from "react-router-dom";

const comidas = [
  { id:1, price: 700, image: "https://pixabay.com/images/id-4020349/", category: "dulce", title: "Torta"},
  { id:2, price: 450, image: "https://pixabay.com/images/id-4967195/", category: "dulce", title: "Brownie"},
  { id:3, price: 370, image: "https://pixabay.com/images/id-1383280/", category: "dulce", title: "Galletas"},
  { id:4, price: 400, image: "https://pixabay.com/images/id-4046506/", category: "salado", title:"Pan"},
  { id:5, price: 730, image: "https://pixabay.com/images/id-3538455/", category: "salado", title:"Sandwich"},
  { id:6, price: 900, image: "https://pixabay.com/images/id-791629/", category: "salado", title:"Ensalada"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(comidas)
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(comidas => comidas.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
       }, [categoriaId])

    
    
    return (
       <>
        <Title bienvenida={texto}/>        
        <ItemList data={data}/>
       </>
    );
}

export default ItemListContainer; 