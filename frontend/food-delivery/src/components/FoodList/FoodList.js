import { useEffect, useState } from 'react';
import { food_list } from '../../assets/assets';
import DisplayFood from './DisplayFood';

const FoodList = ({category}) => {
     const [list,setList] = useState([])
    
        const fetchList = async()=>{
            const url = 'http://localhost:3500/api/food/list';
            try {
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error ('Failed to fetch the data')
                }
                
                const result = await res.json();
                let newList = await result.data;
                setList([...newList])

            } catch (error) {
                console.log(error)
            }   
    }
    useEffect(()=>{
        fetchList()
    },[])
    


    return ( 
        <div className="food-list-section">
            <h2 className='top-des'>Top dishes near you</h2>
            <div className="food-list">
            {list.map((food,index)=>{
                    return <DisplayFood
                     key = {index} 
                     id = {food._id} 
                     name = {food.name}
                     description = {food.description}
                     price = {food.price} 
                     image = {`http://localhost:3500/images/${food.image}`} 
                     category = {category} 
                     food = {food}/>
                })}
           
                {food_list.map((food,index)=>{
                    return <DisplayFood
                     key = {index} 
                     id = {food._id} 
                     name = {food.name}
                     description = {food.description}
                     price = {food.price} 
                     image = {food.image}
                     category = {category} 
                     food = {food}/>
                })}
               
                


            </div>
        </div>
     );
}
 
export default FoodList;