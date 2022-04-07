import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch.js";
import ItemList from "./ItemList.jsx";
import productos from "../utils/productos.js";
import css from "../CSSComponents/ItemListContainer.module.css"

export default function ItemListContainer({greeting}) {

  const [items, setItems] = useState ([]);

  useEffect (() => {
      customFetch(3000, productos)
      .then (resultado => setItems(resultado))
      .catch(error => console.log(error));
  }, [items])

  return (
    <div className={css.containerItems}>
      <ItemList productos={items} />
    </div>
  );
}
