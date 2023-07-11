import React, { useEffect } from "react";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import './ShoppingCartItem.css'

const ShoppingCartItem = ({ product }) => {
  const { addToCart, removeFromCart } = useShoppingCartContext();
  return (
    <div className="dropdown-item cart-dropdown d-flex justify-content-between ">
        <p className="product-name p-2"><b>{product.productId.name}</b></p>
        <p className="p-2 product-price">{product.productId.price}€</p>
      <button
        type="button"
        className="btn-dropdown remove-product mt-1"
        onClick={() => removeFromCart(product.productId.id)}
      >
        -
      </button>
      <p className="product-qty py-2 px-0">{product.qty}</p>
      <button
        type="button"
        className="btn-dropdown add-product mt-1"
        onClick={() => addToCart(product.productId.id)}
      >
        +
      </button>
    <div className="item-total mt-2">
      <b>{product.productId.price * product.qty}€</b>
    </div>
    </div>
  );
};

export default ShoppingCartItem;
