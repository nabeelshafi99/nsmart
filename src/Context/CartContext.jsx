import { createContext, useState } from "react";

export const CartContextContext = createContext();

const CartContext = ({ children }) => {

    const [cartContext, setCartContext] = useState([])

    


    return (
        <CartContextContext.Provider value={{cartContext, setCartContext}}>
            {children}
        </CartContextContext.Provider>

    )
}

export default CartContext;