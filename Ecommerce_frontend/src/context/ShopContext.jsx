import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartitems] = useState({});


    //Add to cart page
    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error("select Product size");
            return;
        }

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartitems(cartData);
    }

    //Get cart items count(wishlist)
    const getCartCount = () =>{
        let count = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        count += cartItems[items][item];
                    }
                    
                } catch (error) {
                    
                }
            }
        }
        return count;
    }

    //update cart items
    const updateQuantity = async(itemId, size, quantity)=>{
        let cartData = structuredClone(cartItems);
        
        cartData[itemId][size] = quantity;
        setCartitems(cartData);
    }

    //get cart amount
    const getcartAmount = () =>{
        let TotalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        TotalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
            
        }
        return TotalAmount;
    }

   

    // Backend
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    //login and signup state token
    const [token, setToken] = useState("");

    //to remain save the context after refresh
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, []);

    const value = {
        products,
        currency,
        delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount,
        updateQuantity,
        getcartAmount,
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