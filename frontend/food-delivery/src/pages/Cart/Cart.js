import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Cart.css'
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const {cartItems,addToCart,removeFromCart,food_list,getTotalAmount,cartLi} = useContext(StoreContext)
    const navigate = useNavigate();

    const [listFood,setList] = useState([])
    
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


    return ( 
        <div className="cart">
            <div className="cart-items">
                <div className="item-list-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                {listFood.map((eachItem,index)=>{
                    if(cartLi[eachItem._id]){
                        return <div className="item-list-title cart-items-list" key = {index}>
                            <p><img src={`http://localhost:3500/images/${eachItem.image}`} alt="" /></p>
                            <p>{eachItem.name}</p>
                            <p>${eachItem.price}</p>
                            <p>{cartLi[eachItem._id]}</p>
                            <p>${eachItem.price * cartLi[eachItem._id]}</p>
                            <p onClick={()=>removeFromCart(eachItem._id)} className="cancel">x</p>
                        </div>
                    }
                })}
                {food_list.map((eachItem,index)=>{
                    if(cartItems[eachItem._id]){
                        return <div className="item-list-title cart-items-list" key = {index}>
                            <p><img src={eachItem.image} alt="" /></p>
                            <p>{eachItem.name}</p>
                            <p>${eachItem.price}</p>
                            <p>{cartItems[eachItem._id]}</p>
                            <p>${eachItem.price * cartItems[eachItem._id]}</p>
                            <p onClick={()=>removeFromCart(eachItem._id)} className="cancel">x</p>
                        </div>
                    }
                })}

                

            </div>

            <div className="cart-bottom">
                <div className="total-info">
                    <h2>Cart Totals</h2>
                    <div className="payment-info">
                        <div>
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <div>
                            <p>Delivery fee</p>
                            <p>${getTotalAmount() === 0?0:5}</p>
                        </div>
                        <div className="total-payment-cont">
                            <p>Total</p>
                            <p>${getTotalAmount() === 0?0: getTotalAmount() + 5}</p>
                        </div>
                        <button onClick = {()=>navigate('/order')}>Proceed To Checkout</button>
                    </div>

                </div>
                <div className="promo-code-container">
                    <p>If you have a promocode, enter it here</p>
                    <form>
                        <input type="text" placeholder="promo code" required/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

            
        </div>
     );
}
 
export default Cart;