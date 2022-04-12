import React from "react";
import NavBar from "./components/NavBar";
import "./App.css"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


export default function App() {
  return (
    < >
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
}

