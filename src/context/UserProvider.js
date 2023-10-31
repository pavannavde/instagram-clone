import userContext from "./userContext";
import { useState, useEffect } from "react";

const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setToken(token);
        }
    },[])

    return(
        <userContext.Provider value={{token, setToken}}>
             {children}
        </userContext.Provider>
    )
}

export default UserProvider;