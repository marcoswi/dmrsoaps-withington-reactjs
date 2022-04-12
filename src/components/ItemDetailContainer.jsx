import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import customFetch from "../utils/customFetch.js";
import Producto from '../utils/producto.js';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState ({});

    useEffect (() => {
        customFetch (3000, Producto)
        .then (resultado => setProducto (resultado)) 
        .catch (error => console.log (error));
    },[producto])

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    );
}

export default ItemDetailContainer