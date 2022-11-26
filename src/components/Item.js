import {React, useState} from "react";

function Item({ name, category }) {

  const [isAdd, setAdd] = useState(true)

  function handleAddToCart(e) {
    setAdd(isAdd => !isAdd)

  }

  const cartState = isAdd ? "Add to Cart" : "in-cart";

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isAdd ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
