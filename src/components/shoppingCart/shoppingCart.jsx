import React from "react";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
//import { deleteCart } from "../../services/ShoppingCartService";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart } = useShoppingCartContext();
  //const totalPrice = cart.reduce();
  //const totalShoppingCart = cart.reduce();


  return (
    <div className="container">
      {cart.items?.map((item) => {
        return (
          <ShoppingCartItem
            photo={item.photo}
            name={item.name}
            price={item.price}
           
          />
        );
      })}

      <div className="total-cart">
        <p>Total: </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
