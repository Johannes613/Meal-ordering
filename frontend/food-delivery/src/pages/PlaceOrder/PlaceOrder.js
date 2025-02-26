import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import './PlaceOrder.css'

const PlaceOrder = () => {
    const {getTotalAmount} = useContext(StoreContext)
    const navigate = useNavigate();
    return ( 
        <div className="place-order">
            <div className="place-order-left">
                <h2>Delivery Information</h2>
                <div className="multi-field">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email adress" /> 
                <br />
                <input type="text" placeholder="Street" />
                <div className="multi-field">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-field">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="tel" placeholder="Phone number" />
            </div>

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
                        <button onClick = {()=>navigate('/order')}>Proceed To Payment</button>
                    </div>

                </div>
            
        </div>
     );
}
 
export default PlaceOrder;