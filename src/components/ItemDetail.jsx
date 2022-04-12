import React from 'react';
import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({producto}) => {

console.log (producto)

    return (
        <div>
            <p>Detalle de producto</p>
            <h2>{producto.nombre}</h2>
            <h3>{producto.precio} </h3>
            <div><ItemCount stock= {5} initial= {1}/></div>
        </div>
    );
};

export default ItemDetail;