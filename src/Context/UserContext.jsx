import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

export const UserContextCreate = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState(false)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(false)
            }
        })
    },[user])


    return (
        <UserContextCreate.Provider value={{user, setUser}}>
            {children}
        </UserContextCreate.Provider>

    )
}

export default UserContext;