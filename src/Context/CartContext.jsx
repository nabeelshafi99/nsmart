import { createContext,useContext, useState, useEffect } from "react";
import { addDoc,collection, doc ,updateDoc,getDocs,deleteDoc} from "firebase/firestore";
import {auth, db} from "../utils/firebase";
import { UserContextCreate } from "./UserContext";

export const CartItemsContext = createContext();


const CartContext = ({ children }) => {
  const {user,setUser} = useContext(UserContextCreate)
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsTest, setCartItemsTest] = useState([]);
  const [cartItemsQty, setCartItemsQty] = useState(0);
  const [isLoad, setIsLoad] = useState(true);

const dataGet = async () => {
  try{
  const tempArr = []
  const querySnapshot = await getDocs(collection(db, "cart"));
querySnapshot.forEach((doc) => {
  if(doc.data().uid === user.uid){
  tempArr.push(doc.data())
  }
});
  setCartItems(tempArr)
  }catch (error){
    console.log("error message => ",error)
  }
} 

 const addCartItems = async (item) => {
  try{
   let isMatch = false;
    let updateRef = false;
    const querySnapshot = await getDocs(collection(db, "cart"));
querySnapshot.forEach( (doc) => {
  if(doc.data().uid === user.uid && doc.data().id == item.id){
    isMatch = true;
    updateRef = {
      docId : doc.id,
     qty: doc.data().qty
    }
  }
});
if(!isMatch){
   const cartObj = {
        ...item,
        uid : user.uid,
        qty:1
      }
  await addDoc(collection(db,"cart"),cartObj);
}
if(isMatch){
 await updateDoc(doc(db,"cart",updateRef.docId), {
  qty: updateRef.qty + 1 
})
} 
  }catch(error) {
    console.log("error message => ",error)
  } 
  
  };

 const removeCartItems = async (item,ins) => {
   try{
   let isMatch = false;
    let removeRef = false;
    const querySnapshot = await getDocs(collection(db, "cart"));
querySnapshot.forEach( (doc) => {
  if(doc.data().uid === user.uid && doc.data().id == item.id && doc.data().qty > 1){
    isMatch = true;
    removeRef = {
      docId:doc.id,
      qty: doc.data().qty
    }
  }
  if(doc.data().uid === user.uid && doc.data().id == item.id && doc.data().qty == 1){
    isMatch = false;
     removeRef = {
      docId:doc.id,
      qty: doc.data().qty
    }
  }
  if(doc.data().uid === user.uid && doc.data().id == item.id && ins){
    isMatch = false;
     removeRef = {
      docId:doc.id,
      qty: doc.data().qty
    }
  }
  
});

if(!isMatch){
  await deleteDoc(doc(db, "cart", removeRef.docId)) 
}
if(isMatch){
 await updateDoc(doc(db,"cart",removeRef.docId), {
  qty: removeRef.qty - 1 
}) 
} 
   }catch(error){
     console.log("error message => ",error)
   }
   
  };

  useEffect(()=>{
    setIsLoad(false)
    if(!isLoad){
  dataGet()
    }
  },[isLoad,user,cartItems])

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartItemsQty,
        setCartItemsQty,
        addCartItems,
        removeCartItems
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartContext;
