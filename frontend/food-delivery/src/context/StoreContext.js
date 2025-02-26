import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext('null')



const GlobalState = ({children})=>{
    
const [listFo,setList] = useState([])
    
const fetchFoodList = async()=>{
    const url = 'http://localhost:3500/api/food/list';
    try {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error ('Failed to fetch the data')
        }
        const data = await res.json();
        const newList = data.data;
       
        setList(newList)
        // console.log(newList)
    } catch (error) {
        console.log(error)
    }   
}
useEffect(()=>{
fetchFoodList()
},[])

    const [cartItems,setCartItems] = useState({});
    const [token,setToken] = useState('');
    useEffect(()=>{
        const userToken = localStorage.getItem('token')
        setToken(userToken)
    },[])

        const [cartLi,setCartList] = useState([])
  const listCart = async()=>{
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login first');
            }
            try {
                const response = await fetch('http://localhost:3500/api/user/cart/get',{
                    method: 'GET',
                    headers: {
                        token: token,
                    }})
                if(!response.ok)
                    throw new Error('Error occured');
                const data = await response.json()
                setCartList(data.Items)
    
    
            } catch (error) {
                console.log(error)
                
            }
        }
        useEffect(()=>{
            listCart();
        },[])
       

const addToCart = async(itemId)=>{
    if(itemId.length < 5){
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
        }
    }
    else{
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login first');
            }
        
            const response = await fetch('http://localhost:3500/api/user/cart/add', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    token: token,
                },
                body: JSON.stringify({ itemId: itemId}) // Stringify the body object
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const res = await response.json();
            listCart()
        } catch (error) {
            console.error('Error:', error.message || error);
        }
        

    }
   
}
const removeFromCart = async(itemId)=>{
    if(itemId.length < 5){
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }
    else{
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login first');
            }
        
            const response = await fetch('http://localhost:3500/api/user/cart/remove', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    token: token,
                },
                body: JSON.stringify({ itemId: itemId}) // Stringify the body object
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const res = await response.json();
            listCart()
        } catch (error) {
            console.error('Error:', error.message || error);
        }
        
    }
}
const getTotalAmount = ()=>{
    let totalAmount = 0;
    for(const key in cartItems){
        if(cartItems[key]){
            const matchedItem = food_list.find((eachItem) => eachItem._id === key)
            totalAmount += matchedItem.price * cartItems[key]
        }
    }
    for(const key in cartLi){
        if(cartLi[key]){
            const matchedItem = listFo.find((eachItem) => eachItem._id === key)
            if(matchedItem){
                console.log('math',matchedItem.price)
                totalAmount += matchedItem.price  + cartLi[key]
            }
        }
    }
    return totalAmount
}

    return(
        <div className="context">
            <StoreContext.Provider value = {{cartItems,addToCart,removeFromCart,food_list,getTotalAmount,token,setToken,cartLi}}>
                {children}
            </StoreContext.Provider>

        </div>
    )
}
export default GlobalState;