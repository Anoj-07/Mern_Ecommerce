import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = "$";
    const delivery_fee = 10;

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    //login and signup state token
    const [token , setToken] = useState("");

    //to remain save the context after refresh
    useEffect(() => {
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    }, []); 

    const value = {
        products,
        currency,
        delivery_fee,
        navigate, backendUrl,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;