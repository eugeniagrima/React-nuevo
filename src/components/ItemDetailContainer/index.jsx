import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";

const comida = { id:3, image: "https://pixabay.com/images/id-428111/", title: "Compotas"}

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

       useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve (comida);
            }, 2000);
        });
        getData.then(res => setData(res));
       }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer; 