import React, { useState } from "react";
import "../CSSComponents/ItemCount.css";

export default function ItemCount ({ stock, initial }) {
    let [counter, setCounter] = useState (initial);

    const more = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const less = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const onAdd =()=>{
        if(counter > 0 && counter < stock){
            alert(`Quieres agregar ${counter} items al carrito?`);
        }
        stock = stock - counter;
    }

    return (
        <>
        <div className="card">
            <div className="card_moreLess">
                <button onClick={less}>
                    <span className="material-icons">remove</span>
                </button>
                <p>{counter}</p>
                <button onClick={more}>
                    <span className="material-icons">add</span>
                </button>
            </div>

            <div className="card_add">
                <button onClick={onAdd}>
                    <p>Agregar al carrito</p>
                </button>
            </div>

        </div>
        </>
    );
};
