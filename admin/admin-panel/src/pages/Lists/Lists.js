import { useEffect, useState } from 'react';
import './Lists.css';
import { toast } from 'react-toastify';
const Lists = () => {
    const [list,setList] = useState([])

    const fetchList = async()=>{
        const url = 'http://localhost:3500/api/food/list';
        try {
            const res = await fetch(url);
            if(!res.ok){
                throw new Error ('Failed to fetch the data')
            }
            
            const data = await res.json();
            setList(data.data)
        } catch (error) {
            toast.error('Error')
        }   
}
useEffect(()=>{
    fetchList()
},[])

const removeFromList = async(itemId)=>{
    try {
        const resp = await fetch('http://localhost:3500/api/food/remove',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({id:itemId})
            
        })
        if (!resp.ok) {
            throw new Error('Failed to upload image');
        }
        const result = await resp.json();
        await fetchList();
        toast.success('Item removed');
        
        
    } catch (error) {
        toast.error('Failed to remove')
        
    }


}

return ( 
    <div className="lists">
        <div className="cart-items">
            <h2>All Food List</h2>
                <div className="item-list-title header">
                    <p>Image</p>
                    <p className='longest'>Name</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Action</p>
                </div>

                {list.map((eachItem,index)=>{
                    if(eachItem){
                        return <div className="item-list-title disappear" key={index}>
                            <p><img src={`http://localhost:3500/images/${eachItem.image}`} alt=""/></p>
                            <p className='longest'>{eachItem.name}</p>
                            <p>{eachItem.category}</p>
                            <p>${eachItem.price}</p>
                            <p onClick={()=>removeFromList(eachItem._id)} className="cancel">x</p>
                        </div>
                    }
                })}

            </div>
        

    </div>
 );
}
 
export default Lists;