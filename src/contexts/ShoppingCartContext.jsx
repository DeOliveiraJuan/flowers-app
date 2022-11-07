import { createContext, useState, useContext, useEffect } from 'react'
import { createCart, getCart, } from '../services/ShoppingCartService'
//import { getProducts } from '../services/ProductService'

const ShoppingCartContext = createContext()

export const useShoppingCartContext = () => useContext(ShoppingCartContext)

export const ShoppingCartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState(window.localStorage.getItem('cartId'));

    useEffect(() => {
        if (cartId) {
            getCart()
            .then(cart => {
            setCart(cart)
            })
            // Hago un fetch, me lo traigo del back y hago el setCart(cart)
        } else {
        createCart()
        .then(cartId => {
            window.localStorage.setItem('cartId', cartId)
            setCartId(cartId)
            setCart(cart)
        })
            // Creo un cart en el back y seteo en el localStorage el id en cartId
            // window.localStorage.setItem('cartId', cartId)
            // setCartId(cartId)
            // setCart(cart)
        }
    }, [cartId, cart])

    const addToCart = (product) => {
        const alreadyIn = cart.find((x) => x.id === product.id)
        if(alreadyIn) {
            setCart(
                cart.map((x) => 
                 x.id === product.id ? {...alreadyIn, qty: alreadyIn.qty + 1} : x ))
        } else {
            setCart([...cart, {...product, qty: 1}])
        }
        // Añadir item al cart 
        // setCart(cart)  
    }

    const removeFromCart = (id) => {
        
        // Eliminar item al cart 
        // setCart(cart)  
    }

    const context = {
        cart,
        addToCart,
        removeFromCart
    }
    
    return (
        <ShoppingCartContext.Provider value={context}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;