import React from "react";
import ItemCount from "./ItemCount.jsx";


export default function ItemListContainer({greeting}) {
  return (
    < >
    <div className="itemListContainer">{greeting}</div>
    <div><ItemCount stock= {5} initial= {1}/></div>
    </>
  );
}
