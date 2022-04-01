import React from "react";
import "../App.css"
import Carrito from "../images/carrito.jpeg"



export default function CartWidget() {
  return (
    < >
    <img src={Carrito} alt="imagen carrito" className="carrito"/>
    </>
  );
}

