import { useContext, useEffect, useState} from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { assets } from '../../assets/assets';
import './FoodList.css'
import { StoreContext } from "../../context/StoreContext";


const DisplayFood = ({ key, id,name,description,price,image,category,food}) => {
    const {cartItems,addToCart,removeFromCart,cartLi} = useContext(StoreContext)
      
    return ( 
            <div className = {(category === food.category || category ==='All')?"food":"disappear"}  key = {key}>
                        <img className='cover-img' src={image} alt="" />
                        {!(id.length > 5? cartLi[id]:cartItems[id])
                        ?<img className='inc' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
                        :<div className='item-counter'>
                         <img onClick={()=>addToCart(id)} src={assets.add_icon_green} />
                         <p>{(id.length > 5? cartLi[id]:cartItems[id])}</p>
                         <img className='dec' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
                        </div>
                    }
                        <div className="name">
                            <h2 className='food-name'>{name}</h2>
                            <div className='rating'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </div> 
                        </div>
                        <p>{description}</p>
                        <h2 className='price'>${price}</h2>
                    </div>
     );
}
 
export default DisplayFood;