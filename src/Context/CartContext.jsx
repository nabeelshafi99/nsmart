import { createContext, useState, useEffect } from "react";
import { addDoc,collection, doc, setDoc } from "firebase/firestore";
import {auth, db} from "../utils/firebase"
export const CartItemsContext = createContext();

const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQty, setCartItemsQty] = useState(0);
  const [isLoad, setIsLoad] = useState(true);
  const [user , setUser] = useState(false);

  const addCartItems = (item) => {
    const tempArr = cartItems;
    const indexMatch = cartItems.findIndex((res) => res.id == item.id);
    if (indexMatch == -1) {
      tempArr.push({ ...item, qty: 1 });
    } else {
      tempArr[indexMatch].qty++;
    }
    setCartItems([...tempArr]);
  };
  
  const userId = auth.currentUser;

  useEffect( () => {
    if(userId){
      const [cartPro] = cartItems;
     try{
      const cartObj = {
        ...cartPro,
        user : userId.uid
      }
      isLoad ? setIsLoad(false) :  setDoc(doc(db,"cart",userId.uid),cartObj)
    }catch (error) {
      console.log(error)
    }
  } 
  },[cartItems])

  

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartItemsQty,
        setCartItemsQty,
        addCartItems,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartContext;
