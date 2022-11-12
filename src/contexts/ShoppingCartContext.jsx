import { createContext, useState, useContext, useEffect } from "react";
import {
  addProdcutToCart,
  createCart,
  getCart,
  removeProductFromCart,
  updateUserId,
} from "../services/ShoppingCartService";
import { useAuthContext } from "./AuthContext";
//import { getProducts } from '../services/ProductService'

const ShoppingCartContext = createContext();

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const [cartId, setCartId] = useState(window.localStorage.getItem("cartId"));
  const { user } = useAuthContext();

  useEffect(() => {
    if (cartId) {
      getCart(cartId).then((cart) => setCart(cart));
    } else {
      createCart({ userId: user?.id }).then((cart) => {
        window.localStorage.setItem("cartId", cart.id);
        setCartId(cart.id);
        setCart(cart);
      });
    }
  }, [cartId, user]);

  useEffect(() => {
    if (cart && !cart.userId && user) {
      updateUserId(cartId, user.id).then((cart) => setCart(cart));
    }
  }, [user, cart, cartId]);

  const addToCart = (productId) => {
    console.log("entro");
    if (cartId) {
      addProdcutToCart(cartId, productId).then((cart) => setCart(cart));
    }
  };

  const removeFromCart = (productId) => {
    if (cartId) {
      removeProductFromCart(cartId, productId).then((cart) => setCart(cart));
    }
  };

  const context = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={context}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
